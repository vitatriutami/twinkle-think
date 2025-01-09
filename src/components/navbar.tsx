import { SidebarTrigger } from "./ui/sidebar";
import { Input } from "./ui/input";
// import { useEffect, useState } from "react";

type NavbarProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar: React.FC<NavbarProps> = ({ searchText, setSearchText }) => {
  // const [showNavbar, setShowNavbar] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const handleScroll = () => {
  //   if (typeof window !== "undefined") {
  //     console.log(
  //       "window.scrollY vs lastScrollY =>",
  //       window.scrollY + " vs " + lastScrollY
  //     );
  //     console.log("window.scrollY > lastScrollY", window.scrollY > lastScrollY);

  //     if (window.scrollY > lastScrollY) {
  //       setShowNavbar(false); // Scroll ke bawah
  //     } else {
  //       setShowNavbar(true); // Scroll ke atas
  //     }
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   console.log("showNavbar =>", showNavbar);

  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, [lastScrollY]);

  return (
    <div>
      <nav
        className={`z-50 flex justify-between items-center w-full py-4 px-10 border border-b-pink-300 bg-yellow-400`}
      >
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
