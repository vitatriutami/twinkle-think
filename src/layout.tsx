import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";

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
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <div className="flex flex-col space-y-6 items-center justify-center p-10">
          {children}
        </div>
        <Toaster />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
