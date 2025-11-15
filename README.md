# Playwright SDET Test Boilerplate

This repository contains a Playwright-based POM (Page Object Model) test framework and example tests used for SDET practice and interviews. It provides a clear folder structure, example fixtures, and scripts to run tests locally or in CI. The README documents how the project is organized, how to run tests, and how to safely push this repo to GitHub.

## Quick facts

- Language: TypeScript
- Test runner: Playwright Test
- Design pattern: Page Object Model (POM)
- Config: `playwright.config.ts`

## File / Folder structure

Top-level important files:

- `package.json` - npm scripts and dependencies
- `playwright.config.ts` - Playwright configuration (projects, timeouts, reporters)
- `tsconfig.json` / `tsconfig.app.json` - TypeScript configuration

E2E test source layout (`e2e/src`):

- `pages/` - Page Objects (one class per page, locators and getters)
	- e.g. `loginPage.ts` defines locators and simple getters for elements
- `actions/` - Action classes or helper methods that use page objects to perform user flows
	- e.g. `loginActions.ts` encapsulates login steps (enter username/password, submit)
- `fixtures/` - Test data and interfaces
	- e.g. `loginTest/testdata.ts` and `interface.ts`
- `tests/` - Playwright test specs using fixtures, actions and page objects
	- e.g. `loginWorkflow.spec.ts` demonstrates invalid/valid login flows
- `config/` - Static configuration, constants (URLs, timeouts)
- `constants/` - Simple constants like `urlConstants.ts`

There's also a lightweight `tests/` folder with example specs and a `playwright-report/` folder with generated HTML report output.

## Design / POM approach

- Page Object Model (POM): split UI element definitions (locators) and simple element getters into `pages/*` classes.
- Actions / Flows: higher-level flows are implemented in `actions/*` and call page object methods. Actions keep tests readable and DRY.
- Tests: keep tests focused on assertions and high-level steps; reuse actions/fixtures for setup.

Contract (short):

- Inputs: `fixtures/*.ts` for test data (no credentials stored in repo)
- Outputs: Playwright HTML report in `playwright-report/` and test logs
- Errors: tests fail fast and surface Playwright traces/screenshots when enabled

Edge cases considered:

- Missing selectors (locator changes) — Page objects centralize locators to reduce maintenance
- Credentials — DO NOT commit real credentials; use environment variables or CI secrets
- Network / flaky tests — use retries in CI configuration and Playwright trace/screenshots for debugging

## How to run locally (Windows PowerShell)

1. Install dependencies (use npm or yarn as your team prefers):

```powershell
npm install
# or
yarn install
```

2. Install Playwright browsers (only once):

```powershell
npx playwright install
```

3. Run the full test suite:

```powershell
npx playwright test
```

4. Run a single file or spec:

```powershell
npx playwright test e2e/src/tests/loginWorkflow.spec.ts
```

5. Run tests headed (see the browser during execution):

```powershell
npx playwright test --headed
```

6. View the HTML report after running tests:

```powershell
npx playwright show-report
```

## Common scripts (package.json)

- `test` - run Playwright tests
- `lint` / `lint:fix` - run ESLint
- `ci` - CI-targeted command chaining lint and test

Check `package.json` for the exact scripts used in this repo.
