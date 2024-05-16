import React, { createContext, useState } from "react";
import ProductData from "../libs/ShopProducts";

export const ProductContext = createContext(null);

const getItemById = (id) => {
  return ProductData.find((item) => item.id === id);
};

const getAllItems = () => {
  return ProductData;
};

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([getAllItems()]);
  const addNewProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };
  const contextValue = {
    getItemById,
    getAllItems,
    addNewProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
