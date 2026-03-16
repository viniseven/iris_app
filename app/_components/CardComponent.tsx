"use client";

import { Building, EllipsisVertical, Pencil } from "lucide-react";
import { useState } from "react";
import DeleteSectorDialog from "../sectors/_components/deleteSectorDialog";
import UpsertSectorDialog from "../sectors/_components/upsertSectorDialog";
import { Button } from "./ui/button";
import { Card, CardAction, CardHeader, CardTitle } from "./ui/card";
import { Dialog } from "./ui/dialog"; // Removi o DialogTrigger daqui
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface CardComponentProps {
  name: string;
  id: string;
}

export default function CardComponent({ name, id }: CardComponentProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <Card className="bg-card border-0 flex py-3">
      <div className="flex ml-2 gap-4">
        <div className="border-r border-white-200">
          <Building className="text-gray-100 p-1 rounded-lg" size={60} />
        </div>

        <CardHeader className="flex justify-between w-full h-full content-start p-0">
          <CardTitle>{name}</CardTitle>
          <CardAction>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-none shadow-none p-0"
                >
                  <EllipsisVertical className="text-button-options" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="border-none bg-card text-button-options p-0">
                <DropdownMenuItem
                  className="px-5"
                  onClick={() => setIsEditOpen(true)}
                >
                  <Pencil />
                  Editar
                </DropdownMenuItem>

                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <DeleteSectorDialog id={id} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
              <UpsertSectorDialog
                defaultValues={{ name, id }}
                key={id}
                onSuccess={() => setIsEditOpen(false)}
              />
            </Dialog>
          </CardAction>
        </CardHeader>
      </div>
    </Card>
  );
}
