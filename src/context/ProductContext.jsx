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
  const [products, setProducts] = useState(getAllItems());

  const addNewProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const deleteSelectedProducts = (ids) => {
    setProducts(products.filter((product) => !ids.includes(product.id)));
  };

  const contextValue = {
    getItemById,
    getAllItems,
    addNewProduct,
    deleteProduct,
    deleteSelectedProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
