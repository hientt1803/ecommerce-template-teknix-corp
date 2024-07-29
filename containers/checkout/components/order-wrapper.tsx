import { PageBreadcrumb } from "@/components/breadcumb";
import { SelectPaymentMethod } from "./select-payment-method";
import dynamic from "next/dynamic";

const ListProduct = dynamic(() =>
  import("./list-product").then((mod) => mod.ListProduct)
);

export const CheckoutWrapeer = () => {
  return (
    <div className="container">
      <PageBreadcrumb page="Checkout" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
        <div className="grid">
          <SelectPaymentMethod />
        </div>
        <div className="grid">
          <ListProduct />
        </div>
      </div>
    </div>
  );
};
