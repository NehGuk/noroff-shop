import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "../../hooks/APIHook";
import Reviews from "./Reviews";
import showStars from "../../utilities/ReviewStars";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductSection, ProductTitle, ProductImage, ProductDescription, ProductPrice, ProductStars, ProductPriceDiscount, ProductTags, ProductAddToCart, BackToProducts, ProductReviews, ProductArea } from "./Product.style";
import { LoaderContainer } from "../../styles/LoaderContainer";

export default function Product() {
  const params = useParams();
  const { data, isLoading } = useApi(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);
  const { title, description, price, discountedPrice, imageUrl, rating, tags, reviews } = data;
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [addButton, setAddButton] = useState(true);
  const [removeButton, setRemoveButton] = useState(false);
  const alreadyInCart = cartItems.find(item => item.id === data.id);

  useEffect(() => {
    alreadyInCart && setAddButton(false);
    alreadyInCart && setRemoveButton(true);
  }, [alreadyInCart]);
    
  if (isLoading) return <LoaderContainer>Loading...</LoaderContainer>
  
  
  function handleAddButton() {
    setAddButton(false);
    setRemoveButton(true);
    addToCart(data);
  }

  function handleRemoveButton() {
    setRemoveButton(false);
    setAddButton(true);
    removeFromCart(data);
  }
  
  return (
    <ProductArea>
    <ProductSection>
      
      <ProductImage>
        <img src={imageUrl} alt={title}/>
      </ProductImage>

      <ProductTitle>
        <h1>{title}</h1>
      </ProductTitle>

      <ProductDescription>
        {description}
      </ProductDescription>

      <ProductStars>
        {showStars(rating, 24)} <p> Rating: {rating}</p>
      </ProductStars>

      <ProductPrice>
        <p><strong>{discountedPrice === price && <span>${price}</span>}</strong></p>
        <p><strong>{discountedPrice < price && <span>${discountedPrice}</span>}</strong></p>
        <ProductPriceDiscount>
          <p>{discountedPrice < price && <span>{(((price - discountedPrice) * 100) / price).toFixed(0)}% OFF | Save ${price - discountedPrice}</span>}</p>
        </ProductPriceDiscount>
      </ProductPrice>

      <ProductTags>
        <p><strong>Tags:</strong> {tags && <span>{tags.join(', ')}</span>}</p>
      </ProductTags>

      <ProductAddToCart>
        <button onClick={handleAddButton} style={{ display: addButton ? 'block' : 'none' }}>Add to cart</button>
        <button onClick={handleRemoveButton} style={{ display: removeButton ? 'block' : 'none' }}>Remove from cart</button>
      </ProductAddToCart>

      <BackToProducts>
        <p><Link to="/">Back to products</Link></p>
      </BackToProducts>

      <ProductReviews>
        {reviews && <div><Reviews reviews={reviews}/></div>}
      </ProductReviews>
      
    </ProductSection>
    </ProductArea>
  )
}
