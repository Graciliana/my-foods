import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="flex gap-2 drop-shadow-xl max-w-full">
      <Input
        placeholder="Buscar restaurantes"
        className="border-none bg-[#f4f4f5]"
      />
      <Button size="icon" className="bg-[#ea1d2c]">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};
