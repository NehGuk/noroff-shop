import React, { createContext } from "react";
import useLocalStorage from "../../hooks/LocalStorageHook";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);

  const totalCartPrice = cartItems.reduce((accum, item) => accum + item.price, 0).toFixed(2);

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeFromCart(item) {
    setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
  }

  function clearCart() {
    setCartItems([]);
  }

  return <CartContext.Provider value={{ cartItems, totalCartPrice, addToCart, removeFromCart, clearCart }}>{props.children}</CartContext.Provider>;
}
