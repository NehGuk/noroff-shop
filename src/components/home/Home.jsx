import Search from "./search/Search";
import ProductList from "./ProductList";

export default function Home() {  
    return (
      <section>
        <h1>Home</h1>
        <Search />
        <ProductList />
      </section>
    );
  }
