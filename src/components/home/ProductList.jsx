import { Link } from "react-router-dom";
import useApi from "../../hooks/APIHook";
import showStars from "../../utilities/ReviewStars";

export default function ProductList() {
    const { data } = useApi("https://api.noroff.dev/api/v1/online-shop");

    return <div>
    {data.map((product) => (
      <div key={product.id}>
        <img src={product.imageUrl} alt={product.title} />
        <Link to={`/product/${product.id}`}><h2>{product.title}</h2></Link>
        <p>{product.description}</p>
        <p>{product.price === product.discountedPrice ? <span>Price: {product.price}</span> : <span>Price: {product.discountedPrice}</span>}</p>
        <p>{product.price > product.discountedPrice && <span>ON SALE</span>}</p>
        <p>Rating: {showStars(product.rating)}</p>
      </div>
    ))}
  </div>
}