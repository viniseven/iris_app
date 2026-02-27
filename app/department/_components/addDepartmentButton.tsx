"use client";

import TitlePageButton from "@/app/_components/TitlePageButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Plus } from "lucide-react";

export default function AddDepartmentButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TitlePageButton iconButton={Plus} titleButton="Novo setor" />
      </DialogTrigger>
      <DialogContent className="bg-form text-text border-none!">
        <DialogHeader>
          <DialogTitle>Cadastrar setor</DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
