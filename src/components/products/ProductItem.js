import {React} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants';
import {getFormatDate} from '../../utils';

function ProductItem({id, description, amount, date}) {
  const navigation = useNavigation();

  function productPressHandler() {
    navigation.navigate('ManageProducts', {productId: id});
  }

  return (
    <Pressable
      onPress={productPressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.productItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormatDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  productItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: '900',
  },
});
