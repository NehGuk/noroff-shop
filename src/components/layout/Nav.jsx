import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <div>
        <div>
            <Link to="/">Logo</Link></div>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        </div>
        <div>
            <Link to="/cart">Cart icon</Link>
        </div>
        
      </div>
    );
  }