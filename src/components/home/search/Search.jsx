import {React, useState } from "react";
import SearchResults from "./SearchResults";
import useApi from "../../../hooks/APIHook";
import ProductList from "../ProductList";

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
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {!searchTerm && <div><ProductList /></div>}
      {searchTerm && <div><SearchResults results={filteredProducts}/></div>}
    </div>
  );
}
