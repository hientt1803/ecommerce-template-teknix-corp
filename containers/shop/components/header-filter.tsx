import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
// import { hideFilter, showFilter } from "@/stores/feature/global";
// import { RootState } from "@/stores/store";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import { MobileShopFileter } from "./mobile-shop-filter";
// import { useDispatch, useSelector } from "react-redux";

export const ShopHeaderFilter = () => {
  //   const showFilterState = useSelector(
  //     (state: RootState) => state.shopFilter.isShow
  //   );
  //   const dispatch = useDispatch();

  //   const handleShowFilter = () => {
  //     if (showFilterState == true) {
  //       dispatch(hideFilter());
  //     } else dispatch(showFilter());
  //   };

  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        {/* <Button variant={"outline"} onClick={handleShowFilter}>
          Show Filter
        </Button> */}
        <div className="block md:hidden">
          <MobileShopFileter />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"}>Sort by</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60">
            <DropdownMenuGroup>
              <DropdownMenuItem>Best selling</DropdownMenuItem>
              <DropdownMenuItem>Aphabetically, A-Z</DropdownMenuItem>
              <DropdownMenuItem>Aphabetically, Z-A</DropdownMenuItem>
              <DropdownMenuItem>Price, low to high</DropdownMenuItem>
              <DropdownMenuItem>Price, high to low</DropdownMenuItem>
              <DropdownMenuItem>Date, old to new</DropdownMenuItem>
              <DropdownMenuItem>Date, new to old</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <SearchIcon className="md:hidden w-10 h-10" />
        <div className="hidden md:flex gap-3 w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search something...." />
          <Button type="submit">
            <ListFilterIcon /> 
          </Button>
        </div>
      </div>
    </div>
  );
};
