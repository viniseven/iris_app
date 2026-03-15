"use client";

import { Building, EllipsisVertical } from "lucide-react";
import DeleteSectorDialog from "../sectors/_components/deleteSectorDialog";
import { Button } from "./ui/button";
import { Card, CardAction, CardHeader, CardTitle } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface CardComponentProps {
  title: string;
  id: string;
}

export default function CardComponent({ title, id }: CardComponentProps) {
  return (
    <Card className="bg-card border-0 flex py-3">
      <div className="flex ml-2 gap-4">
        <div className="border-r border-white-200">
          <Building className="text-gray-100 p-1 rounded-lg" size={60} />
        </div>

        <CardHeader className="flex justify-between  w-full h-full content-start p-0">
          <CardTitle>{title}</CardTitle>
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
              <DropdownMenuContent className="border-none bg-card text-button-options">
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <DeleteSectorDialog id={id} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardAction>
        </CardHeader>
      </div>
    </Card>
  );
}
