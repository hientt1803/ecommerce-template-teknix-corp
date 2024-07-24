import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import filterReducer from "./feature/global";
import productReducer from "./feature/products-slice";
import cartReducer from "./feature/cart-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shopFilter: filterReducer,
    productListSlice: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
