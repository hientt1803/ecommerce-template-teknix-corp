import React from "react";

const LoadingGlobal = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 min-w-[100vw] min-h-screen flex justify-center items-center bg-neutral-800 opacity-10">
      <div className="transition-all animate-spin" />
    </div>
  );
};

export default LoadingGlobal;
