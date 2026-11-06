# Sauce Demo – Playwright Test Automation

Automated UI test suite for the [Sauce Demo](https://www.saucedemo.com) e-commerce site, built with Playwright and TypeScript using AI-assisted test development.

## What's covered
| Area | Test |
|---|---|
| Login | Valid user can log in |
| Login | Locked-out user is blocked with an error |
| Login | Wrong password is rejected with an error |
| Cart | User can add an item to the cart |
| Checkout | User can complete a full checkout |
| Sorting | Products sort by price, low to high |

Each test runs in Chromium, Firefox, and WebKit (18 runs total).

## Approach
- Started from recorded user flows (Playwright codegen), then refactored and added assertions
- Wrote additional tests from manual test cases, including negative scenarios
- Used AI to draft test code; reviewed, ran, and verified each test, including confirming tests fail when expected results are wrong
- Fixed a Chrome-only flaky test by waiting on a visible page element instead of the URL change

## How to run
```
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Tools
Playwright · TypeScript · GitHub Actions (CI)