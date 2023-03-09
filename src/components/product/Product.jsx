import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/APIHook";

export default function Product() {
  const params = useParams();
  const { data, isLoading } = useApi(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);

/* Is isLoading is true, we have no data yet. Let's show a loading indicator. */
if (isLoading) return <div>Loading...</div>

/* testing to see if I can use the data */
console.log(isLoading);
console.log(data);
console.log(data.title);
console.log(data.tags);
/* console.log(data.tags.length); */
console.log(data.reviews);
/* console.log(data.reviews.length); */

/* Data should exist if we get to here. Let's render the product */
return (
  <section>
    <h1>{data.title}</h1>
        <img src={data.imageUrl} />
        <p>ID: {data.id}</p>
        <p>{data.discountedPrice === data.price && <p>Price: {data.price}</p>}</p>
        <p>{data.discountedPrice < data.price && <p>Price: {data.discountedPrice}</p>}</p>
        <p>{data.discountedPrice < data.price && <p>ON SALE</p>}</p>
        <p>{data.discountedPrice < data.price && <p>Save {data.price - data.discountedPrice}!</p>}</p>
        <p>Description: {data.description}</p>
        <p>Rating: {data.rating}</p>        
        <button>Add to cart</button>
        <div>
          <Link to="/">Back to products</Link>
        </div>
  </section>
)

/*   
    let params = useParams();
    const product = useApi(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);
    const { id, title, description, price, discountedPrice, imageUrl, rating, tags, reviews } = product.data;
    console.log(reviews);
    console.log(tags);    
    // console.log(tags.length);
    // console.log(reviews[0].id);
    
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
    ); */
  }