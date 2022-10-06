import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: [],
  tax: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => {
        if (item.name === action.payload.name) {
          for (let key of Object.keys(action.payload.selectedAttributes)) {
            if (
              action.payload.selectedAttributes[key] ===
              item.selectedAttributes[key]
            )
              return true;
          }
        }
      });
      const exisitngItemIndex = state.items.indexOf(existingItem);

      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + 1
        };
        updatedItems = [...state.items];
        updatedItems[exisitngItemIndex] = updatedItem;
        state.items = updatedItems;
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
    },

    removeItem: (state, action) => {
      const existingItem = state.items.find((item) => {
        if (item.name === action.payload.name) {
          for (let key of Object.keys(action.payload.selectedAttributes)) {
            if (
              action.payload.selectedAttributes[key] ===
              item.selectedAttributes[key]
            )
              return true;
          }
        }
      });
      const exisitngItemIndex = state.items.indexOf(existingItem);

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.items = updatedItems;
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1
        };
        updatedItems = [...state.items];
        updatedItems[exisitngItemIndex] = updatedItem;
        state.items = updatedItems;
      }
    },

    reduceTotalPrice: (state, action) => {
      state.total = state.total.map((item, index) => ({
        __typename: 'Price',
        currency: item.currency,
        amount: item.amount - action.payload[index].amount
      }));
    },

    calculateTax: (state) => {
      const taxRate = 0.21;
      state.tax = state.total.map((item) => ({
        __typename: 'Price',
        currency: item.currency,
        amount: taxRate * item.amount
      }));
    }
  }
});

export const {
  addItem,
  removeItem,
  reduceTotalPrice,
  calculateTotalPrice,
  calculateTax
} = cartSlice.actions;
export default cartSlice.reducer;
