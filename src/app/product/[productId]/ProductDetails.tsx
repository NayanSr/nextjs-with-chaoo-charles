"use client";

import { Button } from "@/app/components/Button";
import { ProductImage } from "@/app/components/products/ProductImage";
import { SetColor } from "@/app/components/products/SetColor";
import { SetQuantity } from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsChildrenProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImageType;
  quantity: number;
  price: number;
};

export type SelectedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[80%] border border-green-800 my-2" />;
};

// !main function
const ProductDetailsChildren: React.FC<ProductDetailsChildrenProps> = ({
  product,
}) => {
  const { cartTotalQty } = useCart();

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  //!...?
  const handleColorSelect = useCallback(
    (value: SelectedImageType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  console.log(cartTotalQty);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity > 98) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
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
        <SetColor
          images={product.images}
          cartProduct={cartProduct}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          // cartCounter={false}
          cartProduct={cartProduct}
          handleQtyDecrease={handleQtyDecrease}
          handleQtyIncrease={handleQtyIncrease}
        />
        <Horizontal />
        <div className="max-w-[300px]">
          <Button label={"Add To Cart"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsChildren;
