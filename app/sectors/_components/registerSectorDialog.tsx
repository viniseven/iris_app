"use client";

import createSector from "@/app/_actions/sector/createSector";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Field, FieldError, FieldLabel } from "@/app/_components/ui/field";
import { Input } from "@/app/_components/ui/input";
import { FormSchema, formSectorSchema } from "@/app/_schemas/sector";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, Plus } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function RegisterSectorDialog() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const form = useForm<FormSchema>({
    shouldUnregister: true,
    resolver: zodResolver(formSectorSchema),
    defaultValues: {
      name: "",
    },
  });
  async function onSubmit(formData: FormSchema) {
    const result = await createSector(formData);

    if (result.success) {
      setDialogIsOpen(false);
      toast.success("Setor cadastrado com sucesso");
    } else {
      toast.error(result.message);
    }
  }

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Novo setor
        </Button>
      </DialogTrigger>
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
    </Dialog>
  );
}
