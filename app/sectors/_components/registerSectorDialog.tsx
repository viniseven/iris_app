"use client";

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
import { Field, FieldLabel } from "@/app/_components/ui/field";
import { Input } from "@/app/_components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const formSectorSchema = z.object({
  name: z.string().trim().min(1, { error: "Nome é obrigatório" }),
});

type FormSchema = z.infer<typeof formSectorSchema>;

export default function RegisterSectorDialog() {
  const form = useForm<FormSchema>({
    shouldUnregister: true,
    resolver: zodResolver(formSectorSchema),
    defaultValues: {
      name: "",
    },
  });
  function onSubmit(data: FormSchema) {
    console.log(data);
  }

  return (
    <Dialog>
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
            render={({ field }) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Nome</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Insira o nome do setor"
                  autoComplete="off"
                />
              </Field>
            )}
          />
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Cadastrar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
