import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart";
import generateRandomString from "../../utilities/generateRandomString";
import { CartSection, CartGrid, CartTitle, CartItems, CartNumberOfItems, CartTotal, CartClearCartArea, CartCTA, CartBack } from "./Cart.style";

export default function Cart() {
    const {cartItems, totalCartPrice, removeFromCart, clearCart} = useContext(CartContext);
    const randomString = generateRandomString(7);
    
    if (cartItems.length === 0) {
        return <EmptyCart />
    }
    
    return (
        <CartSection>
            <CartGrid>
            
                <CartTitle>
                    <h1>My cart</h1>
                </CartTitle>
                
                <CartItems>
                    {cartItems.map((itemAdded) => (
                        <div key={`${itemAdded.id}${randomString}`}>
                            <div>{itemAdded.title}</div>
                            <div>{itemAdded.price}</div>
                            {/* <div>Quantity: X</div> */}
                            {/* <button onClick={() => addToCart(itemAdded)}>Add</button> */}
                            <button onClick={() => removeFromCart(itemAdded)}>Remove from cart</button>
                        </div>
                    ))}
                </CartItems>

                <CartNumberOfItems>
                    Number of items: {cartItems.length}
                </CartNumberOfItems>

                <CartTotal>
                    Total: {totalCartPrice} kr
                </CartTotal>

                <CartClearCartArea>
                    <button onClick={clearCart}>Clear cart</button>
                </CartClearCartArea>

                <CartCTA>
                    <p><Link to="/checkout">Checkout</Link></p>
                </CartCTA>

                <CartBack>
                    <p><Link to="/">Continue shopping</Link></p>
                </CartBack>

            </CartGrid>
        </CartSection>
    )
}

