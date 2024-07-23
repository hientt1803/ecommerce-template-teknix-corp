import ShopProductCaroucel from "./components/caroucel-image";
import { LeftSide } from "./components/comments/left-side";
import { ListComment } from "./components/comments/list-comment";
import { ProductInformation } from "./components/product-information";
import { RelativeProduct } from "./components/relative-product";

export const ShopDetailContainer = () => {
  return (
    <div className="container">
      <div className="inline-grid relative">
        {/* Detail grid */}
        <div className="detail-grid-layout">
          <div className="detail-grid-col-1">
            <ShopProductCaroucel />
          </div>
          <div className="detail-grid-col-2 sticky top-0">
            <ProductInformation />
          </div>
        </div>

        {/* Comment section */}
        <div className="comments grid grid-flow-col-1 md:grid-cols-12 justify-center lg:justify-start gap-5 relative mt-10">
          <div className="col-span-1 md:col-span-6 lg:col-span-4">
            <LeftSide />
          </div>
          <div className="col-span-1 md:col-span-6 lg:col-span-8">
            <ListComment />
          </div>
        </div>

        {/* Relative product */}
        <RelativeProduct />
      </div>
    </div>
  );
};
