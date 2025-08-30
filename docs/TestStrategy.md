# Test Strategy – iGaming (Personal Project)

This test strategy was prepared as part of my personal QA automation project.  

## Scope
- Sportsbook: login, wallet, betslip, markets and odds updates, settlement.
- Casino: registration/KYC, deposits, withdrawals, session limits, game launch.
- Cross-cutting: geolocation, responsible gaming, AML checks, notifications, promotions.

## Types of Testing
- API (Postman/Newman), UI (Playwright), Performance (k6), Compliance, Exploratory.

## Environments
- Local/staging environments with seeded users and sandbox payment providers.

## Risks & Mitigation
- Odds updates → WebSocket test coverage.
- Payments flakiness → sandbox testing and retries.
- Jurisdiction restrictions → smoke pack per country.
