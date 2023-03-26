import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCard from "./EmptyCart";
import generateRandomString from "../../utilities/generateRandomString";

export default function Cart() {
    const {cartItems, totalCartPrice, removeFromCart, clearCart} = useContext(CartContext);
    const randomString = generateRandomString(7);
    
    if (cartItems.length === 0) {
        return <EmptyCard />
    }
    
    return <section>
            <h1>My cart</h1>
            {cartItems.map((itemAdded) => (
                <div key={`${itemAdded.id}${randomString}`}>
                    <div>{itemAdded.title}</div>
                    <div>{itemAdded.price}</div>
                    {/* <div>Quantity: X</div> */}
                    {/* <button onClick={() => addToCart(itemAdded)}>Add</button> */}
                    <button onClick={() => removeFromCart(itemAdded)}>Remove from cart</button>
                </div>
            ))}
            <div>Number of items: {cartItems.length}</div>
            <div>Total: {totalCartPrice} kr</div>
            <button onClick={clearCart}>Clear cart</button>
            <div><Link to="/checkout">Checkout</Link></div>
            <p><Link to="/">Continue shopping</Link></p>
        </section>
}

