# Demoblaze E2E Tests

End-to-end tests for [demoblaze.com](https://www.demoblaze.com/) built with Cypress and TypeScript.

## Prerequisites

- **Node.js** 18.x or higher (required by Cypress 14)
- **npm** (included with Node.js)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/savvakruk/demoblaze-task.git
cd demoblaze-task
```

2. Install dependencies:

```bash
npm install
```

3. Test username and password are configured in `cypress.config.ts` under `env`. No additional setup is needed to run the tests out of the box.

## Running Tests

| Command                    | Description                          |
| -------------------------- | ------------------------------------ |
| `npm test`                 | Run all tests (headless)             |
| `npm run test:auth`        | Run authentication tests only        |
| `npm run test:purchase`    | Run purchase flow tests only         |
| `npm run cy:open`          | Open Cypress interactive runner      |

## Test Overview

### Authentication (`authentication.cy.ts`)

- Register a new user with a unique username
- Login with valid credentials
- Attempt registration with an already taken username

### Purchase Flow (`purchase.cy.ts`)

- Add a laptop to the cart and complete the full checkout flow
- Add several products to the cart, delete them one by one, validate the display of items in the cart and total price change

## Design Decisions

**Page Object Model** - each page and reusable UI component is represented by a TypeScript class. Selectors are stored as strings and resolved at execution time via getters, which avoids stale element references caused by Cypress command queue.

**API-based authentication** - tests that require a logged-in user, authenticate through API directly (`skipLogin`, `skipSignup`) instead of going through the UI, keeping test execution fast and stable.

**Dynamic test data** - usernames are generated with `Date.now()` to guarantee uniqueness across runs, eliminating shared-state issues between tests.

**Test prioritization** - the five tests cover the two flows that directly impact revenue and user retention: account creation (register, login) and product purchase (end-to-end checkout, cart management). If either flow is broken, users cannot sign up or spend money, making these the highest-risk areas to validate first under a tight deadline. 

## AI Tools Disclosure

AI assistance was used for brainstorming test prioritization ideas, researching Cypress best practices, and drafting the initial README structure.