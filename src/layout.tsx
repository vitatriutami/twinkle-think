import React from "react";
import AppSidebar from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Import SidebarProvider
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/toaster";

type LayoutProps = {
  children: React.ReactNode;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};
const Layout: React.FC<LayoutProps> = ({
  children,
  searchText,
  setSearchText,
}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-amber-50">
        <nav className="flex justify-between items-center w-full py-4 px-10 border border-b-pink-300 bg-yellow-400">
          <SidebarTrigger />
          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search notes..."
            className="p-2 border-2 border-black flex items-center justify-center w-[200px] rounded-full"
          />
          <div>akun - logout</div>
        </nav>
        <div className="flex flex-col space-y-6 items-center justify-center p-10">
          {children}
        </div>
        <Toaster />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
