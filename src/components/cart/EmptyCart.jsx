import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
    return (
        <section>
            <h1>My cart</h1>
            <p>You haven't added any items to your cart yet.</p>
            <Link to="/">Browse products</Link>
        </section>
    )
}