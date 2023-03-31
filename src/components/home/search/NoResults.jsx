import ProductList from "../ProductList";
import { NoResultsArea } from "./NoResults.style";

export default function NoResults() {
  return (
    <NoResultsArea>
      <h3>Oops!</h3>
      <p>No results. Try again or browse the products below.</p>
      <hr></hr>
      <ProductList />
    </NoResultsArea>
  );
}
