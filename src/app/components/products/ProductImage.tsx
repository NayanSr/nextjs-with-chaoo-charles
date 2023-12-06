import {
  CartProductType,
  SelectedImageType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";
import React from "react";

// import { CartProductType } from '@/app/product/[productId]/ProductDetails'

interface ProductImgeprops {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImageType) => void;
}

export const ProductImage: React.FC<ProductImgeprops> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div className=" grid grid-cols-6 gap-2 max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className=" flex flex-col justify-center items-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] ">
        {product.images.map((image: SelectedImageType) => {
          return (
            <div
              key={image.colorCode}
              onClick={() => handleColorSelect(image)}
              className={`relative w-[80%] aspect-square rounded border-teal-500 ${
                cartProduct.selectedImg.color === image.color
                  ? "border-[2px]"
                  : "border-none"
              }`}
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};
