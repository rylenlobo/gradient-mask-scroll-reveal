import { Menu } from "lucide-react";
import { NavLink } from "../ui/navgation-link";

export default function Header() {
  return (
    <header className="fixed text-[#ebe2c4] top-0 left-0 w-full z-50 flex items-center justify-between px-5 md:px-6.5 py-3 lg:py-10 bg-gradient-to-b from-black/50 via-black/30 to-transparent">
      <div className="text-3xl lg:w-40 flex justify-center tracking-widest font-swarabi-mincho font-light md:pl-6.5  ">
        ニッポン
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex gap-8 font-basis-grotesque text-sm lg:text-md xl:text-lg ">
        <NavLink href="/destinations">Land & Lore</NavLink>
        <NavLink href="/culture">Culture</NavLink>
        <NavLink href="/innovation">Innovation</NavLink>
        <NavLink href="/nature">Nature</NavLink>
        <NavLink href="/Wellness ">Inner Realms</NavLink>
        <NavLink href="#story">Echoes & Origins</NavLink>
      </nav>

      {/* Hamburger Menu */}
      <button className="lg:w-40 flex justify-end ">
        <Menu className="size-7" />
      </button>
    </header>
  );
}
