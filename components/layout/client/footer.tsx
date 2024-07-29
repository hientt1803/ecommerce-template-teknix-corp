import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Github, Instagram } from "lucide-react";
import { StackInfor } from "./footer/stack-infor";

const ITEMS = ["WOMEN", "MEN", "SHOES", "WATCHES"];

export const MainFooter = () => {
  return (
    <div className="min-w-full bg-neutral-900 dark:bg-neutral-800 text-white mt-10">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between flex-wrap">
          <div className="flex flex-row justify-center md:justify-start gap-10 flex-wrap">
            <StackInfor title="categories" items={ITEMS} />
            <StackInfor title="categories" items={ITEMS} />
          </div>
          <div className="flex flex-row justify-center md:justify-end gap-10 flex-wrap mt-14 md:mt-0">
            <StackInfor title="GET IN TOUCH" isNested>
              <p className="text-neutral-400 dark:text-neutral-500 max-w-[300px]">
                Any questions? Let us know in store at Ninh Kieu,Can Tho or call
                us on (+84) 0706802119
              </p>
              <div className="flex gap-2 text-neutral-400 dark:text-neutral-500 mt-4">
                <Facebook />
                <Instagram />
                <Github />
              </div>
            </StackInfor>
            <StackInfor title="NEWSLETTER" isNested>
              <Input
                type="email"
                placeholder="Email"
                className="border-0 border-b-2 mb-2 rounded-none focus::border-0 focus::border-b-2 focus:outline-none"
              />
              <Button className="font-semibold px-5 mt-3 bg-neutral-700" variant={"default"}>
                SUBSCIBE
              </Button>
            </StackInfor>
          </div>
        </div>
        <p className="text-center mt-12 text-neutral-500 dark:text-neutral-400">
          Copyright ©2024 All rights reserved | This template is made with ❤️ by
          TranHien
        </p>
      </div>
    </div>
  );
};
