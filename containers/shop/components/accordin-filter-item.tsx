"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IShopFilter {
  title: string;
  data?: string[];
  children?: React.ReactNode;
}

export const AccordinFilterItem = (props: IShopFilter) => {
  // hook
  const router = useRouter();

  const [isShow, setIsShow] = useState(false);
  const [tempData, setTempData] = useState<string[]>(
    props?.data ? props?.data : []
  );
  const [dataFilter, setDataFilter] = useState<string[]>([]);

  useEffect(() => {
    if (isShow) {
      setDataFilter(tempData);
    }

    setTempData(props?.data ? props?.data : []);
    if (props?.data !== undefined) {
      if (props?.data?.length !== 0 && !isShow) {
        const prevFilterData = props?.data?.slice(0, 5);
        setDataFilter(prevFilterData);
        setIsShow(false);
      }
    }
  }, [isShow]);

  const handlePushParamsToPathname = (title: string, item: string) => {
    router.push(`shop/?sort-by-${title.toLowerCase()}=${item}`);
    localStorage.setItem(`${title.toLowerCase()}`, item);
  };

  return (
    <Accordion type="single" defaultValue="acordin-item-1" collapsible>
      <AccordionItem value={`acordin-item-1`}>
        <AccordionTrigger className="uppercase">{props.title}</AccordionTrigger>
        <AccordionContent>
          <div>
            {dataFilter?.map((item, index) => (
              <div className="flex items-center gap-3 mt-3" key={item}>
                <Checkbox
                  id={`${item}-${index}`}
                  onCheckedChange={() =>
                    handlePushParamsToPathname(props.title, item)
                  }
                />
                <label
                  htmlFor={`${item}-${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item} - (32)
                </label>
              </div>
            ))}
          </div>
          <div>{props.children}</div>

          <div className="h-6" />
          <div
            className="underline text-sm mt-8 pt-8 cursor-pointer"
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? "Collapse" : "Show more"}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
