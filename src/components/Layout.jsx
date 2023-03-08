import { Link, Outlet } from "react-router-dom";

function Nav() {
    return (
      <div>
        <div>
            <Link to="/">Logo</Link></div>
        <div>
        <ul>
          <li>
            <Link to="/">Homeeee</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        </div>
        <div>
            <Link to="/cart">Cart</Link>
        </div>
        
      </div>
    );
  }
  
  function Header() {
    return (
      <header>
        <Nav />
      </header>
    );
  }
  
  function Footer() {
    return <footer>Footer</footer>;
  }
  
  export default function Layout() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }