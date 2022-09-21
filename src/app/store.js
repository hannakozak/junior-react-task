import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../features/categories/categoriesSlice';
import categoryProductsSlice from '../features/categoryProducts/categoryProductsSlice';
import currenciesSlice from '../features/currencies/currenciesSlice';
import productSlice from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    categoryProducts: categoryProductsSlice,
    currencies: currenciesSlice,
    product: productSlice
  }
});
