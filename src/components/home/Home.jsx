import Search from "./search/Search";
import ProductList from "./ProductList";
import NoResults from "./search/NoResults";

export default function Home() {  
    return (
      <section>
        <h1>Home</h1>
        <Search />
        {<ProductList /> && !<NoResults />} 
      </section>
    );
  }
