import SidebarButton from "./SidebarButton";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuItem,
} from "./ui/sidebar";
import { LayoutDashboard, Users, ClipboardList, Building } from "lucide-react";

export default function SidebarApp() {
  return (
    <div>
      <Sidebar className="bg-blue-200 text-white-100">
        <SidebarHeader className="text-center text-3xl font-bold py-8">
          IrisApp
        </SidebarHeader>
        <SidebarContent className="text-gray-100 ml-1">
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
