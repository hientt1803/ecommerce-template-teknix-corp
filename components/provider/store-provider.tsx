"use client";

import { wrapper } from "@/stores/store";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  const { store } = wrapper.useWrappedStore(rest);
  return <Provider store={store}>{children}</Provider>;
}
