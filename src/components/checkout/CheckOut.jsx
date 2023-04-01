import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { CheckOutSection, CheckOutGrid, CheckOutTitle, CheckOutSummary, CheckOutAmount, CheckOutPaymentMethod, CheckOutCTA, CheckOutBackToCart, CheckOutItems } from "./CheckOut.style";

export default function CheckOut() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cartItems, totalCartPrice, clearCart } = useContext(CartContext);
  console.log(cartItems);

  return (
    <CheckOutSection>
      <CheckOutGrid>
        <CheckOutTitle>
          <h1>Checkout</h1>
        </CheckOutTitle>

        <CheckOutSummary>
          <CheckOutItems>
            <h2>Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id}>
                <ul>
                  <li>
                    {item.title} | ${item.price}
                  </li>
                </ul>
              </div>
            ))}
          </CheckOutItems>
          <p>
            Items: <strong>{cartItems.length}</strong>
          </p>
          <hr></hr>
        </CheckOutSummary>
        <CheckOutAmount>
          <p>
            Total: <strong>${totalCartPrice}</strong>
          </p>
        </CheckOutAmount>
        <CheckOutPaymentMethod>
          <h2>Payment method</h2>
          <div>
            <input type="radio" id="card" name="drone" value="card" defaultChecked></input>
            <label htmlFor="card">Card</label>

            <input type="radio" id="vipps" name="drone" value="vipps"></input>
            <label htmlFor="vipps">Vipps</label>
          </div>
        </CheckOutPaymentMethod>
        <CheckOutCTA to="/checkout-success">
          <button onClick={clearCart}>Place order</button>
        </CheckOutCTA>
        <CheckOutBackToCart to="/cart">Back to cart</CheckOutBackToCart>
      </CheckOutGrid>
    </CheckOutSection>
  );
}
