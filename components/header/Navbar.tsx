import { Search, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop:blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between">
        {/* left section of navbar */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href={"/"} className="font-bold text-lg">
            Gourmet
          </Link>
          {/* menu items for desktop */}
          <nav className="hidden md:flex  items-center space-x-6">
            <Link href={"/menu"} className="text-sm font-medium">
              Menu
            </Link>
            <Link href={"/about"} className="text-sm font-medium">
              About
            </Link>
            <Link href={"/admin"} className="text-sm font-medium">
              Admin
            </Link>
          </nav>
        </div>
        {/* right section of navbar */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/3 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              className="pl-10 w-[160px] md:w-[250px]"
            />
            {/* cart */}
            <Link href={"/cart"} className="relative">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
