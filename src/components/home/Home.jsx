import { Link } from "react-router-dom";
import useApi from "../../hooks/APIHook";

export default function Home() {
    const { data } = useApi("https://api.noroff.dev/api/v1/online-shop");
    console.log(data);
    console.log("API data fetched");
    
    return (
      <section>
        <h1>Home</h1>
        <div>
          {data.map((product) => (
            <div key={product.id}>
              <img src={product.imageUrl} />
              <Link to={`/product/${product.id}`}><h2>{product.title}</h2></Link>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Discounted price: {product.discountedPrice}</p>
              <p>Rating: {product.rating}</p>
              <p>ID: {product.id}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
