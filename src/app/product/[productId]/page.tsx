import React from "react";
import Container from "@/app/components/Container";
import ProductDetailsChildren from "./ProductDetails";
import { product } from "../../../../utils/product";
import { ListRating } from "./ListRating";

interface IParams {
  productId?: string;
}

export default function ProductDetailsParent({ params }: { params: IParams }) {
  // console.log("product id :", params);
  return (
    <div className="p-4">
      <Container>
        <ProductDetailsChildren product={product} />
        {/*//? Product description part */}
        <div className="flex flex-col mt-20 gap-4">
          {/*//? Product reviews part */}
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
}
