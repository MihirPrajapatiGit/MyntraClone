import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  count: number;
}

const initialState: CartState = {
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
  },
});

export const { updateCartCount } = cartSlice.actions;

export default cartSlice.reducer;
