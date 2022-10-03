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
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1
        };
        updatedItems = [...state.items];
        updatedItems[exisitngItemIndex] = updatedItem;
        state.items = updatedItems;
      } else state.items.push(action.payload);
    },

    reduceTotalPrice: (state, action) => {
      if (state.total.length !== 0) {
        state.total = state.total.map((item, index) => ({
          __typename: 'Price',
          currency: item.currency,
          amount: item.amount - action.payload[index].amount
        }));
      } else state.total = action.payload;
    }
  }
});

export const { addItem, removeItem, reduceTotalPrice, calculateTotalPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
