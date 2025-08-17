import clsx from "clsx";
import { useSideBarStore } from "../store/SidebarStore";
import { NavItems } from "../types";
import Link from "next/link";

type Props = {
  item: NavItems;
};

const SideBarLink = ({ item }: Props) => {
  const isOpen = useSideBarStore((state) => state.isOpen);
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={clsx(
        "flex items-center px-4 py-3 mb-2 rounded-md transition-all duration-200 hover:bg-gray-700 text-white",
        "group" // For hover effects
      )}
    >
      <Icon className="text-xl flex-shrink-0" />
      <span
        className={clsx(
          "ml-3 transition-all duration-300 whitespace-nowrap overflow-hidden",
          isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
        )}
      >
        {item.name}
      </span>
    </Link>
  );
};

export default SideBarLink;
