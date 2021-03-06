import { CartState } from "../AppContext";
import SingleProduct from "./SingleProduct";

const CartPage = () => {
  const { cart } = CartState();
  const totlaPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="cart-page--bgcontainer">
      <h2>My-Cart</h2>
      <p className="product-price bold">
        Total Price: ${totlaPrice} <br /> Total Items: {cart.length}
      </p>
      <div className="product-cards--list">
        {cart.map((p) => (
          <SingleProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
