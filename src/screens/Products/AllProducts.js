import {React, useContext} from 'react';
import {View, Text} from 'react-native';
import {ProductsOutput} from '../../components';
import {ProductsContext} from '../../context-store';

function AllProducts() {
  const productContext = useContext(ProductsContext);
  // console.log('------------>', productContext);

  return (
    <ProductsOutput
      products={productContext.products}
      productPeriod="Total"
      fallbackText="No expenses added found"
    />
  );
}

export default AllProducts;
