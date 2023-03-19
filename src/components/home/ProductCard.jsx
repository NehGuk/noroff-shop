import { Link } from "react-router-dom";
import showStars from "../../utilities/ReviewStars";

export default function ProductCard(data) {
    const { details: productArray } = data;
        
    if (productArray.length !== 0) {
        return <div>
        {productArray.map((product) => (
            <div key={product.id}>
              <img src={product.imageUrl} alt={product.title} />
              <Link to={`/product/${product.id}`}><h2>{product.title}</h2></Link>
              <p>{product.description}</p>
              <p>{product.price === product.discountedPrice ? <span>Price: {product.price}</span> : <span>Price: {product.discountedPrice}</span>}</p>
              <p>{product.price > product.discountedPrice && <span>ON SALE</span>}</p>
              <p>Rating: {showStars(product.rating)}</p>
              <Link to={`/product/${product.id}`}><p>See product</p></Link>
            </div>
          ))}
          </div>

    }
}