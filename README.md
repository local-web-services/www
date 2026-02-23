# Local Web Services - Documentation Site

Documentation site for the [Local Web Services](https://github.com/local-web-services/local-web-services) project.

**Live site:** https://local-web-services.github.io/

## About

Local Web Services provides two complementary CLI tools for local AWS CDK development:

- **ldk** - Runs your AWS CDK applications locally as a development server
- **lws** - AWS CLI-style commands for interacting with local services

## Site structure

| Page | File | Description |
|------|------|-------------|
| Landing | `index.html` | Hero, what/why, how it works, journey CTAs |
| Get Started | `getting-started.html` | Installation, prerequisites, CDK + Terraform quick starts |
| Services | `services.html` | All 25 AWS service emulations with operations |
| Mocking | `mocking.html` | Mock servers: routes, protocols, OpenAPI, templates |
| Chaos | `chaos.html` | Chaos engineering: error rates, latency, timeouts |
| CLI | `cli.html` | Full ldk + lws + mock command reference |

Shared styles live in `style.css`.

## Local preview

Open `index.html` in a browser, then navigate between pages using the nav bar.

## Deployment

The site deploys automatically on push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yml`. To enable it:

1. Go to the repository **Settings > Pages**
2. Under **Build and deployment**, set the source to **GitHub Actions**
