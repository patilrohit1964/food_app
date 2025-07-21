import { prisma } from "@/lib/prisma";
import { ImageKitProvider } from "@imagekit/next";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const MenuPreview = async (props: Props) => {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });
  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2>Our Signature Dishes</h2>
        <p className=" text-muted-foreground max-w-2xl mx-auto">
          A selection of our pmost popular loved by customer
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {menuItems.map((item, idx) => (
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative">
              <ImageKitProvider urlEndpoint={process.env.IMAGEKIT_URI_ENDPOINT}>
                <Image
                  //   src={item.imageUrl}
                  src={"/res.jpeg"}
                  width={400}
                  height={400}
                  alt="picture of the author"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </ImageKitProvider>
            </div>
            <div className="p-6 bg-background">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-3xl">{item.name}</h3>
                <span className="font-bold text-primary">{item.price}</span>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
              <div className="flex items-center">
                {[...Array(5)].map((el, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-yellow-400 text-yellow-300"
                  />
                ))}
                <span className="text-sm">4</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild className="group">
          <Link href={"/menu"}>
            View all menu{" "}
            <ChevronRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-all delay-150" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default MenuPreview;
