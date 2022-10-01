import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.items.length !== 0) {
        if (
          state.items.find((item) => {
            if (item.name === action.payload.name) {
              for (let key of Object.keys(action.payload.selectedAttributes)) {
                if (
                  action.payload.selectedAttributes[key] ===
                  item.selectedAttributes[key]
                )
                  return true;
              }
            }
          })
        ) {
          return;
        } else state.items.push(action.payload);
      } else state.items.push(action.payload);
    },

    calculateTotalPrice: (state, action) => {
      if (state.total.length !== 0) {
        state.total = state.total.map((item, index) => ({
          __typename: 'Price',
          currency: item.currency,
          amount: item.amount + action.payload[index].amount
        }));
      } else state.total = action.payload;
    }
  }
});

export const { addItem, calculateTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
