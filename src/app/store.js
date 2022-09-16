import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../features/categories/categoriesSlice';
import categoryProductsSlice from '../features/categoryProducts/categoryProductsSlice';
import currenciesSlice from '../features/currencies/currenciesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    categoryProducts: categoryProductsSlice,
    currencies: currenciesSlice
  }
});
