"use client";

// import { SetColor } from "@/app/components/products/SetColor";
import { Rating } from "@mui/material";
import { useState } from "react";

interface ProductDetailsChildrenProps {
  product: any;
}

// export type CardProductType = {
//   id: string;
//   name: string;
//   description: string;
//   category: string;
//   brand: string;
//   selectedImg: SelectedImageType;
//   quantity: number;
//   price: number;
// };

// export type SelectedImageType = {
//   color: string;
//   colorCode: string;
//   image: string;
// };

const Horizontal = () => {
  return <hr className="w-[80%] border border-green-800 my-2" />;
};

// !main function
const ProductDetailsChildren: React.FC<ProductDetailsChildrenProps> = ({
  product,
}) => {
  // const [cardProduct, setCardProduct] = useState<CardProductType>({
  //   id: product.id,
  //   name: product.name,
  //   description: product.description,
  //   category: product.category,
  //   brand: product.brand,
  //   selectedImg: { ...product.images[0] },
  //   quantity: 1,
  //   price: product.price,
  // });

  // const handleColorSelect=()=>{}

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>Image</div>
      <div>
        <h2 className="text-2xl font-bold text-neutral-800">{product.name}</h2>
        <div className="flex items-center gap-4">
          <Rating value={productRating} readOnly />
          <p>{product.reviews.length} reviews</p>
        </div>
        <Horizontal />
        <div>
          <p className="text-justify">{product.description}</p>
        </div>
        <Horizontal />
        <div>
          <span className="font-semibold">Catagory: {product.category}</span>
        </div>
        <div>
          <span className="font-semibold">Brand: {product.brand}</span>
        </div>
        <div className={product.inStock ? "text-teal-800" : "text-orange-400"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <Horizontal />
        <div>color</div>
        {/* <SetColor images={product.images} cardProduct={cardProduct} handleColorSelect={handleColorSelect} /> */}
        <Horizontal />
        <div>Quantity:</div>
        <Horizontal />
        <div>Add To Cart</div>
      </div>
    </div>
  );
};

export default ProductDetailsChildren;
