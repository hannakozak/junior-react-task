import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productQuery } from './productQuery';
import { apolloClient } from '../../app/apolloClient';

const initialState = {
  product: {},
  selectedPhoto: '',
  fetchProductStatus: 'IDLE'
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (productId) => {
    let response = await apolloClient.query({
      query: productQuery,
      variables: { productId }
    });
    return response.data.product;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectPhoto(state, action) {
      state.selectedPhoto = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, function (state) {
      state.fetchProductStatus = 'PENDING';
    });
    builder.addCase(fetchProduct.fulfilled, function (state, action) {
      state.fetchProductStatus = 'SUCCESS';
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, function (state) {
      state.fetchProductStatus = 'ERROR';
    });
  }
});

export const { selectPhoto } = productSlice.actions;
export default productSlice.reducer;
