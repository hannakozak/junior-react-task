import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../features/categories/categoriesSlice';
import categoryProductsSlice from '../features/categoryProducts/categoryProductsSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    categoryProducts: categoryProductsSlice
  }
});
