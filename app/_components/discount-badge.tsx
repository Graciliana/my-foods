import { Product } from "@prisma/client";
import { ArrowDown } from "lucide-react";

interface DiscountBadgeProps {
  product: Pick<Product, "discountPercentage">;
}

export const DiscountBadge = ({ product }: DiscountBadgeProps) => {
  return (
    <div className="flex items-center  w-10 h-6 m-1 rounded-full bg-[#ea1d2c] text-center text-xs  font-bold text-white">
      <ArrowDown size={12} className="font-bold" />
      <span className="font-bold">{product.discountPercentage}%</span>
    </div>
  );
};
