import NoResults from "./NoResults"
import ProductCard from "../ProductCard";

export default function SearchResults(results) {
    const { results: filteredResults } = results;
    
    return <div>
        {filteredResults.length === 0 && <div><NoResults /></div>}
        <ProductCard details={filteredResults}/>
    </div>
}
