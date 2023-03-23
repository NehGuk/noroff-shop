import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import countEachCartItem from "../../utilities/cartItemsCount";

export default function Cart() {
    const {cartItems, addToCart, RemoveFromCart, clearCart} = useContext(CartContext);
    console.log(cartItems);
    
    return <section>
            <h1>My cart</h1>
            <p>Items in the cart: {cartItems.length}</p>
            {cartItems.map((itemAdded) => (
                <div>
                    <div>{itemAdded.title}</div>
                    <div>{itemAdded.price}</div>
                    <div>Quantity: X</div>
                </div>
            ))}
            
            <div>
            
            </div>
            <div>Total: YYY</div>
            <button onClick={clearCart}>Clear cart</button>
            <div><Link to="/checkout">Checkout</Link></div>
            
        </section>
}

