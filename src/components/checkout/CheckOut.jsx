import { Link } from "react-router-dom";

export default function CheckOut() {
    return <section>
        <h1>Checkout</h1>
        <p>Checkout content here</p>
        <Link to="/checkout-success">Place order</Link>

        </section>;
  }