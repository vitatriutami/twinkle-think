import { SidebarTrigger } from "./ui/sidebar"; // Import SidebarProvider
import { Input } from "./ui/input";

type NavbarProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar: React.FC<NavbarProps> = ({ searchText, setSearchText }) => {
  return (
    <div>
      <nav className="flex justify-between items-center w-full py-4 px-10 border border-b-pink-300 bg-yellow-400">
        <SidebarTrigger />
        <Input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search notes..."
          className="p-2 border-2 border-black flex items-center justify-center w-[200px] rounded-full"
        />
        <div>
          <span>👤</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
