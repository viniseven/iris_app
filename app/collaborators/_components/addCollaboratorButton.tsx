"use client";

import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import { Plus } from "lucide-react";

export default function AddCollaboratorButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Novo colaborador
        </Button>
      </DialogTrigger>
    </Dialog>
  );
}
