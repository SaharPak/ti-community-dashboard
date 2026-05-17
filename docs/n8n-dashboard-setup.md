# n8n Community Stats Pipeline — Setup Guide

This workflow collects daily statistics from the Tech Immigrants Telegram group and commits them to this repository, triggering an automatic dashboard redeploy.

## Architecture

```
Daily at 6:00 AM EEST
  → n8n calls Telegram Bot API (6 parallel requests)
  → Code node transforms & aggregates data
  → Commits snapshot-latest.json + history/{date}.json to GitHub
  → Vercel/Netlify auto-deploys on push
  → Dashboard shows fresh data within ~2 minutes
```

## Prerequisites

1. **n8n instance** — cloud (n8n.cloud) or self-hosted
2. **Telegram Bot** — the same bot you use for the YouTube distribute workflow (must be admin in @techimmigrants group)
3. **GitHub Personal Access Token** — fine-grained, scoped to this repo

---

## Step 1: Create GitHub Personal Access Token

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens?type=beta)
2. Click **Generate new token** (Fine-grained)
3. Settings:
   - Token name: `ti-dashboard-n8n`
   - Expiration: 90 days (or longer)
   - Repository access: **Only select repositories** → `ti-community-dashboard`
   - Permissions → Repository permissions:
     - Contents: **Read and write**
     - Metadata: **Read-only**
4. Copy the token (starts with `github_pat_`)

---

## Step 2: Set Up n8n Credentials

### GitHub PAT (Header Auth)

1. In n8n → **Credentials** → **New** → **Header Auth**
2. Name: `GitHub PAT`
3. Header Name: `Authorization`
4. Header Value: `Bearer github_pat_YOUR_TOKEN_HERE`

### Telegram Bot (if not already configured)

Your existing TechImmigrants Bot credential should work. The bot must be an admin in the @techimmigrants group with at least "Read Messages" permission.

---

## Step 3: Set Up n8n Variables

Go to **Settings** → **Variables** and create these:

| Variable | Value | Description |
|----------|-------|-------------|
| `TI_BOT_TOKEN` | `123456:ABC-DEF...` | Your Telegram Bot HTTP API token |
| `TI_GROUP_CHAT_ID` | `-1001264215335` | Tech Immigrants group chat ID |
| `TI_CHANNEL_CHAT_ID` | `@Tech_Immigrants` | Tech Immigrants channel username |
| `SAHAR_TELEGRAM_CHAT_ID` | Your personal chat ID | For the optional notification |
| `GITHUB_REPO` | `SaharPak/ti-community-dashboard` | GitHub repo in `owner/name` format |

### Finding the Group Chat ID

The group chat ID for @techimmigrants is `-1001264215335` (supergroups use `-100` prefix + channel ID `1264215335`).

---

## Step 4: Import the Workflow

1. Open your n8n instance
2. Go to **Workflows** → **Import from File**
3. Select `n8n/community-stats-workflow.json` from this repository
4. Replace credential IDs:
   - Find `GITHUB_TOKEN_CREDENTIAL_ID` → replace with your GitHub PAT credential ID
   - Find `TELEGRAM_CREDENTIAL_ID` → replace with your Telegram Bot credential ID
5. Save the workflow

---

## Step 5: Handle the SHA for snapshot-latest.json

The GitHub API requires the current file SHA to update an existing file. Two approaches:

### Option A: First Run (file doesn't exist yet)

The first commit will create the file. Remove the `sha` field from the commit node's JSON body for the first run, or set the n8n variable `SNAPSHOT_SHA` to empty.

### Option B: Auto-fetch SHA (recommended)

Add a node before the commit that fetches the current SHA:

```
GET https://api.github.com/repos/{owner}/{repo}/contents/data/snapshot-latest.json
```

Extract `response.sha` and pass it to the commit node. The workflow JSON already references `$vars.SNAPSHOT_SHA` as a fallback — you can either:
- Manually update this variable after each run
- Add a "Get SHA" HTTP node (better for automation)

---

## Step 6: Test & Activate

1. Click **Test Workflow** with manual trigger
2. Check that:
   - Telegram API returns member count
   - Transform node produces valid JSON
   - GitHub commit succeeds (check the repo)
   - Notification arrives in your Telegram DM (optional)
3. Toggle the workflow **ON**

---

## What Gets Collected

| Data Point | API Call | Frequency |
|------------|----------|-----------|
| Group member count | `getChatMemberCount` | Daily |
| Channel subscriber count | `getChatMemberCount` | Daily |
| Group metadata | `getChat` | Daily |
| Admin list | `getChatAdministrators` | Daily |
| Recent messages (keywords) | `getUpdates` | Daily (last 100) |

### Keyword Tracking

The transform node scans message text for these patterns (Persian + English):

- **vpn**: vpn, فیلتر, شکن, proxy, تحریم
- **resume**: resume, رزومه, cv, cover letter, کاور لتر
- **ai**: ai, هوش مصنوعی, claude, chatgpt, cursor, gemini
- **reject**: reject, ریجکت, رد شد
- **visa**: visa, ویزا, اقامت, مهاجرت
- **interview**: interview, مصاحبه
- **salary**: salary, حقوق, درآمد
- **job**: job, استخدام, شغل, کار

---

## File Output

Each run produces two commits:

1. `data/snapshot-latest.json` — always the latest snapshot (dashboard reads this)
2. `data/history/YYYY-MM-DD.json` — archived for trend analysis

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Bot can't read messages | Ensure bot is admin in the group with read access |
| GitHub commit 409 conflict | SHA mismatch — fetch fresh SHA before committing |
| GitHub commit 404 | Check repo name in `GITHUB_REPO` variable |
| Empty keyword counts | Bot may not receive messages via getUpdates in groups — consider using a webhook or the MTProto approach |
| Rate limiting | Telegram Bot API allows 30 requests/second — 6 parallel calls is fine |

---

## Upgrading to Real-Time (Future)

If you want more than daily snapshots:
1. Set the schedule trigger to every 6 hours (or hourly)
2. Use Telegram Bot webhooks instead of polling for message analysis
3. Add an n8n webhook endpoint that the dashboard can call for on-demand refresh
