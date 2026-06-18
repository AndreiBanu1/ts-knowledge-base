import { calculateOrderTotal } from './calculateOrderTotal';
import type { CartItem } from './types';

/**
 * Stands in for a React component like:
 *
 *   export function CheckoutSummary() {
 *     const { items, coupon } = useCart();
 *     const { subtotal, discount, tax, total } = calculateOrderTotal(items, coupon);
 *     return <dl>...</dl>;
 *   }
 *
 * The point of the exercise: the component does NO math itself. It delegates to
 * the extracted `calculateOrderTotal` and only formats the result for display.
 * That keeps the component's own test about presentation, while the gnarly
 * pricing branches are covered by calculateOrderTotal.spec.ts.
 */
export function renderCheckoutSummary(
  items: CartItem[],
  couponCode?: string,
): string[] {
  const { subtotal, discount, tax, total } = calculateOrderTotal(
    items,
    couponCode,
  );

  const money = (n: number) => `$${n.toFixed(2)}`;

  return [
    `Subtotal: ${money(subtotal)}`,
    `Discount: -${money(discount)}`,
    `Tax: ${money(tax)}`,
    `Total: ${money(total)}`,
  ];
}
