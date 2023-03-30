import Search from "./search/Search";
/* import ProductList from "./ProductList";
import NoResults from "./search/NoResults"; */
import { HomeSection, Welcome } from "./Home.style";

export default function Home() {  
    return (
      <HomeSection>
        <Welcome>
          <h1>Welcome to the Noroff API Shop!</h1>
          
        </Welcome>
        <Search />

        {/* <div><h1>Welcome</h1></div>
        <div><Search /></div> */}
        
        {/* {<ProductList /> && !<NoResults />}  */}
        </HomeSection>
    );
  }
