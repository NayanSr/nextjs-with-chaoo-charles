import React from "react";
import Container from "@/app/components/Container";
import ProductDetailsChildren from "./ProductDetails";
import { ListRating } from "./ListRating";
import { products } from "../../../../utils/products";

interface IParams {
  productId?: string;
}

export default function ProductDetailsParent({ params }: { params: IParams }) {
  // console.log("product id :", params);

  const product = products.find((item) => item.id === params.productId);

  return (
    <div className="p-4">
      <Container>
        {/*//? Product description part */}
        <ProductDetailsChildren product={product} />
        <div className="flex flex-col mt-20 gap-4">
          {/*//? Product reviews part */}
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
}
