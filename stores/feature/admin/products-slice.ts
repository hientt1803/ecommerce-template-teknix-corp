import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductInitial {
  data: IProduct[];
  searchedProductList: IProduct[];
  activeProduct: IProduct | null;
}

const initialState: ProductInitial = {
  data: [],
  searchedProductList: [],
  activeProduct: null,
};

export const productAdminSlice = createSlice({
  name: "productAdminSlice",
  initialState,
  reducers: {
    listProduct: (state) => {
      state.data;
    },
    setListProduct: (state, action) => {
      state.data = action.payload;
    },
    activeProduct: (state) => {
      state.activeProduct;
    },
    setActiveProduct: (state, action) => {
      state.activeProduct = action.payload;
    },
  },
});

export const { listProduct, setListProduct, activeProduct, setActiveProduct } =
  productAdminSlice.actions;

export default productAdminSlice.reducer;
