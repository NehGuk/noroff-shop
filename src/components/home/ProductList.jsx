import useApi from "../../hooks/APIHook";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const { data, isLoading } = useApi("https://api.noroff.dev/api/v1/online-shop");
    if (isLoading) return <div>Loading...</div>
    return <div><ProductCard data={data}/>
  </div>
}