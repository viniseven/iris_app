import { FormSchema, formCreateCollaboratorSchema } from "@/app/_schemas/collaborator";
import { db } from "@/app/lib/prisma";

export async function upsertCollaborator(formData: FormSchema){
  formCreateCollaboratorSchema.parse(formData)
  
  try{
    await db.department.upsert({
      where: { registrationNumber: formData.registrationNumber ?? ""},
      update: {
        name: formData.name,
        secondName: formData.secondName,
        
      }
    })
  }
}