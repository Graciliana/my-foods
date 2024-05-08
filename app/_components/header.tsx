import Image from "next/image";
import * as React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between max-w-full max-h-32 min-h-5 px-5 drop-shadow-xl pt-6">
      <Image src="/Logo.svg" alt="FSW Foods" height={30} width={100} />
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>
    </div>
  );
};
/* desktop = w 1440px <h-128></h-128>
    mobile = w 390 h- 20

*/
