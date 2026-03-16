"use server";

import { FormSchema, formSectorSchema } from "@/app/_schemas/sector";
import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function upsertSector(formData: FormSchema) {
  formSectorSchema.parse(formData);

  try {
    await db.department.upsert({
      where: { id: formData.id ?? "" },
      update: { name: formData.name },
      create: { name: formData.name },
    });
    revalidatePath("/sectors");
  } catch (error) {
    return { error };
  }
}
