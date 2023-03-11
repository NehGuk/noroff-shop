import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/APIHook";
import Reviews from "./Reviews";
import showStars from "../../utilities/ReviewStars";

export default function Product() {
  const params = useParams();
  const { data, isLoading } = useApi(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);
  const { id, title, description, price, discountedPrice, imageUrl, rating, tags, reviews } = data;
  
  /* Is isLoading is true, we have no data yet. Let's show a loading indicator. */
  if (isLoading) return <div>Loading...</div>
  
  /* Data should exist if we get to here. Let's render the product */
  return (
    <section>
      <h1>{title}</h1>
          <img src={imageUrl} />
          <p>{discountedPrice === price && <span>Price: {price}</span>}</p>
          <p>{discountedPrice < price && <span>Price: {discountedPrice}</span>}</p>
          <p>{discountedPrice < price && <span>ON SALE</span>}</p>
          <p>{discountedPrice < price && <span>Save {price - discountedPrice}!</span>}</p>
          <p>Description: {description}</p>
          <p>Rating: {showStars(rating)}</p>        
          <p>Tags: {tags && <span>{tags.join(' ')}</span>}</p>
          <button>Add to cart</button>
          <p><Link to="/">Back to products</Link></p>
          {reviews && <div><Reviews reviews={reviews}/></div>}       
    </section>
  )
}