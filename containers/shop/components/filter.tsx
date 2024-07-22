import { Button } from "@/components/ui/button";
import { ListFilter, SearchIcon } from "lucide-react";

export const ShopFilter = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5">
        <span className="text-underline-animation">Women</span>
        <span className="text-underline-animation">Women</span>
        <span className="text-underline-animation">Women</span>
        <span className="text-underline-animation">Women</span>
        <span className="text-underline-animation">Women</span>
        <span className="text-underline-animation">Women</span>
      </div>
      <div className="flex gap-5 flex-end items-center">
        <Button variant={"outline"} className="flex gap-2">
          <ListFilter className="w-8 h-8" />
          Filter
        </Button>
        <Button variant={"outline"} className="flex gap-2">
          <SearchIcon className="w-8 h-8" />
          Search
        </Button>
      </div>
    </div>
  );
};
