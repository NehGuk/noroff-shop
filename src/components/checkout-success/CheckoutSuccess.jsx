import { Link } from "react-router-dom";

export default function CheckOutSuccess() {
    return <section><h1>Thank you for your purchase!</h1>
    <p>Confirmation content here</p>
    <Link to="/">Back to homepage</Link>
    </section>;
  }