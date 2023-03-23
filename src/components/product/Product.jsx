import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/APIHook";
import Reviews from "./Reviews";
import showStars from "../../utilities/ReviewStars";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product() {
  const params = useParams();
  const { data, isLoading } = useApi(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);
  const { title, id, description, price, discountedPrice, imageUrl, rating, tags, reviews } = data;
  
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  /* Is isLoading is true, we have no data yet. Let's show a loading indicator. */
  if (isLoading) return <div>Loading...</div>
  

  /* Data should exist if we get to here. Let's render the product */
  return (
    <section>
      <h1>{title}</h1>
          <img src={imageUrl} alt={title}/>
          <p>{discountedPrice === price && <span>Price: {price}</span>}</p>
          <p>{discountedPrice < price && <span>Price: {discountedPrice}</span>}</p>
          <p>{discountedPrice < price && <span>{(((price - discountedPrice) * 100) / price).toFixed(0)}% OFF</span>}</p>
          <p>{discountedPrice < price && <span>Save {price - discountedPrice}!</span>}</p>
          
          <p>Description: {description}</p>
          <p>{showStars(rating)} <span> ({rating})</span></p>        
          <p>Tags: {tags && <span>{tags.join(' ')}</span>}</p>
          <button onClick={() => addToCart(data)}>Add to cart</button>
          <button onClick={() => removeFromCart(data)}>Remove from cart</button>

          {cartItems.includes(description) && console.log("A lot of items here")}
          
          



          {/* <button onClick={() => removeFromCart(data)}>Remove from cart</button> */}
          <p><Link to="/">Back to products</Link></p>
          {reviews && <div><Reviews reviews={reviews}/></div>}       
    </section>
  )
}

// if the array cartItems contains a product (object) with this ID, show the "Remove from card" button.