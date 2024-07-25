import dynamic from "next/dynamic";

import { PageBreadcrumb } from "@/components/breadcumb";
import { CartFooter } from "./components/cart-footer";
import { CartHeader } from "./components/cart-header";

const CartBody = dynamic(
  () => import("./components/cart-body").then((mod) => mod.CartBody),
  {
    ssr: false,
  }
);

export const ShoppingCartContainer = () => {
  return (
    <div className="container min-h-[70vh]">
      {/* Breadcumb page */}
      <PageBreadcrumb page="cart" />

      {/* header cart */}
      <CartHeader />

      {/* Cart Body */}
      <CartBody />

      {/* Cart Footer */}
      <CartFooter />
    </div>
  );
};
