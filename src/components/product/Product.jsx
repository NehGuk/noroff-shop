import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/APIHook";

export default function Product() {
  
    let params = useParams();
    const product = useApi(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);
    const { id, title, description, price, discountedPrice, imageUrl, rating, tags, reviews } = product.data;
    console.log(reviews);
    console.log(tags);    
    /* console.log(tags.length); */
    /* console.log(reviews[0].id); */
    
    return (
      <div>
        <h1>Product name: {title}</h1>
        <img src={imageUrl} />
        <p>ID: {id}</p>
        <p>Price: {price}</p>
        <p>Discounted price: {discountedPrice}</p>
        <p>Description: {description}</p>
        <p>Rating: {rating}</p>
        <p>Reviews: </p>
        <div>
          <Link to="/">Back to products</Link>
        </div>
      </div>
    );
  }