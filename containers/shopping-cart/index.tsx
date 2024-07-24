import { PageBreadcrumb } from "@/components/breadcumb";
import { CartFooter } from "./components/cart-footer";
import { CartHeader } from "./components/cart-header";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingGlobal from "@/components/loading/global";

const CartBody = dynamic(
  () => import("./components/cart-body").then((mod) => mod.CartBody),
  {
    ssr: false,
  }
);

export const ShoppingCartContainer = () => {
  return (
    <div className="container min-h-[70vh]">
      <Suspense fallback={<LoadingGlobal />}>
        <PageBreadcrumb page="cart" />

        {/* header cart */}
        <CartHeader />

        {/* Cart Body */}
        <CartBody />

        {/* Cart Footer */}
        <CartFooter />
      </Suspense>
    </div>
  );
};
