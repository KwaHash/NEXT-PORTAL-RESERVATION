# Deploy workflow – required secrets

Set these in **Settings → Secrets and variables → Actions** (repo secrets).

| Secret | Required | Description |
|--------|----------|-------------|
| `GH_USERNAME` | Yes | GitHub username (account or machine user) used to clone the repo. Used with `GH_ACCESS_TOKEN` for HTTPS clone. |
| `GH_ACCESS_TOKEN` | Yes | GitHub Personal Access Token (or fine-grained token) with `repo` scope. Used with `GH_USERNAME` to clone this **private** repository. Create at: GitHub → Settings → Developer settings → Personal access tokens. |
| `NEXT_PUBLIC_HOST` | Yes | Public URL of the app (e.g. `https://your-domain.com`). Injected at build time. |
| `SSH_HOST` | Yes | VPS hostname or IP. |
| `SSH_USER` | Yes | SSH username on the VPS. |
| `SSH_PRIVATE_KEY` | Yes | Full contents of the private SSH key (starts with `-----BEGIN ... KEY-----`). |
| `SSH_PORT` | No | SSH port; defaults to `22` if not set. |

## Server setup (one-time)

On the VPS, ensure:

1. Directory exists: `/var/www/NEXT-PORTAL-RESERVATION`
2. Node.js (v22) and npm are installed.
3. PM2 is installed: `npm i -g pm2`
4. The SSH user can write to `/var/www/NEXT-PORTAL-RESERVATION` and run `pm2`.

After the first deploy, if the app isn’t registered in PM2, the workflow runs:

`pm2 start npm --name "NEXT-PORTAL-RESERVATION" -- start`

You can adjust the app name and path in `.github/workflows/deploy.yml` if you use different names.
