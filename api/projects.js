const https = require('https');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  try {
    // Fetch _projects folder from GitHub API
    const data = await fetch(
      'https://api.github.com/repos/akhilpanangad/krexlab-website/contents/_projects',
      { headers: { 'User-Agent': 'krexlab-website' } }
    );
    const files = await data.json();

    if (!Array.isArray(files)) {
      return res.status(200).json([]);
    }

    // Fetch each project file
    const projects = await Promise.all(
      files
        .filter(f => f.name.endsWith('.md') || f.name.endsWith('.json'))
        .map(async f => {
          const r = await fetch(f.download_url);
          const text = await r.text();
          return parseProject(text, f.name);
        })
    );

    res.status(200).json(projects.filter(Boolean));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

function parseProject(text, filename) {
  try {
    // Parse frontmatter markdown (---\nkey: value\n---)
    const match = text.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;
    const fm = match[1];
    const obj = {};
    fm.split('\n').forEach(line => {
      const [key, ...val] = line.split(':');
      if (key && val.length) {
        obj[key.trim()] = val.join(':').trim().replace(/^["']|["']$/g, '');
      }
    });
    obj.slug = filename.replace(/\.(md|json)$/, '');
    return obj;
  } catch {
    return null;
  }
}
