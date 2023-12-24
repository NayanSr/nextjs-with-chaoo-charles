import Link from "next/link";
import { CartProductType } from "../product/[productId]/ProductDetails";
import { truncateText } from "../../../utils/truncateText";
import { formatePrice } from "../../../utils/formatePrice";
import Image from "next/image";
import { SetQuantity } from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const {
    handleRemoveProductFromCart,
    handleQuantityIncrease,
    handleQuantityDecrease,
  } = useCart();
  return (
    <div className="grid grid-cols-5 gap-5 text-xs md:text-sm  border-t-[2px] border-orange-400 py-4 items-center">
      <div className="flex col-span-2 justify-self-start gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[75px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>
            {truncateText(item.name, 20)}
          </Link>
          <div className="bg-lime-200 rounded-sm text-blue-900 w-fit px-8 py-0">
            {item.selectedImg.color}
          </div>
          <div className="max-w-[75px]">
            <button
              className="text-slate-700 underline"
              onClick={() => handleRemoveProductFromCart(item)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatePrice(item.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter
          cartProduct={item}
          handleQtyIncrease={() => {
            handleQuantityIncrease(item);
          }}
          handleQtyDecrease={() => {
            handleQuantityDecrease(item);
          }}
        />
      </div>
      <div className="justify-self-end">
        {formatePrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
