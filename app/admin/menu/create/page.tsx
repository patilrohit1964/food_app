"use client";
import { createMenuAction } from "@/actions/createMenu";
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
import UploadExample from "@/components/UploadImage";
import Link from "next/link";
import React, { useActionState, useState } from "react";

type Props = {};
const categories = ["pizza", "pasta", "manchurian", "green chilli"];
function page({}: Props) {
  const [formState, action, isPending] = useActionState(createMenuAction, {
    errors: {},
  });
  const [imageUrl, setImageUrl] = useState<string | null>();
  const handleAction = (formData: FormData) => {
    formData.append("image", imageUrl || "");
    return action(formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h1>Add New Menu Item</h1>
            <Link href={"/admin/menu"}>
              <Button variant={"link"}>All menu list</Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleAction}>
            <div className="space-y-2">
              <Label htmlFor="name">Item Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="e.g Roasted Papad"
              />
              {formState.errors.name && (
                <span className="text-red-600 text-sm">
                  {formState.errors.name}
                </span>
              )}
            </div>
            <div className="space-y-2 my-5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Brief Description of the item"
              />
              {formState.errors.description && (
                <span className="text-red-600">
                  {formState.errors.description}
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  name="price"
                  id="price"
                  type="number"
                  placeholder="0.00"
                />
                {formState.errors.price && (
                  <span className="text-red-600">{formState.errors.price}</span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
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
                {formState.errors.category && (
                  <span className="text-red-600">
                    {formState.errors.category}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <UploadExample setImageUrl={setImageUrl} />
            </div>
            <Button className="w-full mt-4" disabled={isPending}>
              {isPending ? "Loading..." : "Add Menu Item"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
