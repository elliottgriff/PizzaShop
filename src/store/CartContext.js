import react from 'react';

const CartContext = react.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
