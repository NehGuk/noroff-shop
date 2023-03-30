import { Link } from "react-router-dom";
import showStars from "../../utilities/ReviewStars";
import { ProductCardContainer, ProductCardDiscount } from "./ProductCardContainer.style";

export default function ProductCard(data) {
    const { data: productArray } = data;
        
    if (productArray.length !== 0) {
        return (
          <ProductCardContainer>
            {productArray.map((product) => (
                <div key={product.id}>
                  <img src={product.imageUrl} alt={product.title} />
                  <div>
                    <Link to={`/product/${product.id}`}><h2>{product.title}</h2></Link>
                    <p>{product.description}</p>
                    <p>{product.discountedPrice === product.price && <span>Price: {product.price}</span>}</p>
                    <p>{product.discountedPrice < product.price && <span>Price: {product.discountedPrice}</span>}</p>
                    <ProductCardDiscount>
                      {product.discountedPrice < product.price && <p>{(((product.price - product.discountedPrice) * 100) / product.price).toFixed(0)}% OFF</p>}
                    </ProductCardDiscount>
                    <p>Rating: {showStars(product.rating)}</p>
                    <Link to={`/product/${product.id}`}><p>See product</p></Link>
                  </div>
                </div>
              ))}
          </ProductCardContainer>
        )
    }
}