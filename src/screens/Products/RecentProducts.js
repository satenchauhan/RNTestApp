import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {ErrorMessage, Loading, ProductsOutput} from '../../components';
import {ProductsContext} from '../../context-store';
import {getDateMinusDays} from '../../utils';
import {fetchProductData} from '../../utils/apiCaller';

const RecentProducts = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const productContext = useContext(ProductsContext);

  useEffect(() => {
    async function getProducts() {
      setIsFetching(true);
      try {
        const products = await fetchProductData();
        productContext.setProducts(products);
      } catch (error) {
        setError('Could not fetch expenses !');
      }
      setIsFetching(false);
    }
    getProducts();
  }, []);

  const recentProducts = productContext.products.filter(product => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return product.date >= date7DaysAgo && product.date <= today;
  });

  if (error && !isFetching) {
    return <ErrorMessage message={error} />;
  }
  if (isFetching) {
    return <Loading />;
  }
  return (
    <ProductsOutput
      expenses={recentProducts}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses added for last 7 days"
    />
  );
};

export default RecentProducts;

const styles = StyleSheet.create({});
