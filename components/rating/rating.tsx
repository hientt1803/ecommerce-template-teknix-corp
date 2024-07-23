import "@smastrom/react-rating/style.css";
import { Rating as ReactRating } from "@smastrom/react-rating";

interface IRatingStar {
  maxWidth?: number;
  rating: number;
  setRating?: any;
  disable?: boolean;
}

const RatingStar = ({
  maxWidth = 100,
  rating,
  setRating,
  disable = false,
}: IRatingStar) => {
  return (
    <ReactRating
      style={{ maxWidth: maxWidth }}
      value={rating}
      onChange={setRating}
      isDisabled={disable}
    />
  );
};

export default RatingStar;
