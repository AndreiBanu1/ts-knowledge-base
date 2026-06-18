import { describe, it, expect } from 'vitest';
import { calculateOrderTotal } from './calculateOrderTotal';
import type { CartItem } from './types';

const items = (...parts: Array<[price: number, quantity: number]>): CartItem[] =>
  parts.map(([price, quantity], i) => ({ name: `item-${i}`, price, quantity }));

describe('calculateOrderTotal', () => {
  it('sums price * quantity across line items', () => {
    const result = calculateOrderTotal(items([10, 2], [5, 3]));
    expect(result.subtotal).toBe(35);
  });

  it('returns all-zero totals for an empty cart', () => {
    expect(calculateOrderTotal([])).toEqual({
      subtotal: 0,
      discount: 0,
      tax: 0,
      total: 0,
    });
  });

  it('applies a known coupon as a discount before tax', () => {
    const result = calculateOrderTotal(items([100, 1]), 'SAVE10');
    expect(result.discount).toBe(10);
    // (100 - 10) * 1.2 = 108
    expect(result.total).toBeCloseTo(108);
  });

  it('supports multiple coupon rates', () => {
    const result = calculateOrderTotal(items([200, 1]), 'SAVE25');
    expect(result.discount).toBe(50);
    expect(result.total).toBeCloseTo(180); // (200 - 50) * 1.2
  });

  it('ignores unknown coupon codes', () => {
    const result = calculateOrderTotal(items([100, 1]), 'BOGUS');
    expect(result.discount).toBe(0);
    expect(result.total).toBeCloseTo(120);
  });

  it('applies 20% tax to the discounted subtotal', () => {
    const result = calculateOrderTotal(items([50, 2])); // subtotal 100
    expect(result.tax).toBeCloseTo(20);
  });
});
