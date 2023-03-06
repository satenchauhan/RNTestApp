import React, {useState, useLayoutEffect, useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ErrorMessage, IconButton, Loading, ProductForm} from '../../components';
import {GlobalStyles} from '../../constants';
import {ProductsContext} from '../../context-store';
import {
  deleteProductFromDB,
  storeProductInDB,
  updateProductInDB,
} from '../../utils/apiCaller';

function ManageProducts({route, navigation}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const productContext = useContext(ProductsContext);
  const editProductId = route.params?.productId;
  const isEditing = !!editProductId;

  const selectedProduct = productContext.products.find(
    product => product.id === editProductId,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Product' : 'Add Product',
    });
  }, [navigation, isEditing]);

  async function deleteProductHandler() {
    setIsSubmitting(true);
    try {
      await deleteProductFromDB(editProductId);
      productContext.deleteProduct(editProductId);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense - Please try again !');
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(productData) {
    // console.log('------->', productData);
    setIsSubmitting(true);
    try {
      if (isEditing) {
        productContext.updateProduct(editProductId, productData);
        await updateProductInDB(editProductId, productData);
      } else {
        const id = await storeProductInDB(productData);
        // console.log('------->', id);
        productContext.addProduct({...productData, id: id});
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save data - Please try again');
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorMessage message={error} />;
  }

  if (isSubmitting) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ProductForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedProduct}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={26}
            onPress={deleteProductHandler}
          />
        </View>
      )}
      {/* <Text>Manage Expense</Text> */}
    </View>
  );
}

export default ManageProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
