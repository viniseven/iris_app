import {
  Building,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Users,
} from "lucide-react";
import SidebarButton from "./SidebarButton";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
} from "./ui/sidebar";

export default function SidebarApp() {
  return (
    <div>
      <Sidebar className="text-white-100 bg-blue-200">
        <SidebarHeader className="py-8 text-center text-3xl font-bold">
          IrisApp
        </SidebarHeader>
        <SidebarContent className="ml-1 text-gray-100">
          <SidebarMenuItem>
            <SidebarButton href="/">
              <LayoutDashboard />
              Dashboard
            </SidebarButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarButton href="/collaborators">
              <Users />
              Colaboradores
            </SidebarButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarButton href="/themes">
              <ClipboardList />
              Temas
            </SidebarButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarButton href="/sectors">
              <Building />
              Setores
            </SidebarButton>
          </SidebarMenuItem>
        </SidebarContent>
        <SidebarFooter className="flex flex-row items-center justify-between bg-white-100">
          <div className="flex items-center gap-2">
            <Avatar className=" bg-gray-100">
              <AvatarFallback>MV</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-blue-200 text-sm">Marcus Vinícius</p>
              <span className="text-gray-100 text-xs">
                Analista de Sistemas
              </span>
            </div>
          </div>
          <Button title="Sair">
            <LogOut className="text-blue-200" />
          </Button>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
