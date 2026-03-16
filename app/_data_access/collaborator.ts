import { revalidatePath } from "next/cache";
import { db } from "../lib/prisma";
import { ICollaborator } from "../types/types";

export async function getCollaborator({ registrationNumber }: ICollaborator) {
  try {
    const collaborator = await db.collaborator.findUnique({
      where: { registrationNumber },
    });
    return collaborator;
  } catch (error) {
    return { error: "Ocorreu um erro, tente novamente" };
  }
}

export async function getAllCollaborators() {
  const collaborators = await db.collaborator.findMany();
  try {
    if (collaborators) {
      return collaborators;
    }
    revalidatePath("/collaborators");
    return [];
  } catch (error) {
    return [];
  }
}
