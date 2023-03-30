import {React, useState } from "react";
import SearchResults from "./SearchResults";
import useApi from "../../../hooks/APIHook";
import ProductList from "../ProductList";
import { SearchArea } from "./Search.style";

export default function Search() {
    const { data: products } = useApi("https://api.noroff.dev/api/v1/online-shop");
        
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <SearchArea>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {!searchTerm && <ProductList />}
      {searchTerm && <div><SearchResults results={filteredProducts}/></div>}
    
    </SearchArea>
  );
}
