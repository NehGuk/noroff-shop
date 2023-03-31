import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function CheckOut() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const { cartItems, totalCartPrice, clearCart } = useContext(CartContext);

    return <section>
        <h1>Checkout</h1>
        <div><h3>Order summary</h3></div>
        <div>You're ordering a total of {cartItems.length} items.</div>
        <div>Total: {totalCartPrice}</div>
        
        <div>
            <h3>Payment method</h3>
            <div>
                <input type="radio" id="card" name="drone" value="card" defaultChecked></input>
                <label htmlFor="card">Card</label>
                
                <input type="radio" id="vipps" name="drone" value="vipps"></input>
                <label htmlFor="vipps">Vipps</label>
            </div>
        </div>
        
        <div>
        <Link to="/checkout-success"><button onClick={clearCart}>Place order</button></Link>
        </div>
        <div>
        <Link to="/cart">Back to cart</Link>
        </div>

        </section>;
  }