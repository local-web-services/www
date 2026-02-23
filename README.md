# Local Web Services - Documentation Site

Documentation site for the [Local Web Services](https://github.com/local-web-services/local-web-services) project.

**Live site:** https://local-web-services.github.io/

## About

Local Web Services provides two complementary CLI tools for local AWS CDK development:

- **ldk** - Runs your AWS CDK applications locally as a development server
- **lws** - AWS CLI-style commands for interacting with local services

## Local preview

Open `index.html` in a browser.

## Deployment

The site deploys automatically on push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yml`. To enable it:

1. Go to the repository **Settings > Pages**
2. Under **Build and deployment**, set the source to **GitHub Actions**
