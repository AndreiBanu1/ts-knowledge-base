# checkout-module

A standalone worked example of the principle:

> If a helper is internal but you still want to test it directly, that's often a
> signal it should be extracted into its own module.

## The story

A `CheckoutSummary` UI component needs to compute order totals (subtotal,
coupon discount, tax). Originally that math lived *inside* the component as a
private helper — the only way to test it was to render the whole component and
read numbers back out of the DOM. That friction is the signal.

So the pricing logic was **extracted** into its own pure module:

| File | Responsibility | How it's tested |
|------|----------------|-----------------|
| `calculateOrderTotal.ts` | Pure pricing logic (no UI) | `calculateOrderTotal.spec.ts` — fast, no rendering, all the edge cases |
| `CheckoutSummary.ts` | Presentation; delegates math to the helper | `CheckoutSummary.spec.ts` — only checks formatting/display |
| `types.ts` | Shared `CartItem` / `OrderTotal` types | — |

The payoff:
1. Pricing edge cases (coupons, tax, empty cart) are tested as plain
   function-in / object-out — no mocks, no DOM.
2. The component test stays small and about presentation only.
3. The pricing module is now reusable (mini-cart, order email, etc.).

## Real-world pattern on display

Each `*.spec.ts` `import`s only the **public exports** of the module under test
— exactly how a real consumer would call it. You test through the public API,
not the implementation details.

## Commands

Tooling now lives at the repo root (single `package.json` / `node_modules`).
Run from the repository root:

```bash
npm install                                   # one time, at repo root
npm run test:run -- checkout-module           # run just this module's tests
npm test                                      # watch mode (all modules)
npm run test:types                            # type-check everything with tsc
```
