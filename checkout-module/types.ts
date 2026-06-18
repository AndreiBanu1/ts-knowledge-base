export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export type OrderTotal = {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
};
