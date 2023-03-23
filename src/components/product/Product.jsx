import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/APIHook";
import Reviews from "./Reviews";
import showStars from "../../utilities/ReviewStars";

export default function Product() {
  const params = useParams();
  const { data, isLoading } = useApi(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);
  const { title, id, description, price, discountedPrice, imageUrl, rating, tags, reviews } = data;
  
  /* Is isLoading is true, we have no data yet. Let's show a loading indicator. */
  if (isLoading) return <div>Loading...</div>
  
  /* Data should exist if we get to here. Let's render the product */
  function addToCart() {
    console.log("Added to cart:");
    let productAdded = {
      quantity: 1,
      title: title,
      price: price
    }
    console.log(productAdded);
  }
  
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
          <button onClick={addToCart}>Add to cart</button>
          <p><Link to="/">Back to products</Link></p>
          {reviews && <div><Reviews reviews={reviews}/></div>}       
    </section>
  )
}