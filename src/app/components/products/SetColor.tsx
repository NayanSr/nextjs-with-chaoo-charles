"use client";

import {
  CartProductType,
  SelectedImageType,
} from "@/app/product/[productId]/ProductDetails";

interface SetColorProps {
  images: SelectedImageType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImageType) => void;
}

export const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct: cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4">
        <span className="font-semibold">COLOR: </span>
        <div className="flex gap-2">
          {images.map((image) => {
            return (
              <div
                key={image.color}
                onClick={() => handleColorSelect(image)}
                className={`h-7 w-7 rounded-full border-teal-500 flex justify-center items-center 
             ${
               cartProduct.selectedImg.color === image.color
                 ? "border-[3px]"
                 : "border-none"
             }`}
              >
                <div
                  style={{ background: image.colorCode }}
                  className="h-5 w-5 rounded-full border-[1.5px] border-slate-700 cursor-pointer "
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
