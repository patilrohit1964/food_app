"use client";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";
import { ArrowLeft, Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Cart = (props: Props) => {
  const cartItems = useStore((store) => store.cart);
  return (
    <div className="max-w-7xl py-8 mx-auto">
      <div className="mb-6">
        <Button variant={"ghost"} className="group">
          <Link href={"/menu"} className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 delay-150" />
            Back to menu
          </Link>
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((el) => <CartItem key={el.id} item={el} />)
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Your Cart is empty</p>
              <Button className="mt-4" asChild>
                <Link href={"/menu"}>Browse Menu</Link>
              </Button>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="lg:col-span-1 border border-gray-400 rounded-lg p-4">
            <CartSummary />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
