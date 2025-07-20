"use client";
import { deleteMenuAction } from "@/actions/deleteMenu";
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
import { Trash, Trash2 } from "lucide-react";
import { useActionState } from "react";
import { Button } from "./ui/button";

type DeleteMenuItemProps = {
  id: string;
};

const DeleteMenuItem = ({ id }: DeleteMenuItemProps) => {
  const [formState, action, isPending] = useActionState(
    deleteMenuAction.bind(null, id), //if pass data in that function
    {
      success: false,
    }
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={'icon'} className="bg-red-500 text-white">
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Menu</DialogTitle>
          <DialogDescription>This Action can't undone</DialogDescription>
        </DialogHeader>
        <form action={action} className="flex items-center justify-end">
          <DialogFooter className="">
            <DialogClose asChild>
              <Button type="button" variant="default">
                Close
              </Button>
            </DialogClose>
            <Button
              type="submit"
              variant={'outline'}
              size={"lg"}
              className="text-destructive"
              disabled={isPending}
            >
              Delete
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteMenuItem;

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
