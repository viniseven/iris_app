import * as z from "zod";

export const formCreateSectorSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .regex(/^[a-zA-Z\s_]+$/, "Apenas letras são permitidos e sem acentos"),
});

export type FormSchema = z.infer<typeof formCreateSectorSchema>;
