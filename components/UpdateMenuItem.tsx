"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useActionState } from "react";
import { updateMenuAction, UpdateMenuFormState } from "@/actions/updateMenu";
import { MenuItem } from "@/lib/generated/prisma";
const categories = ["pizza", "pasta", "manchurian", "green chilli"];

export function UpdateMenuItem({ item }: { item: MenuItem }) {
  const [formState, action, isPending] = useActionState(
    async (prevState: UpdateMenuFormState, formData: FormData) =>
      await updateMenuAction(prevState, formData, item.id),
    {
      errors: {},
    }
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={'icon'}>
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Edit Menu Items</DialogTitle>
            <DialogDescription>
              Make changes to your menu here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Item Name</Label>
              <Input id="name" name="name" defaultValue={item.name} />
              {formState.errors.name && (
                <span className="text-sm text-red-500">name is required</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Item Description</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={item.description}
                placeholder="brief description at the menu item"
              />
              {formState.errors.description && (
                <span className="text-sm text-red-500">
                  description is required
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  defaultValue={item.price}
                  placeholder="0.00"
                />
                {formState.errors.price && (
                  <span className="text-sm text-red-500">
                    price is required
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category ($)</Label>
                <Select name="category" defaultValue={item.category}>
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="select category" />
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
                  <span className="text-sm text-red-500">
                    category is required
                  </span>
                )}
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full mt-4" disabled={isPending}>
            {isPending ? "Loading..." : "Save Changes"}
          </Button>
          {formState.errors.formError && (
            <p className="text-red-500 text-sm mt-2">
              {formState.errors.formError[0]}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
