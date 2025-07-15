import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop:blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-center">
        <Link href={"/"} className="font-bold text-lg">
          Gourmet
        </Link>
      </div>
    </header>
  );
};
