import { describe, it, expect } from 'vitest';
import { renderCheckoutSummary } from './CheckoutSummary';

// Notice this test does NOT re-test the pricing math (coupons, tax edge cases).
// That lives in calculateOrderTotal.spec.ts. Here we only assert that the
// component formats and displays the numbers it was given. Separation of
// concerns falls straight out of the extraction.
describe('renderCheckoutSummary', () => {
  it('formats each total as a labelled money line', () => {
    const lines = renderCheckoutSummary(
      [{ name: 'widget', price: 100, quantity: 1 }],
      'SAVE10',
    );

    expect(lines).toEqual([
      'Subtotal: $100.00',
      'Discount: -$10.00',
      'Tax: $18.00',
      'Total: $108.00',
    ]);
  });
});
