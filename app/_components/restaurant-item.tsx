import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-[266px] max-w-[266] ">
      <div className="w-full h-[136px] relative">
        <Image
          src={restaurant.imageUrl}
          fill
          sizes="100%"
          className="rounded-lg object-cover shadow-md"
          alt={restaurant.name}
        />

        <div className="absolute left-2 top-2 m-2 flex items-center rounded-full bg-white py-2 pt-1 text-center text-sm  font-bold">
          <StarIcon
            size={12}
            className="fill-yellow-400 text-yellow-400 m-1 "
          />
          <span className="font-semibold text-xs me-1">5.0</span>
        </div>
        <Button
          size="icon"
          className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700 "
        >
          <HeartIcon size={16} className="fill-white" />
        </Button>
      </div>
      <div className="pt-2">
        <h3 className="text-sm truncate text-left font-semibold text-[#323232]">
          {restaurant.name}
        </h3>
        {/* INFORMAÇÕES DA ENTREGA */}
        <div className="flex gap-3">
          {/* CUSTO DE ENTREGA */}
          <div className="flex items-center gap-1">
            <BikeIcon className="text-[#ea1d2c]" size={14} />
            <span className="text-xs text-#7e8392">
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          {/* TEMPO DE ENTREGA */}
          <div className="flex items-center gap-1">
            <TimerIcon className="text-[#ea1d2c]" size={14} />
            <span className="text-xs text-#7e8392">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
