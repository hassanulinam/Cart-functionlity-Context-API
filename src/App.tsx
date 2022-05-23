import { CartState } from "./AppContext";
import "./App.css";
import Home from "./components/Home";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
      <h2>Simulation of a Shopping Cart using Context API</h2>
      <CartPage />
      <hr />
      <h1>Home Page</h1>
      <Home />
    </div>
  );
}

export default App;
