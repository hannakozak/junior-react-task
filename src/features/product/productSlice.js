import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productQuery } from './productQuery';
import { apolloClient } from '../../app/apolloClient';

const initialState = {
  product: {},
  fetchProductStatus: 'IDLE'
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (productId) => {
    let response = await apolloClient.query({
      query: productQuery,
      variables: { productId }
    });
    console.log(response.data.product);
    return response.data.product;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, function (state) {
      state.fetchProductStatus = 'PENDING';
    });
    builder.addCase(fetchProduct.fulfilled, function (state, action) {
      state.fetchProductsStatus = 'SUCCESS';
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, function (state) {
      state.fetchProductStatus = 'ERROR';
    });
  }
});

export default productSlice.reducer;
