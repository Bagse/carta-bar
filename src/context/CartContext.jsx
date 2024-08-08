import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === item.name
      );
  
      if (existingItemIndex >= 0) {
        // Si el ítem ya existe, reemplaza su cantidad con la nueva
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity = item.quantity;
        return updatedCart;
      } else {
        // Si el ítem no está en el carrito, agrégalo
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
