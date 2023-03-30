import useApi from "../../hooks/APIHook";
import ProductCard from "./ProductCard";
import { ProductListContainer } from "./ProductListContainer.style";

export default function ProductList() {
    const { data, isLoading } = useApi("https://api.noroff.dev/api/v1/online-shop");
    if (isLoading) return <div>Loading...</div>
    return (
      <ProductListContainer>
        <ProductCard data={data}/>
      </ProductListContainer>

    )
  
}