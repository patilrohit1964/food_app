"use client";
import React, { useActionState } from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { deleteMenuAction } from "@/actions/deleteMenu";

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
    <form action={action}>
      <Button
        type="submit"
        variant={"ghost"}
        size={"icon"}
        className="text-destructive"
        disabled={isPending}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </form>
  );
};
export default DeleteMenuItem;
