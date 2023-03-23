import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
    const {cartItems, addToCart, RemoveFromCart, clearCart, testingVariable} = useContext(CartContext);
    console.log(cartItems);
    return <section>
            <h1>My cart</h1>
            <p>Cart content: {testingVariable}</p>
            <div>
            <button onClick={clearCart}>Clear cart</button>
            </div>
            
            <Link to="/checkout">Checkout</Link>
        </section>
}

