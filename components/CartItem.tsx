import { CartItem as Item, useStore } from "@/store/store";
import Image from "next/image";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const CartItem = ({ item }: { item: Item }) => {
  const removeFromCart = useStore((store) => store.removeFromCart);
  return (
    <div className="flex items-stretch gap-4 border rounded-lg p-4">
      <div className="relative w-24 h-24">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-muted-foreground text-sm">{item.price}</p>
          </div>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => removeFromCart(item.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
};

export default CartItem;
