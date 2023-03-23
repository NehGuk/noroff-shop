import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCard() {
    return (
        <section>
            <h1>My cart</h1>
            <p>You haven't added any items to your cart yet.</p>
            <Link to="/">Back to homepage</Link>
        </section>
    )
}