import type { MenuItem as item } from "@/lib/generated/prisma";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { ImageKitProvider } from "@imagekit/next";
import Image from "next/image";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

type Props = {
  menuItems: item;
};

const MenuItem = ({ menuItems }: Props) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg p-0 pb-4">
      <CardHeader className="p-0 pb-4">
        <ImageKitProvider urlEndpoint={process.env.IMAGEKIT_URI_ENDPOINT}>
          <Image
            // src={menuItems.imageUrl}
            src={"/res.jpeg"}
            width={400}
            height={400}
            alt="picture of the menu"
            className="object-cover w-full h-full"
          />
        </ImageKitProvider>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg">{menuItems.name}</h3>
        <p className="text-muted-foreground mt-1 text-sm">
          {menuItems.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">${menuItems.price}</span>
        <Button size={"sm"} className="gap-1 cursor-pointer">
          <Plus className="h-4 w-4" />
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
