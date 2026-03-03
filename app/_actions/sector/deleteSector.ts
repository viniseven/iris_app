"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function deleteSector(id: string) {
  try {
    await db.department.delete({
      where: {
        id,
      },
    });
    revalidatePath("/sectors");
  } catch (error) {
    return error;
  }
}
