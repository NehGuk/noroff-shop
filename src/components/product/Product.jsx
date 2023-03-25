import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "../../hooks/APIHook";
import Reviews from "./Reviews";
import showStars from "../../utilities/ReviewStars";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

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
    
  if (isLoading) return <div>Loading...</div>
  
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
    <section>
      <h1>{title}</h1>
          <img src={imageUrl} alt={title}/>
          <p>{discountedPrice === price && <span>Price: {price}</span>}</p>
          <p>{discountedPrice < price && <span>Price: {discountedPrice}</span>}</p>
          <p>{discountedPrice < price && <span>{(((price - discountedPrice) * 100) / price).toFixed(0)}% OFF</span>}</p>
          <p>{discountedPrice < price && <span>Save {price - discountedPrice}!</span>}</p>
          
          <p>Description: {description}</p>
          <p>{showStars(rating, 24)} <span> ({rating})</span></p>        
          <p>Tags: {tags && <span>{tags.join(' ')}</span>}</p>
    
          <div>
            <button onClick={handleAddButton} style={{ display: addButton ? 'block' : 'none' }}>Add</button>
            <button onClick={handleRemoveButton} style={{ display: removeButton ? 'block' : 'none' }}>Remove</button>
          </div>
          
          <p><Link to="/">Back to products</Link></p>
          {reviews && <div><Reviews reviews={reviews}/></div>}       
    </section>
  )
}
