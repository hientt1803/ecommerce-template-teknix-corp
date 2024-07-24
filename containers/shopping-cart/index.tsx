import { CartFooter } from "./components/cart-footer";
import { CartHeader } from "./components/cart-header";
import dynamic from "next/dynamic";

const CartBody = dynamic(
  () => import("./components/cart-body").then((mod) => mod.CartBody),
  {
    ssr: false,
  }
);

export const ShoppingCartContainer = () => {
  return (
    <div className="container">
      {/* header cart */}
      <CartHeader />

      {/* Cart Body */}
      <CartBody />

      {/* Cart Footer */}
      <CartFooter />
    </div>
  );
};
