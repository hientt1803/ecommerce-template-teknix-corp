"use client";

import { Separator } from "@/components/ui/separator";
import {
  GridIcon,
  HelpCircle,
  LogOut,
  Notebook,
  RemoveFormatting,
  Settings,
  ShoppingBag,
  User,
  Users2Icon,
} from "lucide-react";
import { SideBarMenuItem } from "./menu-item";
import { usePathname } from "next/navigation";

const SIDEBAR_MOCK_DATA = [
  {
    icon: <GridIcon />,
    title: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    icon: <Notebook />,
    title: "Orders",
    link: "/admin/orders",
  },
  {
    icon: <ShoppingBag />,
    title: "Products",
    link: "/admin/products",
  },
  {
    icon: <Users2Icon />,
    title: "Customer",
    link: "/admin/customer",
  },
];

export const SideBarMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h6 className="text-neutral-600 uppercase">MAIN MENU</h6>
        {SIDEBAR_MOCK_DATA.map((item, index) => (
          <SideBarMenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            link={item.link}
            active={pathname.toLowerCase().includes(item.title.toLowerCase())}
          />
        ))}
      </div>

      <Separator className="my-6" />

      <div>
        <h6 className="text-neutral-600 uppercase">ACCOUNT</h6>
        <SideBarMenuItem
          icon={<User />}
          title={"My Account"}
          link="/admin/account"
        />
        <SideBarMenuItem
          icon={<HelpCircle />}
          title={"Get Help"}
          link="/admin/help"
        />
        <SideBarMenuItem
          icon={<RemoveFormatting />}
          title={"Report"}
          link="/admin/reports"
        />
      </div>

      <Separator className="my-6" />

      <div>
        <SideBarMenuItem
          icon={<Settings />}
          title={"Settings"}
          link="/admin/settings"
        />
        <SideBarMenuItem
          icon={<LogOut />}
          title={"Logout"}
          link="/admin/logout"
        />
      </div>
    </div>
  );
};
