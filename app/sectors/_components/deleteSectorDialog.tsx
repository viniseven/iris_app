"use client";

import deleteSector from "@/app/_actions/sector/deleteSector";
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
import { Trash2 } from "lucide-react";

import { useState } from "react";
import { toast } from "sonner";

interface DeleteSectorDialogProps {
  id: string;
}

export default function DeleteSectorDialog({ id }: DeleteSectorDialogProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  async function handleDeleteSector() {
    try {
      await deleteSector(id);

      setDialogIsOpen(false);
      return toast.success("Setor excluído com sucesso");
    } catch (error) {
      setDialogIsOpen(false);
      toast.error("Ocorreu um erro interno, tente novamente");
    }
  }

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild className="p=0">
        <Button variant="outline" className="border-none shadow-none">
          <Trash2 />
          Excluir
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-form text-text border-none!">
        <DialogHeader>
          <DialogTitle>Excluir setor</DialogTitle>
          <DialogDescription className="text-gray-100">
            Deseja excluir o setor?
          </DialogDescription>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DialogClose>
            <Button onClick={handleDeleteSector}>Excluir</Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
