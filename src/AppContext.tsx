import React, { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";

faker.seed(50);

export type ProductType = {
  id: string;
  name: string;
  desc: string;
  price: number;
  imgUrl: string;
};

type CartContextType = {
  cart: ProductType[];
  setCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
  products: ProductType[];
};

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  products: [],
});

type propTypes = {
  children: PropTypes.ReactElementLike;
};

const AppContext = ({ children }: propTypes) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const productsArray = [...Array(20)].map((prod) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    desc: faker.commerce.productDescription(),
    price: (Number(faker.commerce.price()) % 5) + 5,
    imgUrl: faker.image.business(640, 480, true),
  }));
  const [products] = useState(productsArray);

  return (
    <CartContext.Provider value={{ cart, setCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default AppContext;
