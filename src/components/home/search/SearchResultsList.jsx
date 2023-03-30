import { Link } from "react-router-dom";
import { SearchResultsContainer } from "./SearchReultsList.style";



export default function SearchResultsList(data) {
    const { data: productArray } = data;
        
    if (productArray.length !== 0) {
        return (
            <SearchResultsContainer>
          
            {productArray.map((product) => (
                <div key={product.id}>
                    <img src={product.imageUrl} alt={product.title} />
                    <div>
                        <Link to={`/product/${product.id}`}><h2>{product.title}</h2></Link>
                    </div>
                    <div>
                        <p>{product.discountedPrice === product.price && <>${product.price}</>}</p>
                        <p>{product.discountedPrice < product.price && <>${product.discountedPrice}</>}</p>
                    </div>
                </div>
            ))}
          
          </SearchResultsContainer>
        )
    }
}