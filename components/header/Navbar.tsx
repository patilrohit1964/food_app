"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Menu, Moon, Search, ShoppingCart, Sun, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useStore } from "@/store/store";

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useStore((store) => store.cart);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop:blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between p-2">
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
            <Link href={"/admin/menu/create"} className="text-sm font-medium">
              Admin
            </Link>
          </nav>
        </div>
        {/* right section of navbar */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-6/12 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              className="pl-10 w-[160px] md:w-[250px]"
            />
          </div>
          {/* cart */}
          <Link href={"/cart"} className="relative">
            <Button variant={"ghost"}>
              <ShoppingCart className="h-5 w-5 cursor-pointer" />
              <span className="absolute -top-1 right-2 h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cart.length}
              </span>
            </Button>
          </Link>
          <Button size={"sm"} variant={"outline"}>
            <Sun />
            <Moon />
          </Button>
          {/* user auth */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* mobile device */}
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline"
            size={"icon"}
            variant={"ghost"}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 py-2 border-t bg-background space-y-2">
          {/* menu items for mobile */}
          <Link href={"/menu"} className="block text-sm font-medium">
            Menu
          </Link>
          <Link href={"/about"} className="block text-sm font-medium">
            About
          </Link>
          <Link
            href={"/admin/menu/create"}
            className="block text-sm font-medium"
          >
            Admin
          </Link>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-6/12 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search menu..." className="pl-10 " />
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
