import Link from "next/link";
import { MainNav } from "./header/main-nav";
import MobileNav from "./header/mobile-nax";

export const MainHeader = () => {
  return (
    <header className="py-3 mb-10">
      <div className="container flex justify-between items-center">
        <div className="flex gap-5">
          <Link href={"/"} className="flex gap-1 items-center text-3xl">
            <span className="font-bold">SILKY</span>
            <span className="text-neutral-800 dark:text-neutral-200">
              STORE
            </span>
          </Link>
        </div>
        <div>
          <MainNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
