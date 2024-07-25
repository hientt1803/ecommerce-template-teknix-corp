import "@smastrom/react-rating/style.css";
import { Rating as ReactRating } from "@smastrom/react-rating";

interface IRatingStar {
  maxWidth?: number;
  rating: number;
  setRating?: any;
  disable?: boolean;
  readOnly?: boolean;
}

const RatingStar = ({
  maxWidth = 100,
  rating,
  setRating,
  disable = false,
  readOnly = false,
}: IRatingStar) => {
  return (
    <ReactRating
      style={{ maxWidth: maxWidth }}
      value={rating}
      onChange={setRating}
      isDisabled={disable}
      readOnly={readOnly}
    />
  );
};

export default RatingStar;
