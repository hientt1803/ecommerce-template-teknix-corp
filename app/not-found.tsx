import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        NOT FOUND
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Could not find requested resource
      </p>
      <Link href="/shop" className="mt-5">
        <Button className="font-bold">Return Home</Button>
      </Link>
    </div>
  );
}
