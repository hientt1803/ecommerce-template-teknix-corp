import { Suspense } from "react";
import { ListProduct } from "./components/list-product";

function SearchBarFallback() {
  return <>placeholder</>;
}

export const ShopContainer = () => {
  return (
    <div className="container">
      <Suspense fallback={<SearchBarFallback />}>
        <ListProduct />
      </Suspense>
    </div>
  );
};
