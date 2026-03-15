"use server";

import { revalidatePath } from "next/cache";
import { db } from "../lib/prisma";
import { ISector } from "../types/sector";

export async function getSector({ name }: ISector) {
  try {
    const sector = await db.department.findUnique({
      where: { name },
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
    revalidatePath("/sectors");
    return [];
  } catch (error) {
    return [];
  }
}
