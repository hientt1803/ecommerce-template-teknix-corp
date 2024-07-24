import { createSlice } from "@reduxjs/toolkit";

export interface FilterShow {
  isShow: boolean;
  loading: boolean;
}

const initialState: FilterShow = {
  isShow: false,
  loading: false,
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
      const { status } = action.payload;
      state.loading = status;
    },
  },
});

export const { showFilter, hideFilter, getLoading, setLoading } =
  globalSlice.actions;
export default globalSlice.reducer;
