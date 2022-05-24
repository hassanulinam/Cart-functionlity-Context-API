import { CartState } from "../AppContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = CartState();
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Header;
