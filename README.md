# Javier Yustres Rodríguez · Portfolio

[![CI](https://github.com/jyustrod/jyustrod.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/jyustrod/jyustrod.github.io/actions/workflows/ci.yml)
[![Deploy](https://github.com/jyustrod/jyustrod.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/jyustrod/jyustrod.github.io/actions/workflows/deploy.yml)

Personal, bilingual **English / Spanish** CV and project portfolio for Javier Yustres Rodríguez, a Computer Science student at Universidad Alfonso X el Sabio.

**Website:** https://jyustrod.github.io/

## Architecture

- Zero runtime dependencies: static HTML, CSS and native JavaScript.
- Client-side language switch (English/Spanish) with URL query parameter `?lang=es` for shareable Spanish view.
- Client-side dark/light theme with optional local preference.
- Semantic, accessible markup with keyboard focus, skip link and reduced-motion support.
- No analytics, third-party fonts, cookies or backend. No secrets needed.
- Three project descriptions only: MiCuE-CLM, Avanduo and Nature Pistachio. The underlying repositories are private and are not linked.

## Run locally

Requires Node.js 22+.

```bash
npm run verify
python3 -m http.server 8000
```

Open http://localhost:8000 . No `npm install` is necessary.

## CI/CD

- **CI:** on Pull Requests and updates to `main`; runs JavaScript syntax validation, Node built-in test suite, deterministic static build and output checks.
- **CD:** builds and validates again on `main`, uploads the exact `dist/` output and deploys it with GitHub's official Pages artifact workflow.
- The CD job has minimal permissions; only the deploy job receives `pages: write` and OIDC `id-token: write`.
- Dependabot checks GitHub Actions monthly. Changes to `main` are ideally made through a reviewed PR with the CI check required.
- No build-time or deploy-time environment secrets.

### First-time Pages setup

In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The deployment then runs automatically when `main` changes (or when dispatched manually).

To require a passing CI before merging, configure a branch protection rule or ruleset for `main` under **Settings → Rules**. These settings must be applied by the repository owner; committing YAML does not enable them.

## Editing content

- `index.html`: structure and default English copy
- `assets/app.js`: English/Spanish translations and UI behavior
- `assets/styles.css`: responsive presentation and color tokens
- `tests/site.test.mjs`: source integrity, translation coverage and accessibility smoke checks
- `scripts/build.mjs`: deterministic output to `dist/`

For any translated paragraph, update the English HTML text and both language dictionaries.

## Known limits

The degree average is an **unweighted arithmetic mean** over completed courses, not necessarily the official ECTS-weighted GPA. The Valley certificate and degree are shown as expected in 2027. This website does not claim private project code is public. GitHub Pages hosting and custom domains are configured in GitHub, not automatically by repository files.

## License

Code: MIT License. Personal name, contact details and original portfolio text are not licensed for impersonation or reuse.
