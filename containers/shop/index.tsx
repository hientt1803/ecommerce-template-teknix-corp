import { PageBreadcrumb } from "@/components/breadcumb";
import { ListProduct } from "./components/list-product";

export const ShopContainer = () => {
  return (
    <div className="container">
      <PageBreadcrumb page="Shop" />
      <ListProduct />
    </div>
  );
};
