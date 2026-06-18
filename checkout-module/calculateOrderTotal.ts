import type { CartItem, OrderTotal } from './types';

const TAX_RATE = 0.2;

const COUPONS: Record<string, number> = {
  SAVE10: 0.1,
  SAVE25: 0.25,
};

/**
 * Pure pricing logic, extracted out of the component so it can be unit tested
 * directly — no React, no DOM, no mocks. The component just imports this.
 *
 * - subtotal: sum of price * quantity for each line item
 * - discount: applied from a known coupon code (unknown codes are ignored)
 * - tax: applied to the discounted subtotal
 * - total: subtotal - discount + tax
 */
export function calculateOrderTotal(
  items: CartItem[],
  couponCode?: string,
): OrderTotal {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discountRate = couponCode ? (COUPONS[couponCode] ?? 0) : 0;
  const discount = subtotal * discountRate;

  const tax = (subtotal - discount) * TAX_RATE;
  const total = subtotal - discount + tax;

  return { subtotal, discount, tax, total };
}
