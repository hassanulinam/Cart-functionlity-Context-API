import { CartState } from "../AppContext";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const { cart } = CartState();
  return (
    <div className="navbar-container flex-row">
      <Link to="/">Home</Link>
      <Link to="/cart" className="flex-row">
        Cart
        {cart.length > 0 && (
          <span className="cart-count-tag">{cart.length}</span>
        )}
      </Link>
    </div>
  );
};

export default Header;
