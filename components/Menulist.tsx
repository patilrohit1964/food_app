import type { MenuItem as item } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import React from "react";
import MenuItem from "./MenuItem";

type Props = {};

const Menulist = async (props: Props) => {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {menuItems.map((el: item) => (
        <MenuItem key={el.id} menuItems={el} />
      ))}
    </div>
  );
};

export default Menulist;
