import RatingStar from "@/components/rating/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export const CommentItem = ({ review }: { review: IReview }) => {
  return (
    <div className="flex flex-col flex-wrap gap-4 p-3">
      <div className="flex justify-start items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="font-bold text-lg">{review.reviewerName}</div>
          <div className="text-muted-foreground text-sm">
            {format(new Date(review.date), "yyyy-MM-dd")}
          </div>
        </div>
      </div>
      <div>
        <div>
          <RatingStar rating={Math.round(review.rating)} readOnly />
        </div>
        <p className="leading-7 line-clamp-3 text-neutral-700">
          {review.comment}
        </p>
      </div>
      <hr />
    </div>
  );
};
