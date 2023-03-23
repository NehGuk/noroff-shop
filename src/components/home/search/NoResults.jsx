import ProductList from "../ProductList"

export default function NoResults() {
    
    return <div>
        <h3>Oops... No results match the search term!</h3>
        <p>Try again or keep browsing our products below.</p>
        <hr></hr>
        <ProductList />
        

        </div>
}