import { Link } from "react-router-dom";

export default function Cart() {
    return <section>
            <h1>Cart</h1>
            <p>Cart content here</p>
            <Link to="/checkout">Checkout</Link>
        </section>
}

