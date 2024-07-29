import { createSlice } from "@reduxjs/toolkit";

export interface ProductInitial {
  data: any[];
  activeCustomer: any | null;
}

const initialState: ProductInitial = {
  data: [],
  activeCustomer: null,
};

export const customerAdminSlice = createSlice({
  name: "customerAdminSlice",
  initialState,
  reducers: {
    listOder: (state) => {
      state.data;
    },
    setListOrder: (state, action) => {
      state.data = action.payload;
    },
    activeCustomer: (state) => {
      state.activeCustomer;
    },
    setActiveCustomer: (state, action) => {
      state.activeCustomer = action.payload;
    },
  },
});

export const { listOder, setListOrder, activeCustomer, setActiveCustomer } =
  customerAdminSlice.actions;

export default customerAdminSlice.reducer;
