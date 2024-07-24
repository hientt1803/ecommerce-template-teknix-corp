import { createSlice } from "@reduxjs/toolkit";

export interface FilterShow {
  isShow: boolean;
}

const initialState: FilterShow = {
  isShow: false,
};

export const shopFilterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    showFilter: (state) => {
      state.isShow = true;
    },
    hideFilter: (state) => {
      state.isShow = false;
    },
  },
});

export const { showFilter, hideFilter } = shopFilterSlice.actions;
export default shopFilterSlice.reducer;
