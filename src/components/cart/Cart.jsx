import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function Cart() {
    const {cartItems, totalCartPrice, addToCart, removeFromCart, clearCart} = useContext(CartContext);
    console.log(cartItems);
    
    return <section>
            <h1>My cart</h1>
            {cartItems.map((itemAdded) => (
                <div key={itemAdded.id}>
                    <div>{itemAdded.title}</div>
                    <div>{itemAdded.price}</div>
                    <div>Quantity: X</div>
                    <button onClick={() => addToCart(itemAdded)}>Add to cart</button>
                    {/* <button onClick={() => removeFromCart(itemAdded)}>Remove from cart</button> */}
                </div>
            ))}
            <div>Number of items: {cartItems.length}</div>
            <div>Total: {totalCartPrice} kr</div>
            <button onClick={clearCart}>Clear cart</button>
            <div><Link to="/checkout">Checkout</Link></div>
        </section>
}

