import { ProductType, CartState } from "../AppContext";
import "./styles.css";

const SingleProduct = ({ product }: { product: ProductType }) => {
  const { id, name, desc, price, imgUrl } = product;
  const { cart, setCart, products } = CartState();
  return (
    <div className="single-product--card">
      <img alt="product-img" src={imgUrl} className="product-img" />
      <div className="flex-row bold">
        <span className="product-title">{name}</span>
        <span className="product-price">${price}</span>
      </div>
      <span className="product-description">{desc}</span>
      {cart.includes(product) ? (
        <button
          className="product-card--button danger"
          onClick={() => setCart(cart.filter((p) => p.id !== id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="product-card--button"
          onClick={() => setCart([...cart, product])}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
