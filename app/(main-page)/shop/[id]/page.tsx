import { ShopDetailContainer } from "@/containers/shop-detail";

interface ProductIdPageProps {
  params: {
    id: number;
  };
}

const ShopDetailPage = ({ params }: ProductIdPageProps) => {
  return <ShopDetailContainer />;
};

export default ShopDetailPage;
