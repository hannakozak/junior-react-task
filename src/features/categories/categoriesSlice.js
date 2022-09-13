import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categoriesQuery } from './categoriesQuery';
import { apolloClient } from '../../app/apolloClient';

const initialState = {
  categories: [],
  fetchCategoriesStatus: 'IDLE'
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    let response = await apolloClient.query({ query: categoriesQuery });
    return response.data.categories;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, function (state) {
      state.fetchCategoriesStatus = 'PENDING';
    });
    builder.addCase(fetchCategories.fulfilled, function (state, action) {
      state.fetchCategoriesStatus = 'SUCCESS';
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, function (state) {
      state.fetchCategoriesStatus = 'ERROR';
    });
  }
});

export default categoriesSlice.reducer;
