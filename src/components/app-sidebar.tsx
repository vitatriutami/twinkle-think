import logo from "@/assets/logo-twinkle.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"; // Pastikan sesuai alias path

// Data sidebar menu
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: () => <span>📊</span>,
  },
  {
    title: "Settings",
    url: "#",
    icon: () => <span>⚙️</span>,
  },
  {
    title: "Profile",
    url: "#",
    icon: () => <span>👤</span>,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-amber-100 pt-16">
        <SidebarGroup className="flex flex-col gap-24">
          <SidebarGroupLabel className="py-4 flex items-center justify-center">
            <img src={logo} width="200px" alt="logo TwinkleThink" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center space-x-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
