import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartCounter() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div>
        <p></p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{cartItems.length}</p>
      </div>
    );
  }
}
