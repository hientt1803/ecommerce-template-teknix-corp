import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import filterReducer from "./feature/global";
import productReducer from "./feature/products-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shopFilter: filterReducer,
    productListSlice: productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
