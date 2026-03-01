"use server";

import { revalidatePath } from "next/cache";
import { FormSchema } from "../_schemas/sector";
import { db } from "../lib/prisma";

export async function getSector(data: FormSchema) {
  try {
    const sector = await db.department.findUnique({
      where: { name: data.name },
    });
    return sector;
  } catch (error) {
    return { error: "Ocorreu um erro, tente novamente" };
  }
}

export async function getAllSectors() {
  const sectors = await db.department.findMany();
  try {
    if (sectors) {
      return sectors;
    }
    return [];
    revalidatePath("/sectors");
  } catch (error) {
    return [];
  }
}
