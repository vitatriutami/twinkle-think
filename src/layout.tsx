import React from "react";
import AppSidebar from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Import SidebarProvider

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-amber-50">
        <nav className="flex justify-between items-center w-full py-4 px-6 border border-b-orange-300 bg-yellow-400">
          <SidebarTrigger />
          <div className="p-2 border-2 border-black flex items-center justify-center w-[200px] rounded-full">search box</div>
          <div>akun - logout</div>
        </nav>
        <div className="flex flex-col space-y-6 items-center justify-center p-10">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
