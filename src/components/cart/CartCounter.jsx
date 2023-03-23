import React from "react"
import { useContext } from "react"
import { CartContext } from "./CartContext"
// Updates the counter based on the number of items in the cart

export default function CartCounter() {
    const {cartItems} = useContext(CartContext);
    
    return (
        <div>{cartItems.length}</div>
    )
}