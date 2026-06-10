# Krexlab CMS — Netlify Setup Guide

## Step 1: GitHub repo create
1. github.com → New repository → "krexlab-website" → Create
2. Upload this entire folder to the repo (or use GitHub Desktop)

## Step 2: Netlify connect
1. netlify.com → Sign up (GitHub account use ചെയ്യൂ)
2. "Add new site" → "Import from Git" → GitHub → krexlab-website repo select
3. Build settings: leave empty (static site)
4. "Deploy site" click

## Step 3: Enable Identity + Git Gateway
1. Netlify dashboard → Site → "Integrations" → "Identity" → Enable
2. Identity settings → "Registration" → "Invite only" select
3. Identity settings → scroll down → "Git Gateway" → Enable

## Step 4: Invite yourself as admin
1. Identity → "Invite users" → your email add
2. Email വരും → "Accept invite" click → password set

## Step 5: Access CMS
- yoursite.netlify.app/admin → login → done!
- Projects add/edit/delete
- Images upload
- Site settings change

## Step 6: Custom domain (krexlab.in)
1. Netlify → Domain settings → Add custom domain → krexlab.in
2. DNS records update ചെയ്യൂ (Netlify exact records കൊടുക്കും)

## CMS URL
After setup: https://krexlab.in/admin
