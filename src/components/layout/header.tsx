import { Menu } from "lucide-react";
import { NavLink } from "../ui/navgation-link";

export default function Header() {
  return (
    <header className="fixed text-[#ebe2c4]  top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 lg:py-10 ">
      <div className="text-3xl lg:w-40 flex justify-center tracking-widest font-swarabi-mincho font-light ">
        ニッポン
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex gap-8 font-basis-grotesque text-sm lg:text-md xl:text-lg ">
        <NavLink href="#destinations">Destinations</NavLink>
        <NavLink href="#wellness">Wellness</NavLink>
        <NavLink href="#innovation">Innovation</NavLink>
        <NavLink href="#nature">Nature</NavLink>
        <NavLink href="#community">Community</NavLink>
        <NavLink href="#story">The Story</NavLink>
      </nav>

      {/* Hamburger Menu */}
      <button className="lg:w-40 flex justify-center ">
        <Menu className="size-7" />
      </button>
    </header>
  );
}
