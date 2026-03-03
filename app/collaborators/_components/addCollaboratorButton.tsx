"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Plus } from "lucide-react";

export default function AddCollaboratorButton() {
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
          <DialogTitle>Cadastrar colaborador</DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
