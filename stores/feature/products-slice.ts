import { PRODUCT_SAMPLE_DATA } from "@/lib/data";
import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductInitial {
  data: IProduct[];
  searchedProductList: IProduct[];
}

const fetchData = (): IProduct[] => {
  return PRODUCT_SAMPLE_DATA;
};

const initialState: ProductInitial = {
  data: fetchData(),
  searchedProductList: [],
};

export const productListSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    listProduct: (state) => {
      state.data = fetchData();
    },
    filteredListProduct: (state, action) => {
      state.searchedProductList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { listProduct, filteredListProduct } = productListSlice.actions;

export default productListSlice.reducer;
