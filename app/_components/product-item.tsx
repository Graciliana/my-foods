import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="min-h-[219px] min-w-[150px] space-y-2">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage && (
          <div className="absolute left-2 top-2 m-2 flex items-center rounded-full bg-[#ea1d2c] py-2 pt-1 text-center text-xs  font-bold text-white">
            <ArrowDown size={12} />
            <span className="font-bold">{product.discountPercentage}%</span>
          </div>
        )}
      </div>
      <div>
        <h2 className="truncate text-left text-sm font-normal">
          {product.name}
        </h2>
      </div>
      <div className="flex gap-1">
        <h3 className="  text-base font-bold ">
          {formatCurrency(calculateProductTotalPrice(product))}
        </h3>
        {product.discountPercentage > 0 && (
          <span className="text-sx block text-muted-foreground line-through">
            {formatCurrency(Number(product.price))}
          </span>
        )}
      </div>
      <div>
        <span className="truncate text-left text-sm font-normal">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
