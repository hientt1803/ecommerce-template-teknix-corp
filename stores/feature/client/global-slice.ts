import { createSlice } from "@reduxjs/toolkit";

export interface FilterShow {
  isShow: boolean;
  loading: boolean;
  showDialog: boolean;
}

const initialState: FilterShow = {
  isShow: false,
  loading: false,
  showDialog: false,
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    showFilter: (state) => {
      state.isShow = true;
    },
    hideFilter: (state) => {
      state.isShow = false;
    },
    getLoading: (state) => {
      state.loading;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    showDialog: (state) => {
      state.loading;
    },
    setShowDialog: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  showFilter,
  hideFilter,
  getLoading,
  setLoading,
  showDialog,
  setShowDialog,
} = globalSlice.actions;
export default globalSlice.reducer;
