import React, {useReducer} from 'react';
import {productsReducer} from './productReducer';
import {dummy_products} from './dummy-data';
import ProductsContext from './products-context';

function ProductsContextProvider({children}) {
  const [productState, dispatch] = useReducer(productsReducer, []);
  // const [productState, dispatch] = useReducer(productsReducer, dummy_products);

  function addProduct(product) {
    dispatch({type: 'ADD', payload: product});
  }

  function setProducts(products) {
    dispatch({type: 'SET_PRODUCTS', payload: products});
  }

  function updateProduct(id, product) {
    dispatch({type: 'UPDATE', payload: {id: id, data: product}});
  }

  function deleteProduct(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  const value = {
    products: productState,
    setProducts: setProducts,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
