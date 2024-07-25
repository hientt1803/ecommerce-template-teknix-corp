"use client"

import { RootState } from "@/stores/store";
import React from "react";
import { useSelector } from "react-redux";
import LoadingGlobal from "../loading/global";

export const GlobalLoading = () => {
  const loadingState = useSelector(
    (state: RootState) => state.globalState.loading
  );
  return <LoadingGlobal open={loadingState} />;
};
