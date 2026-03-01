"use server";

import { FormSchema, formSectorSchema } from "@/app/_schemas/sector";
import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function createSector(formData: FormSchema) {
  formSectorSchema.parse(formData);
  const { name } = formData;
  try {
    const sectorExist = await db.department.findUnique({
      where: { name },
    });

    if (sectorExist) {
      return { success: false, message: "Setor já cadastrado" };
    }
    await db.department.create({
      data: {
        name,
      },
    });
    revalidatePath("/sectors");
    return { success: true, message: "Setor criado com sucesso" };
  } catch (error) {
    return { success: false, message: "Ocorreu um erro, tente novamente" };
  }
}
