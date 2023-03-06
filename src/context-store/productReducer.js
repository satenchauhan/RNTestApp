import {React} from 'react';

export function productsReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.pyload, ...state];

    case 'SET_PRODUCTS':
      const data = action.payload;
      return data;

    case 'UPDATE':
      const getUpdatableProductId = state.findIndex(
        product => product.id === action.payload,
      );
      const findUpdatableItem = state[getUpdatableProductId];
      const updatedItem = {...findUpdatableItem, ...action.payload.data};
      const updatedProduct = [...state];
      updatedProduct[getUpdatableProductId] = updatedItem;
      return updatedProduct;

    case 'DELETE':
      return state.filter(product => product.id !== action.payload);
    default:
      state;
  }
}
