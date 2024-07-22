"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

interface IShopFilter {
  title: string;
  data: string[];
  children?: React.ReactNode;
}

export const AccordinFilterItem = (props: IShopFilter) => {
  const [isShow, setIsShow] = useState(false);
  const [tempData, setTempData] = useState<string[]>(props.data);
  const [dataFilter, setDataFilter] = useState<string[]>([]);

  useEffect(() => {
    if (isShow) {
      setDataFilter(tempData);
    }

    setTempData(props.data);
    if (props?.data?.length > 5 && !isShow) {
      const prevFilterData = props?.data?.splice(0, 5);
      setDataFilter(prevFilterData);
      setIsShow(false);
    }
  }, [isShow]);

  console.log("ISHOW", isShow);
  console.log("TEMPDATA", tempData);
  console.log("DATAFILTER", dataFilter);

  return (
    <Accordion type="single" defaultValue="acordin-item-1">
      <AccordionItem value={`acordin-item-1`}>
        <AccordionTrigger className="">{props.title}</AccordionTrigger>
        <AccordionContent>
          <div>
            {dataFilter?.map((item, index) => (
              <div className="flex items-center gap-3 mt-3" key={item}>
                <Checkbox id={`${item}-${index}`} />
                <label
                  htmlFor={`${item}-${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item} - (32)
                </label>
              </div>
            ))}
          </div>
        </AccordionContent>
        <span
          className="underline text-sm mt-8 cursor-pointer"
          onClick={() => setIsShow(true)}
        >
          Show more
        </span>
      </AccordionItem>
    </Accordion>
  );
};
