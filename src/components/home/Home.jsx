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
            <Link to="/product/1">Product 1</Link>
        </div>
        <div>
            <Link to="/product/2">Product 2</Link>
        </div>
        <div>
            <Link to="/product/3">Product 3</Link>
        </div>

        <div><h1>Test</h1>
        {data.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Discounted price: {product.discountedPrice}</p>
          <p>Rating: {product.rating}</p>
        </div>
      ))}
        </div>
    </section>
    );
  }
