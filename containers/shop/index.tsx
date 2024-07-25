import { PageBreadcrumb } from "@/components/breadcumb";
import { ListProduct } from "./components/list-product";
import { Suspense } from "react";

export const ShopContainer = () => {
  return (
    <div className="container">
      <PageBreadcrumb page="Shop" />
      <Suspense>
        <ListProduct />
      </Suspense>
    </div>
  );
};
