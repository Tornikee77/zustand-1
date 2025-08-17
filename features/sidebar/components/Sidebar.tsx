"use client";

import { FiHome, FiMenu, FiSettings, FiUsers, FiX } from "react-icons/fi";
import { NavItems } from "../types";
import { useSideBarStore } from "../store/SidebarStore";
import SideBarLink from "./SideBarLink";

const navItems: NavItems[] = [
  { name: "Dashboard", href: "/dashboard", icon: FiHome },
  { name: "Users", href: "/users", icon: FiUsers },
  { name: "Settings", href: "/settings", icon: FiSettings },
];

const Sidebar = () => {
  const isOpen = useSideBarStore((state) => state.isOpen);
  const toggle = useSideBarStore((state) => state.toggle);

  return (
    <div
      className={`flex flex-col min-h-screen bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header with toggle button */}
      <div className="p-4">
        <button
          className="focus:outline-none text-white text-2xl hover:text-gray-300 transition-colors"
          onClick={toggle}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2">
        {navItems.map((eachElement) => (
          <SideBarLink key={eachElement.name} item={eachElement} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
