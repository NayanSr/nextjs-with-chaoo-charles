import { CartProductType } from "@/app/product/[productId]/ProductDetails";
// import { dividerClasses } from "@mui/material";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyle = "border-[2px] border-slate-500 px-2 rounded";

//! main function
export const SetQuantity: React.FC<SetQtyProps> = ({
  cartCounter,
  cartProduct,
  handleQtyDecrease,
  handleQtyIncrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY: </div>}
      <div className="flex gap-4 items-center justify-center text-base">
        <button className={btnStyle} onClick={handleQtyDecrease}>
          ▽
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyle} onClick={handleQtyIncrease}>
          △
        </button>
      </div>
    </div>
  );
};
