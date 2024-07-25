import {
  combineReducers,
  configureStore,
  PreloadedStateShapeFromReducersMapObject,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

const rootReducer = combineReducers({
  // [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const setupStore = (
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>
) => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
    //   getDefaultMiddleware().concat(pokemonApi.middleware),
    // ,preloadedState
  });
};
