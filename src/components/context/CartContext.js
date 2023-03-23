import React, { createContext, useState } from "react";
import useLocalStorage from "../../hooks/LocalStorageHook";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  /* const [cartItems, setCartItems] = useState([]); */
  const [cartItems, setCartItems] = useLocalStorage("cart", []);

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
    console.log("ADDEDDDDD");
    console.log(cartItems);
  }

  function removeFromCart(item) {
    setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
    console.log("REMOVEDDDD");
    console.log(cartItems);
  }

  function clearCart() {
    setCartItems([]);
  }

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>{props.children}</CartContext.Provider>;
}
