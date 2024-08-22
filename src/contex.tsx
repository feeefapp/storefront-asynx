import { ProductEntity } from "feeef/src/core/core";
import React, { createContext, useState } from "react";
import { LocalOrderItem } from "./pishop/models";

// Define the shape of the cart context
interface CartContextType {
  cartItems: LocalOrderItem[];
  addToCart: (item: LocalOrderItem) => void;
  removeFromCart?: (index: number) => void;
}

// Create the cart context
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Create the cart provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<LocalOrderItem[]>([]);

  const addToCart = (item: LocalOrderItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
    localStorage.setItem("cart", JSON.stringify([...cartItems, item]));
  };
  const removeFromCart = (index: number) => {
    const array = [...cartItems];
    array.splice(index, 1);
    setCartItems(array);
    localStorage.setItem("cart", JSON.stringify(array));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
