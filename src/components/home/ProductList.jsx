import useApi from "../../hooks/APIHook";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const { data } = useApi("https://api.noroff.dev/api/v1/online-shop");
    return <div><ProductCard details={data}/>
  </div>
}