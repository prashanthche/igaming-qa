CI/CD Pipeline Flow

Developer Action

A developer creates a Pull Request (PR).

Continuous Integration (CI)

CI pipeline is triggered.

Unit Tests run.

Static Analysis (SAST/SonarQube) runs.

Test Evaluation

If all tests pass → PR can be merged to the main branch.

If any test fails → Build fails, developer is notified.

Continuous Deployment (CD)

After PR merge, CD pipeline is triggered.

Deployment to Staging Environment.

Run API & UI Automation Tests.

Automation Test Evaluation

If automation tests pass → Performance tests are run.

If automation tests fail → Deployment fails, QA team is notified.

Performance Evaluation

If performance tests pass → Manual & exploratory testing is conducted.

If performance tests fail → Deployment fails, QA team is notified.

Final QA & Production

QA signs off.

Deployment to Production Environment.
