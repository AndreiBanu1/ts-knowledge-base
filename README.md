# ts-knowledge-base

A personal TypeScript & JavaScript knowledge base — book exercises, worked
examples, algorithms, and performance notes — all in a single monorepo sharing
one toolchain.

## Contents

| Folder / file | What's inside |
|---|---|
| [`total-typescript-book/`](total-typescript-book) | Exercises from the *Total TypeScript* book (Matt Pocock & Taylor Bell). Logic lives in `*.exercises.ts`, Vitest tests in `*.spec.ts`. |
| [`checkout-module/`](checkout-module) | A worked example of extracting an internal helper into its own testable module. See its [README](checkout-module/README.md). |
| [`Algorithms/`](Algorithms) | DSA practice — Two Pointers, Greedy, Big-O notes, and assorted problems. |
| [`js_performance_optimizations/`](js_performance_optimizations) | Numbered `bad.js` / `good.js` pairs with `explanation.txt` notes on JS perf patterns. |
| [`common-js-patterns.ts`](common-js-patterns.ts) | Scratch file of common JavaScript patterns. |
| [`exercise.ts`](exercise.ts) | Misc. TypeScript scratch exercises. |

## Toolchain

Tooling is shared at the repo root — a single `package.json`, `tsconfig.json`,
`vitest.config.ts`, and `node_modules`. There is no per-folder setup.

- **TypeScript** for type-checking (`tsc --noEmit`)
- **Vitest** for tests — picks up any `*.{test,spec}.ts` file across the repo

## Commands

```bash
npm install              # one time

npm test                 # run all tests in watch mode
npm run test:run         # run all tests once
npm run test:ui          # Vitest UI
npm run test:types       # type-check everything with tsc --noEmit
```

Run tests for a single module by passing a path:

```bash
npm run test:run -- checkout-module
```

## Notes

- `Algorithms/` and `js_performance_optimizations/` are excluded from the root
  `tsconfig.json` / Vitest config — they're standalone study material, not part
  of the typed/tested surface.
- This is a learning repo: expect scratch files and works-in-progress.
