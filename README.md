## About

The project contains 3 modules (1 utility + 2 Vue components) and a test suite for each.

## Requirements

- Node.js 18+ and npm

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the tests:

   ```bash
   npm test
   ```

   You can also run in watch mode (re-runs on file save):

   ```bash
   npm run test:watch
   ```

## Project structure

```
src/
  utils/
    formatters.ts
  components/
    Counter.vue
    UserCard.vue
tests/
  formatters.spec.ts
  Counter.spec.ts
  UserCard.spec.ts
```
