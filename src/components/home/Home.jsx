import Search from "./search/Search";
import ProductList from "./ProductList";
import NoResults from "./search/NoResults";
import { HomeSection } from "./Home.style";

export default function Home() {  
    return (
      <HomeSection>
        <div><h1>Home</h1></div>
        {<div><Search /></div>}
      
        
        
        {/* {<ProductList /> && !<NoResults />}  */}
        </HomeSection>
    );
  }
