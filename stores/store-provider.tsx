"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // const apiStore = setupStore();

  return (
    <Provider store={store}>
      {/* <Provider store={apiStore}> */}
        {children}
        {/* </Provider> */}
    </Provider>
  );
};
