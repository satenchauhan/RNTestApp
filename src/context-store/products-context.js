import React, {createContext} from 'react';

const ProductsContext = createContext({
  products: [],
  addProduct: ({description, amount, date}) => {},
  setProducts: products => {},
  deleteProduct: id => {},
  updateProduct: (id, {description, amount, date}) => {},
});

export default ProductsContext;
