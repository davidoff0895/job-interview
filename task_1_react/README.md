## About

React version of the "fix the tests" interview task. The project contains 3 modules (1 utility + 2 React components) and a test suite for each. The tests currently fail — your job is to fix the implementation so that all tests pass.

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

3. Check types:

   ```bash
   npm run typecheck
   ```

## Project structure

```
src/
  utils/
    formatters.ts
  components/
    Counter.tsx
    UserCard.tsx
tests/
  formatters.spec.ts
  Counter.spec.tsx
  UserCard.spec.tsx
```

