# Tech Immigrants — Community Dashboard

A data-driven management dashboard for the [Tech Immigrants](https://t.me/techimmigrants) community (17K+ members).

## What it shows

- **KPIs** — member count, subscribers, cross-platform reach
- **Topic Activity** — which forum topics are hot/dormant
- **Pain Points** — what members struggle with most (AI access, CV quality, visa, job market)
- **Engagement Patterns** — daily/weekly activity trends
- **Content Performance** — which content types drive the most engagement
- **Growth Levers** — platform distribution and untapped opportunities
- **Monetization Readiness** — demand vs execution readiness for revenue streams
- **Action Items** — prioritized quick wins and strategic moves
- **Admin Team** — role assignments and delegation suggestions

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Recharts (charts)
- Lucide React (icons)

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

## Data

Currently uses static data from a Telegram MCP snapshot (May 2026). Future versions can connect to a live Telegram API or n8n workflow for real-time updates.

## License

Private — Tech Immigrants internal use.
