import { Link } from "react-router-dom"
import showStars from "../../../utilities/ReviewStars"
import NoResults from "./NoResults"


export default function SearchResults(results) {
    
    return <div>
        {results.results.length === 0 && <div><NoResults /></div>}
        
        {results.results.map((product) => (
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