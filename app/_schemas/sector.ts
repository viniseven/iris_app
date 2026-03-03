import * as z from "zod";

export const formSectorSchema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .regex(/^[a-zA-Z\s_]+$/, "Apenas letras são permitidos e sem acentos")
    .toLowerCase()
    .transform((val) => val.replace(/\s+/g, "_")),
});

export type FormSchema = z.infer<typeof formSectorSchema>;
