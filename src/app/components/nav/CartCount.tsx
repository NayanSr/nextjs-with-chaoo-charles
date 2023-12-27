"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

export default function CartCount() {
  const router = useRouter();
  const { cartTotalQty } = useCart();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl  text-red-500">
        <CiShoppingCart />
      </div>
      <span className="absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-yellow-300 text-blue-600 flex justify-center items-center text-sm">
        {cartTotalQty}
      </span>
    </div>
  );
}
