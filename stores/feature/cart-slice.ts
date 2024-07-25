import { ICart } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CartInitial {
  data: ICart[];
}

let cartDataFromLocal: ICart[] = [];

const initialState: CartInitial = {
  data: cartDataFromLocal,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      if (!state.data.some((item) => item.id === action.payload.id)) {
        state.data.push(action.payload);
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, cartQuantity } = action.payload;
      const existingItem = state.data.find((item) => item.id === id);
      if (existingItem) {
        existingItem.cartQuantity = cartQuantity;
      }

      localStorage.setItem("cartDetail", JSON.stringify(state.data));
    },
    deleteCart: (state, action) => {
      const { id } = action.payload;
      state.data = state.data.filter((cart) => cart.id !== id);

      localStorage.setItem("cartDetail", JSON.stringify(state.data));
    },
    clearCart: (state) => {
      state.data = [];
    },
  },
});

export const { addItemToCart, updateCartQuantity, deleteCart, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
