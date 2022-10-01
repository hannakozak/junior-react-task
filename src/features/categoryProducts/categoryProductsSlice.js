import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categoryProductsQuery } from './categoryProductsQuery';
import { apolloClient } from '../../app/apolloClient';

const initialState = {
  products: [],
  fetchProductsStatus: 'IDLE'
};

export const fetchCategoryProducts = createAsyncThunk(
  'categoryProducts/fetchCategoryProducts',
  async (category) => {
    let response = await apolloClient.query({
      query: categoryProductsQuery,
      variables: { category }
    });
    return response.data.category.products;
  }
);

export const categoryProductsSlice = createSlice({
  name: 'categoryProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryProducts.pending, function (state) {
      state.fetchProductsStatus = 'PENDING';
    });
    builder.addCase(fetchCategoryProducts.fulfilled, function (state, action) {
      state.fetchProductsStatus = 'SUCCESS';
      state.products = action.payload;
    });
    builder.addCase(fetchCategoryProducts.rejected, function (state) {
      state.fetchProductsStatus = 'ERROR';
    });
  }
});

export default categoryProductsSlice.reducer;
