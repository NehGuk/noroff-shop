import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart";
import generateRandomString from "../../utilities/generateRandomString";
import { CartSection, CartGrid, CartTitle, CartItems, CartNumberOfItems, CartTotal, CartClearCartArea, CartCTA, CartBack, CheckoutLink, CartItemsImg, CartItemsInfo, CartItemsRemove } from "./Cart.style";

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
                            <CartItemsImg><img src={itemAdded.imageUrl}/></CartItemsImg>
                            
                            <CartItemsInfo><p>{itemAdded.title}</p><p>${itemAdded.price}</p></CartItemsInfo>
                            
                            <CartItemsRemove><button onClick={() => removeFromCart(itemAdded)}>Remove</button></CartItemsRemove>
                            
                        </div>
                    ))}
                </CartItems>

                <CartNumberOfItems>
                    <strong>{cartItems.length}</strong> <span>Items</span> 
                </CartNumberOfItems>

                <CartTotal>
                    <strong><span>Total:</span></strong> <strong>{totalCartPrice}</strong> kr
                </CartTotal>

                <CartClearCartArea>
                    <button onClick={clearCart}><strong>Clear cart</strong></button>
                </CartClearCartArea>

                <CartCTA to="/checkout">Checkout</CartCTA>

                <CartBack>
                    <p><Link to="/">Continue shopping</Link></p>
                </CartBack>

            </CartGrid>
        </CartSection>
    )
}

