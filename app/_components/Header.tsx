import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="bg-white-100 flex justify-end py-4 px-8 gap-4 items-center">
      <div>
        <h1 className="text-blue-200 text-sm">Olá, Marcus Vinícius</h1>
        <p className="text-sm text-gray-100">Analista de Sistemas</p>
      </div>
      <Avatar className="border border-white-200">
        <AvatarFallback>MV</AvatarFallback>
      </Avatar>
      <Button>
        <LogOut />
      </Button>
    </div>
  );
}
