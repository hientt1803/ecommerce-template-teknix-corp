import { createSlice } from "@reduxjs/toolkit";

export interface FilterShow {
  showDialogUpdate: boolean;
  showDialogDelete: boolean;
}

const initialState: FilterShow = {
  showDialogUpdate: false,
  showDialogDelete: false,
};

export const GlobalAdminSlice = createSlice({
  name: "globalAdminSlice",
  initialState,
  reducers: {
    showDialogDelete: (state) => {
      state.showDialogDelete;
    },
    setShowDialogDelete: (state, action) => {
      state.showDialogDelete = action.payload;
    },
    showDialogUpdate: (state) => {
      state.showDialogUpdate;
    },
    setShowDialogUpdate: (state, action) => {
      state.showDialogUpdate = action.payload;
    },
  },
});

export const {
  showDialogDelete,
  setShowDialogDelete,
  showDialogUpdate,
  setShowDialogUpdate,
} = GlobalAdminSlice.actions;

export default GlobalAdminSlice.reducer;
