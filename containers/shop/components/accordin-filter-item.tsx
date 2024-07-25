"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

interface IShopFilter {
  title: string;
  filterData?: string[];
  searchPrice?: boolean;
}

export const AccordinFilterItem = (props: IShopFilter) => {
  const { title, filterData, searchPrice = false } = props;

  // hook
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // state
  const [isShow, setIsShow] = useState<boolean>(false);
  const [tempData, setTempData] = useState<string[]>(
    filterData ? filterData : []
  );
  const [dataFilter, setDataFilter] = useState<string[]>([]);
  const [paramsCacheValue, setParamsCacheValue] = useState<string>("");
  const [priceFrom, setPriceFrom] = useState<number>(0);
  const [priceTo, setPriceTo] = useState<number>(0);

  useEffect(() => {
    if (isShow) {
      setDataFilter(tempData);
    }

    setTempData(filterData ? filterData : []);
    if (filterData !== undefined) {
      if (filterData?.length !== 0 && !isShow) {
        const prevfilterData = filterData?.slice(0, 5);
        setDataFilter(prevfilterData);
        setIsShow(false);
      }
    }
  }, [isShow]);

  /* The `useEffect` hook you provided is responsible for updating the `paramsCacheValue` state based
  on changes to the `pathname` and `searchParams` variables. Here's a breakdown of what it does: */
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    setParamsCacheValue(params.toString());
  }, [pathname, searchParams]);

  /* The `createQueryString` function is responsible for creating and updating query strings based on
  the provided parameters. Here's a breakdown of what the function does: */
  const createQueryString = useCallback(
    (name: string, value: string, checked: boolean | string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (checked) {
        if (params.toString().includes(name)) {
          const prevParamsValue = params.get(name);

          if (prevParamsValue?.includes(value)) {
            handlePushParamsToLocalStorage(`${name}`, params.toString());
            return params.toString();
          }

          params.set(name, `${prevParamsValue}&${value}`);
          handlePushParamsToLocalStorage(`${name}`, params.toString());
          return params.toString();
        }
      } else {
        const prevParamsValue = params.get(name);
        const tempValue = prevParamsValue?.includes(`&${value}`);

        const newParams = prevParamsValue?.replace(
          tempValue ? `&${value}` : value,
          ""
        );

        params.set(name, `${newParams}`);
        handlePushParamsToLocalStorage(`${name}`, params.toString());
        return params.toString();
      }

      params.set(name, value);
      handlePushParamsToLocalStorage(`${name}`, params.toString());
      return params.toString();
    },
    [searchParams]
  );

  /**
   * The function `handlePushParamsToLocalStorage` stores a key-value pair in the browser's local
   * storage.
   * @param {string} name - The `name` parameter is a string that represents the key under which the
   * `value` will be stored in the browser's local storage.
   * @param {string} value - The `value` parameter is a string that you want to store in the browser's
   * local storage under the specified `name`.
   */
  const handlePushParamsToLocalStorage = (name: string, value: string) => {
    localStorage.setItem(`${name}`, value);

    const params = new URLSearchParams(searchParams.toString());
    localStorage.setItem("searchOptions", params.toString());
  };

  /**
   * The function `handlePushParamsToPathname` pushes parameters to the current URL pathname in a
   * TypeScript React application.
   * @param {string} name - The `name` parameter is a string that represents the name of a parameter to
   * be included in the URL query string.
   * @param {string} value - The `value` parameter is a string that represents the value associated
   * with the `name` parameter in the URL query string.
   * @param {boolean | string} checked - The `checked` parameter in the `handlePushParamsToPathname`
   * function is used to determine whether a checkbox or toggle switch is checked or not. It can be a
   * boolean value (`true` or `false`) or a string value (`'true'` or `'false'`). This parameter
   */
  const handlePushParamsToPathname = (
    name: string,
    value: string,
    checked: boolean | string
  ) => {
    router.push(
      `${pathname}?${createQueryString(
        name.toLowerCase(),
        value.toLowerCase(),
        checked
      )}`
    );
  };

  /**
   * The function `handlePushParamsPriceToPathname` updates the URL parameters for lowPrice and
   * maxPrice with new values and pushes the updated URL to the router.
   */
  const handlePushParamsPriceToPathname = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lowPrice", priceFrom.toString());
    params.set("maxPrice", priceTo.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  /**
   * The function `handleKeyboardEnterPress` triggers another function when the Enter key is pressed in
   * an input field.
   * @param e - The parameter `e` is a React KeyboardEvent that is triggered when a key is pressed
   * while an input element is focused. In this case, the function `handleKeyboardEnterPress` is
   * checking if the key that was pressed is the "Enter" key, and if so, it calls the function
   */
  const handleKeyboardEnterPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key == "Enter") {
      handlePushParamsPriceToPathname();
    }
  };

  return (
    <Accordion type="single" defaultValue="acordin-item-1" collapsible>
      <AccordionItem value={`acordin-item-1`}>
        <AccordionTrigger className="uppercase">{title}</AccordionTrigger>
        <AccordionContent>
          <div>
            {dataFilter?.map((item, index) => {
              const handleCheckedCheckbox = paramsCacheValue
                .toLowerCase()
                .includes(item)
                ? true
                : false;

              return (
                <div className="flex items-center gap-3 mt-3" key={item}>
                  <Checkbox
                    id={`${item}-${index}`}
                    checked={handleCheckedCheckbox}
                    onCheckedChange={(checked) => {
                      handlePushParamsToPathname(title, item, checked);
                    }}
                  />
                  <label
                    htmlFor={`${item}-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item} - (32)
                  </label>
                </div>
              );
            })}
          </div>
          <div>
            {searchPrice && (
              <div className="flex flex-col gap-3">
                <Input
                  placeholder="Low price"
                  onChange={(e) => setPriceFrom(Number(e.target.value))}
                  onKeyDown={handleKeyboardEnterPress}
                />
                <Input
                  placeholder="Max price"
                  onChange={(e) => setPriceTo(Number(e.target.value))}
                  onKeyDown={handleKeyboardEnterPress}
                />
                <Button onClick={() => handlePushParamsPriceToPathname()}>
                  Search
                </Button>
              </div>
            )}
          </div>
          {!searchPrice && (
            <div
              className="underline text-sm mt-4 cursor-pointer"
              onClick={() => setIsShow(!isShow)}
            >
              {isShow ? "Collapse" : "Show more"}
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
