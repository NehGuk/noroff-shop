import useApi from "../../hooks/APIHook";
import ProductCard from "./ProductCard";
import { ProductListContainer } from "./ProductListContainer.style";
import { LoaderContainer } from "../../styles/LoaderContainer";

export default function ProductList() {
  const { data, isLoading } = useApi("https://api.noroff.dev/api/v1/online-shop");
  if (isLoading) return <LoaderContainer>Loading...</LoaderContainer>;
  return (
    <ProductListContainer>
      <ProductCard data={data} />
    </ProductListContainer>
  );
}
