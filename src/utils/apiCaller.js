import React from 'react';
import axios from 'axios';

const API_URL = 'https://demoapp-4729e-default-rtdb.firebaseio.com';

//Store data in Firebase database
export async function storeProductInDB(product) {
  console.log('product***----->', product);
  const response = await axios.post(API_URL + '/expenses.json', product);

  const id = response.data.name;
  return id;
}

//Fetch data from Ffirebase DB
export async function fetchProductData() {
  const response = await axios.get(API_URL + '/expenses.json');
  const products = [];
  for (const key in response.data) {
    const productObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    products.push(productObj);
    // console.log(productObj);
  }
  return products;
}

export function updateProductInDB(id, product) {
  const updatedResponse = axios.put(API_URL + `/products/${id}.json`, product);
  return updatedResponse;
}

export function deleteProductFromDB(id) {
  const deletedItem = axios.delete(API_URL + `/products/${id}.json`);
  return deletedItem;
}
