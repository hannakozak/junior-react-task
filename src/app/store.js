import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';
import categoriesSlice from '../features/categories/categoriesSlice';
import categoryProductsSlice from '../features/categoryProducts/categoryProductsSlice';
import currenciesSlice from '../features/currencies/currenciesSlice';
import productSlice from '../features/product/productSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  categories: categoriesSlice,
  categoryProducts: categoryProductsSlice,
  currencies: currenciesSlice,
  product: productSlice,
  cart: cartSlice
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
