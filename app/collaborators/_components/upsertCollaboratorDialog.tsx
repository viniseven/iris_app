import { Button } from "@/app/_components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/_components/ui/dialog";
import { Field, FieldError, FieldLabel } from "@/app/_components/ui/field";
import { Input } from "@/app/_components/ui/input";
import { getCollaborator } from "@/app/_data_access/collaborator";
import {
  FormSchema,
  formCreateCollaboratorSchema,
} from "@/app/_schemas/collaborator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface UpsertCollaboratorDialogProps {
  defaultValues?: FormSchema;
  onSuccess?: () => void;
}

export function UpsertCollaboratorDialog({
  defaultValues,
  onSuccess,
}: UpsertCollaboratorDialogProps) {
  const form = useForm<FormSchema>({
    shouldUnregister: true,
    resolver: zodResolver(formCreateCollaboratorSchema),
    mode: "onBlur",
    reValidateMode: "onSubmit",
    defaultValues: defaultValues ?? {
      name: "",
      secondName: "",
      afiliationType: "ASELC",
      department: "",
      role: "COLABORADOR",
      isActive: true,
      registrationNumber: 0,
    },
  });
  const isEditing = !!defaultValues;
  async function onSubmit(formData: FormSchema) {
    try {
      const findCollaborator = await getCollaborator(formData)

      if(findCollaborator){
        onSuccess?.();
        return toast.error("Colaborador já cadastrado");
      }
     
     }catch(error){
      toast.error("Ocorreu um erro interno, tente novamente");
     }
  }

}
  return (
    <DialogContent className="bg-form text-text border-none!">
      <DialogHeader>
        <DialogTitle>
          {isEditing ? "Editar setor" : "Cadastrar setor"}
        </DialogTitle>
        <DialogDescription className="text-gray-100">
          {isEditing
            ? "Edite as informações abaixo"
            : "Insira as informações abaixo"}
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Nome</FieldLabel>
              <Input
                {...field}
                id={field.name}
                placeholder="Insira o nome do setor"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError
                  className="text-red-500"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && (
              <Loader2Icon className="animate-spin" />
            )}
            {isEditing ? "Editar" : "Cadastrar"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
