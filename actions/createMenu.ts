"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
type CreateMenuFormState = {
  errors: {
    name?: string[];
    description?: string[];
    category?: [];
    price?: [];
    imageUrl?: [];
    formError?: [];
  };
};
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "description is required" }),
  category: z.string().min(1, { message: "category is required" }),
  price: z.string().min(0.01, { message: "price must be at least $0.0.1" }),
  image: z
    .string()
    .url({ message: "image must be a valid url" })
    .optional()
    .or(z.literal("")), //allow empty string
});
export const createMenuAction = async (initialState, formData: FormData) => {
  const result = formSchema.safeParse({
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as string,
    price: formData.get("price") as string,
    image: formData.get("image") as string,
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  try {
    // save data in db
    await prisma.menuItem.create({
      data: {
        name: result.data.name,
        description: result.data.description,
        category: result.data.category,
        price: Number(result.data.price),
        imageUrl: result.data.image!,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return {
        errors: [error.message],
      };
    } else {
      return {
        errors: {
          formError: ["An unexpected error"],
        },
      };
    }
  }
  revalidatePath("/admin/menu");
  redirect("/admin/menu");
};
