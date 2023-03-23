import { Link } from "react-router-dom";

export default function CheckOutSuccess() {
    return <section><h1>Thank you!</h1>
    <p>You have successfully placed your order.</p>
    <Link to="/">Back to homepage</Link>
    </section>;
  }