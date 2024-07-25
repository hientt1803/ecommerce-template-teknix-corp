"use client";

import React from "react";
import { Spinner } from "../ui/spinner";

interface ILoading {
  open?: boolean;
}

const LoadingGlobal = (props: ILoading) => {
  const { open = false } = props;

  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 min-w-[100vw] z min-h-screen flex justify-center items-center bg-neutral-800 opacity-90 z-50">
          <Spinner size="large" className="text-white" />
        </div>
      )}
    </>
  );
};

export default LoadingGlobal;
