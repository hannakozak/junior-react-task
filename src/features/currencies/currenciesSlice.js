import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { currenciesQuery } from './currenciesQuery';
import { apolloClient } from '../../app/apolloClient';

const initialState = {
  currenies: [],
  fetchCurrenciesStatus: 'IDLE',
  selectedCurrency: '$'
};

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async () => {
    let response = await apolloClient.query({ query: currenciesQuery });
    return response.data.currencies;
  }
);

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    selectCurrency(state, action) {
      state.selectedCurrency = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, function (state) {
      state.fetchCurrenciesStatus = 'PENDING';
    });
    builder.addCase(fetchCurrencies.fulfilled, function (state, action) {
      state.fetchCurrenciesStatus = 'SUCCESS';
      state.currencies = action.payload;
    });
    builder.addCase(fetchCurrencies.rejected, function (state) {
      state.fetchCurrenciesStatus = 'ERROR';
    });
  }
});

export const { selectCurrency } = currenciesSlice.actions;
export default currenciesSlice.reducer;
