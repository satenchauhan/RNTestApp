import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from './../../constants/index';

function ProductsSummary({products, periodName}) {
  const productSum = products.reduce((sum, product) => {
    return sum + product.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.totalAmt}>${productSum.toFixed(2)}</Text>
    </View>
  );
}

export default ProductsSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
  totalAmt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});
