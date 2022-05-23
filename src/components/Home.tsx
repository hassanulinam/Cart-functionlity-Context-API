import { CartState } from "../AppContext";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const { products } = CartState();

  return (
    <div className="product-cards--list">
      {products.map((p) => (
        <SingleProduct key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Home;
