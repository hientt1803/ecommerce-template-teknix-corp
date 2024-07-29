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

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    listProduct: (state) => {
      state.data;
    },
    setListProduct: (state, action) => {
      state.data = action.payload;
    },
    filteredListProduct: (state, action) => {
      state.searchedProductList = action.payload;
    },
    activeProduct: (state) => {
      state.activeProduct;
    },
    setActiveProduct: (state, action) => {
      state.activeProduct = action.payload;
    },
  },
});

export const {
  listProduct,
  filteredListProduct,
  setListProduct,
  activeProduct,
  setActiveProduct,
} = productListSlice.actions;

export default productListSlice.reducer;
