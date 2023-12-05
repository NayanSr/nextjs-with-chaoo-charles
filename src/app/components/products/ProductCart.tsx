"use client";

import Image from "next/image";
import { truncateText } from "../../../../utils/truncateText";
import { formatePrice } from "../../../../utils/formatePrice";
import Rating from "@mui/material/Rating";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

//! main file
const ProductCart: React.FC<ProductCardProps> = ({ data }) => {
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="my-2 col-span-1 cursor-pointer border-4  border-orange-400 bg-neutral-300 rounded-md p-2 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-start w-full gap-1">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className=" w-full h-full object-contain"
          />
        </div>
        <div>{truncateText(data.name, 20)}</div>
        <div>
          <Rating name="half-rating-read" value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold"> Price: {formatePrice(data.price)}</div>
        {/* //* <div className="font-semibold">Price: ${data.price}</div> */}
      </div>
    </div>
  );
};
export default ProductCart;
