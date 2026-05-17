# Tech Immigrants — Community Dashboard

A data-driven management dashboard for the [Tech Immigrants](https://t.me/techimmigrants) community (17K+ members). Auto-updated daily via n8n + Telegram Bot API.

## What it shows

- **KPIs** — member count, subscribers, cross-platform reach (live from Telegram)
- **Member Growth** — daily trend line showing growth over time
- **Topic Activity** — which forum topics are hot/dormant (auto-ranked)
- **Pain Points** — keyword frequency analysis from real messages
- **Keyword Trends** — how pain points shift day over day
- **Unanswered Questions** — messages needing admin attention
- **Content Performance** — which content types drive the most engagement
- **Growth Levers** — platform distribution and untapped opportunities
- **Monetization Readiness** — demand vs execution readiness for revenue streams
- **Action Items** — prioritized quick wins and strategic moves
- **Admin Team** — who's active, role assignments

## Architecture

```
Daily at 6:00 AM EEST
  → n8n calls Telegram Bot API
  → Transforms & aggregates community data
  → Commits JSON to this repo (data/snapshot-latest.json)
  → Vercel auto-deploys
  → Dashboard shows fresh data within ~2 minutes
```

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Recharts (charts)
- Lucide React (icons)
- n8n (data pipeline)
- Telegram Bot API (data source)

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

Output goes to `dist/` — deploy as a static site to Vercel, Netlify, or Cloudflare Pages.

## Data Pipeline Setup

See [docs/n8n-dashboard-setup.md](docs/n8n-dashboard-setup.md) for full instructions on:
1. Creating a GitHub PAT
2. Configuring n8n variables
3. Importing the workflow
4. Testing and activating

The n8n workflow JSON is at `n8n/community-stats-workflow.json`.

## Data Files

- `data/snapshot-latest.json` — current state (read by dashboard at build time)
- `data/history/*.json` — daily archives for trend analysis

## License

Private — Tech Immigrants internal use.
