import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// client
import cartReducer from "./feature/client/cart-slice";
import filterReducer from "./feature/client/global-slice";
import productReducer from "./feature/client/products-slice";
import authReducer from "./feature/client/auth-slice";
import userReducer from "./feature/client/user-slice";

// admin
import productAdminSlice from "./feature/admin/products-slice";
import globalAdminSlice from "./feature/admin/global-slice";
import orderAdminSlice from "./feature/admin/order-slice";
import CustomerAdminSlice from "./feature/admin/customer-slice";

export const store = configureStore({
  reducer: {
    // client store
    globalState: filterReducer,
    productList: productReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,

    // admin store
    productAdmin: productAdminSlice,
    globalAdmin: globalAdminSlice,
    orderAdmin: orderAdminSlice,
    customerAdmin: CustomerAdminSlice,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
