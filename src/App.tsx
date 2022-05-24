import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Simulation of a Shopping Cart using Context API</h2>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
