"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteMenuAction = async (id: string) => {
  try {
    await prisma.menuItem.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/admin/menu");
    redirect("/admin/menu"); //when we use redirect in try catch they throw error we can handle with  useActionState(actionfunc,this errir)
  } catch (error) {
    console.log("error", error);
    throw new Error("failed to delete menu");
  }
};
