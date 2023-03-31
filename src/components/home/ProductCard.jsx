import { Link } from "react-router-dom";
import showStars from "../../utilities/ReviewStars";
import { ProductCardContainer, ProductCardCTA, ProductCardDiscount, ProductOldPrice } from "./ProductCardContainer.style";

export default function ProductCard(data) {
  const { data: productArray } = data;

  if (productArray.length !== 0) {
    return (
      <ProductCardContainer>
        {productArray.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <div>
              <Link to={`/product/${product.id}`}>
                <h2>{product.title}</h2>
              </Link>
              <p>{showStars(product.rating)}</p>
              <p>{product.description}</p>
              <p>{product.discountedPrice === product.price && <span>${product.price}</span>}</p>
              <p>{product.discountedPrice < product.price && <span>${product.discountedPrice}</span>}</p>
              <ProductOldPrice>{product.discountedPrice < product.price && <span>${product.price}</span>}</ProductOldPrice>
              <ProductCardDiscount>{product.discountedPrice < product.price && <p>{(((product.price - product.discountedPrice) * 100) / product.price).toFixed(0)}% OFF</p>}</ProductCardDiscount>
              <ProductCardCTA to={`/product/${product.id}`}>See product</ProductCardCTA>
            </div>
          </div>
        ))}
      </ProductCardContainer>
    );
  }
}
