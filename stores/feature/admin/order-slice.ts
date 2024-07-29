import { createSlice } from "@reduxjs/toolkit";

export interface ProductInitial {
  data: any[];
  activeOrder: any | null;
}

const initialState: ProductInitial = {
  data: [],
  activeOrder: null,
};

export const orderAdminSlice = createSlice({
  name: "orderAdminSlice",
  initialState,
  reducers: {
    listOder: (state) => {
      state.data;
    },
    setListOrder: (state, action) => {
      state.data = action.payload;
    },
    activeOrder: (state) => {
      state.activeOrder;
    },
    setActiveOrder: (state, action) => {
      state.activeOrder = action.payload;
    },
  },
});

export const { listOder, setListOrder, activeOrder, setActiveOrder } =
  orderAdminSlice.actions;

export default orderAdminSlice.reducer;
