import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export default function Nav() {
    return (
      <nav>
        <div>
          <Link to="/">Logo</Link>
        </div>
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
          <div>
            <Link to="/cart"><ShoppingCart size={32}/></Link>
          </div>
          <div>3</div>
        </div>
      </nav>
    );
  }