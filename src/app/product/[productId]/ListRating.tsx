"use client";

import { Heading } from "@/app/components/Heading";
import { Avater } from "@/app/components/products/Avater";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps {
  product: any;
}
export const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-4 ">
        {product?.reviews?.map((review: any) => {
          return (
            <div className="mt-4" key={review.id}>
              <div className="flex gap-4">
                <Avater src={review?.user.image} />
                <div className="font-bold">{review?.user.name}</div>
                <div className="font-light">
                  {moment(review.createdDate).fromNow()}
                </div>
              </div>
              <div>
                <Rating value={review.rating} readOnly />
                <div>{review.comment}</div>
                <hr className="w-[50%]  border-[3px] border-slate-500 rounded-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
