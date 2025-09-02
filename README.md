# iGaming QA Automation Project

This is my personal **QA automation framework** for the iGaming industry, covering both **Sportsbook** and **Casino** workflows.  
I built this project to showcase my skills in **UI automation, API testing, performance testing, and QA documentation**.

---

## Features

### UI Automation
- Built with **Playwright (TypeScript)**
- Covers:
  - User registration and KYC verification
  - Deposits and withdrawals
  - Bet placement and odds updates
  - Responsible Gaming (RG) limit checks

### API Testing
- Postman collection + Newman runner
- Validates:
  - Authentication
  - Wallet balance updates
  - Bet placement

### Performance Testing
- **k6** scripts for smoke/load testing
- Focuses on:
  - Login flows
  - Wallet endpoints

### Manual Testing & Documentation
- Manual test cases in **Markdown and CSV**
- Test strategy, test plan, and traceability matrix included
- Compliance checklists for:
  - Responsible Gaming (RG)
  - Anti-Money Laundering (AML/KYC)
  - Geolocation and GDPR

### CI/CD
- GitHub Actions workflow to run:
  - UI tests
  - API tests
  - Performance smoke tests
- Runs automatically on every push or PR

---

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/Prashanth-Sankar/igaming-qa-testing.git
cd igaming-qa-testing
Setup UI Tests

cd automation/ui-playwright
npm ci
npx playwright install --with-deps
npm test


Setup API Tests

cd ../api-postman
npm ci
npm test


Setup Performance Tests

cd ../perf-k6
npm ci
npm run smoke

Environment Variables

BASE_URL – base URL of the iGaming site

API_BASE_URL – API endpoint

TEST_USERNAME, TEST_PASSWORD – credentials for test account

KYC_DOC_PATH – path to sample KYC document

Notes

All credentials and sensitive data should be set as GitHub secrets or environment variables.

This project was created as a personal QA showcase and includes both automated and manual test scenarios.
