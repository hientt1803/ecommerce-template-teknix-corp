import { IUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductInitial {
  currentUser: IUser | null;
}

const initialState: ProductInitial = {
  currentUser: null,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    currentUser: (state) => {
      state.currentUser;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { currentUser, setUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
