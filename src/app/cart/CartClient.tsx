import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import ItemContent from "./ItemContent";

export default function CartClient() {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">No Product added yet</div>
        <div>
          <Link
            href={"/"}
            className="flex items-center gap-1 text-slate-600 mt-2"
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Shoping Cart" center />
      <div className="grid grid-cols-5 gap-4 text-sm pb-2 items-center mt-3">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>

      <div>
        {/* {cartproduct && cartProducts.map((prod) => { */}
        {cartProducts?.map((prod) => {
          return <ItemContent key={prod.id} item={prod} />;
        })}
      </div>

      <div className="flex justify-between gap-4 border-t-[2.5px] border-orange-900 mt-2">
        <div className="max-w-[150px] mt-4">
          <Button label="Clear Cart" outline small onClick={() => {}} />
        </div>
        <div className="flex flex-col gap-2 items-start text-sm">
          <div className="flex justify-between mt-2 w-full text-base font-semibold ">
            <span>Subtotal</span>
            <span>$1,000</span>
          </div>

          <p>Taxes and Shipping will calculated when checkout</p>
          <Button label="Checkout" onClick={() => {}} />
          <Link href={"/"} className="flex items-center gap-2 text-neutral-700">
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
