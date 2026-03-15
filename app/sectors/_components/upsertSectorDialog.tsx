import createSector from "@/app/_actions/sector/createSector";
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
import { getSector } from "@/app/_data_access/sector";
import { FormSchema, formSectorSchema } from "@/app/_schemas/sector";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface UpsertSectorDialog {
  onSuccess?: () => void;
}

export default function UpsertSectorDialog({ onSuccess }: UpsertSectorDialog) {
  const form = useForm<FormSchema>({
    shouldUnregister: true,
    resolver: zodResolver(formSectorSchema),
    defaultValues: {
      name: "",
    },
  });
  async function onSubmit(formData: FormSchema) {
    try {
      const findSector = await getSector(formData);

      if (findSector) {
        return toast.error("Setor já cadastrado");
      }
      await createSector(formData);
      onSuccess?.();

      toast.success("Setor cadastrado com sucesso");
    } catch (error) {
      toast.error("Ocorreu um erro interno, tente novamente");
    }
  }
  return (
    <DialogContent className="bg-form text-text border-none!">
      <DialogHeader>
        <DialogTitle>Cadastrar setor</DialogTitle>
        <DialogDescription className="text-gray-100">
          Insira as informações abaixo
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
            Cadastrar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
