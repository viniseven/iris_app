"use client";

import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import UpsertSectorDialog from "./upsertSectorDialog";

export default function CreateSectorButton() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Novo setor
        </Button>
      </DialogTrigger>
      <UpsertSectorDialog onSuccess={() => setDialogIsOpen(false)} />
    </Dialog>
  );
}
