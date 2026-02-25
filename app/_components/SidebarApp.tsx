import { Building, ClipboardList, LayoutDashboard, Users } from "lucide-react";
import SidebarButton from "./SidebarButton";
import {
  Sidebar,
  SidebarContent,
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
      </Sidebar>
    </div>
  );
}
