"use server";

import { FormSchema } from "../_schemas/sector";
import { db } from "../lib/prisma";

export default async function getSector(data: FormSchema) {
  try {
    const sector = await db.department.findUnique({
      where: { name: data.name },
    });
    return sector;
  } catch (error) {
    return { error: "Ocorreu um erro, tente novamente" };
  }
}
