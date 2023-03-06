import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants';
import ProductList from './ProductsList';
import ProductsSummary from './ProductsSummary';

function ProductsOutput({products, productPeriod, fallbackText}) {
  let contentData = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (products.length > 0) {
    contentData = <ProductList products={products} />;
  }

  return (
    <View style={styles.container}>
      <ProductsSummary products={products} periodName={productPeriod} />
      {contentData}
    </View>
  );
}
export default ProductsOutput;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
