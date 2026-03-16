import { afiliationType, Role } from "@/generated/prisma/enums";
import * as z from "zod";

export const formCreateCollaboratorSchema = z.object({
  id: z.string().optional(),
  registrationNumber: z.number().min(1, "Por favor, matrícula é obrigatório"),
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .regex(/^[a-zA-Z\s_]+$/, "Apenas letras são permitidos e sem acentos"),
  secondName: z
    .string()
    .min(1, "O nome é obrigatório")
    .regex(/^[a-zA-Z\s_]+$/, "Apenas letras são permitidos e sem acentos"),
  afiliationType: z.enum(afiliationType),
  department: z.string().min(1, "Por favor, selecione uma opção"),
  role: z.enum(Role),
  isActive: z.boolean(),
});

export type FormSchema = z.infer<typeof formCreateCollaboratorSchema>;
