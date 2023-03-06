import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../input';
import {GlobalStyles} from '../../constants';
import {getFormatDate} from '../../utils';
import Button from '../buttons/Button';

const ProductForm = ({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) => {
  const [input, setInput] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormatDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, inputValue) {
    // console.log('thus---->', inputIdentifier);
    setInput(currentValue => {
      return {
        ...currentValue,
        [inputIdentifier]: {value: inputValue, isValid: true},
      };
    });
  }

  function submitHandler() {
    const productData = {
      amount: input.amount.value,
      date: new Date(input.date.value),
      description: input.description.value,
    };

    const amountIsValid = !isNaN(productData.amount) && productData.amount > 0;
    const dateIsValid = productData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = productData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInput(curInput => {
        return {
          amount: {value: curInput.amount.value, isValid: amountIsValid},
          date: {value: curInput.date.value, isValid: dateIsValid},
          description: {
            value: curInput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(productData);
  }
  const formIsInvalid =
    !input.amount.isValid || !input.date.isValid || !input.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Add Your Products</Text>
      <View style={styles.inputRows}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!input.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: input.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!input.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: input.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!input.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCaptilize: 'words',
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: input.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid Inputs - Please check your entered data
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ProductForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24,
  },
  inputRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    marginVertical: 10,
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
});
