import DeleteMenuItem from "@/components/DeleteMenuItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UpdateMenuItem } from "@/components/UpdateMenuItem";
import { prisma } from "@/lib/prisma";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="lg:col-span-2 my-4 container mx-auto">
      <h1 className="font-bold text-2xl">Our Menu</h1>
      <Card>
        <CardHeader>
          <CardTitle>Current Menu Items</CardTitle>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {menuItems.map((el) => (
                  <TableRow>
                    <TableCell className="font-medium">{el.name}</TableCell>
                    <TableCell>{el.description}</TableCell>
                    <TableCell>{el.category}</TableCell>
                    <TableCell>{el.price}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <UpdateMenuItem item={el} />
                        <DeleteMenuItem id={el.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default page;
