import { Link, useParams } from "react-router-dom";

export default function Product() {
    let params = useParams();
    console.log(params.id);
  
    return (
      <div>
        <h1>Product #{params.id}</h1>
        <div>
          <Link to="/">Back to products</Link>
        </div>
      </div>
    );
  }