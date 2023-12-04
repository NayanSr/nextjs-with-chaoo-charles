import React from "react";
import Container from "@/app/components/Container";
import ProductDetailsChildren from "./ProductDetails";
import { product } from "../../../../utils/product";

interface IParams {
  productId?: string;
}

export default function ProductDetailsParent({ params }: { params: IParams }) {
  console.log("product id :", params);
  return (
    <div className="p-4">
      <Container>
        <ProductDetailsChildren product={product} />
      </Container>
    </div>
  );
}
