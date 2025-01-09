import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
// import { useState } from "react";

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
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk Sidebar

  return (
    <SidebarProvider>
      {/* Pass state dan setter ke Sidebar dan Navbar */}
      <AppSidebar />
      <main className="w-full bg-background">
        <Navbar
          searchText={searchText}
          setSearchText={setSearchText}
          // toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />
        <div className="flex flex-col space-y-6 items-center justify-center p-10">
          {children}
        </div>
        <Toaster />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
