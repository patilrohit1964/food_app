import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";

type Props = {};
const categories = ["pizza", "pasta", "manchurian", "green chilli"];
function page({}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h1>Add New Menu Item</h1>
            <Link href={"/admin/menu"}>All Menu</Link>
            <Button>All menu list</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action="">
            <div className="space-y-2">
              <Label id="name">Item Name</Label>
              <Input name="name" placeholder="e.g Roasted Papad" />
            </div>
            <div className="space-y-2 my-5">
              <Label id="name">Item Name</Label>
              <Textarea
                name="name"
                placeholder="Brief Description of the item"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label id="name">Price ($)</Label>
                <Input name="name" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select name="category">
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select Category"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((el, idx) => (
                      <SelectItem key={idx} value={el}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
