import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "./slice";
import filterReducer from "./feature/global-slice";
import productReducer from "./feature/products-slice";
import cartReducer from "./feature/cart-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    globalState: filterReducer,
    productList: productReducer,
    cart: cartReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
