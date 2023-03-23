import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCard from "./EmptyCart";


export default function Cart() {
    const {cartItems, totalCartPrice, addToCart, removeFromCart, clearCart} = useContext(CartContext);
    console.log(cartItems);
    
    if (cartItems.length === 0) {
        return <EmptyCard />
    }
    
    return <section>
            <h1>My cart</h1>
            {cartItems.map((itemAdded) => (
                <div key={itemAdded.id}>
                    <div>{itemAdded.title}</div>
                    <div>{itemAdded.price}</div>
                    <div>Quantity: X</div>
                    {/* <button onClick={() => addToCart(itemAdded)}>Add</button> */}
                    <button onClick={() => removeFromCart(itemAdded)}>Remove from cart</button>
                </div>
            ))}
            <div>Number of items: {cartItems.length}</div>
            <div>Total: {totalCartPrice} kr</div>
            <button onClick={clearCart}>Clear cart</button>
            <div><Link to="/checkout">Checkout</Link></div>
        </section>
}

