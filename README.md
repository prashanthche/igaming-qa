# iGaming QA Starter (Portfolio-Ready)

A complete, opinionated QA/Testing starter repo tailored for iGaming (casino & sportsbook).  
Use it as-is on your GitHub or adapt to your stack.

## What’s inside
- **UI E2E**: Playwright (TypeScript) covering auth, registration/KYC flow, deposit, bet placement, slots (RNG mock), withdrawals, and responsible gaming.
- **API**: Postman collection + Newman CLI; sample auth, balance, bet placement, transactions, and RG endpoints.
- **Performance**: k6 smoke & load script for high-traffic endpoints.
- **Manual**: Test cases in Markdown & CSV for quick demos and HR screening.
- **Docs**: Test Strategy, Risk, Test Plan, and Traceability.
- **Compliance**: RG, AML/KYC, jurisdiction & geolocation, GDPR—practical QA checks.
- **CI**: GitHub Actions running Playwright, Newman, and k6 smoke.

> Note: Endpoints and selectors are examples—you can map them to a real staging site later.

## Quick start
```bash
# UI tests
cd automation/ui-playwright
npm ci
npx playwright install --with-deps
npm test

# API tests (Newman)
cd ../api-postman
npm ci
npm test

# Performance (k6)
cd ../perf-k6
npm ci
npm run smoke
```

## Repo layout
```
automation/
  ui-playwright/
  api-postman/
  perf-k6/
manual-tests/
docs/
compliance/
.github/workflows/
```

## Environment variables
- `BASE_URL` – target web app base URL (default: https://demo.igaming.example)
- `API_BASE_URL` – API host (default: https://api.demo.igaming.example)
- `TEST_USERNAME`, `TEST_PASSWORD` – seeded user
- `KYC_DOC_PATH` – sample doc image path (see `data/kyc-id.png` placeholder)
- `K6_VUS`, `K6_DURATION` – perf toggles

## License
MIT
