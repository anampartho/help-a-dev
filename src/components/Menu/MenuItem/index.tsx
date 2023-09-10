import { useContext } from "react";
import { MenuContext } from "@/context/menuContext";
import { MenuContextType } from "@/@types/menu";
import { IconType } from "react-icons";

const MenuItem = ({
  name,
  href,
  icon: IconComponent,
  id,
}: {
  name: string;
  href?: string;
  icon: IconType;
  id: string;
}) => {
  const { selectedMenu, setSelectedMenu } = useContext(
    MenuContext
  ) as MenuContextType;

  const isActive = id === selectedMenu;

  return (
    <li className={`group ${isActive ? "active" : ""}`}>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group-hover:bg-gray-100 dark:group-hover:bg-gray-700 group-[.active]:bg-gray-100"
        onClick={() => {
          setSelectedMenu(id, name);
        }}
      >
        <IconComponent className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-[.active]:text-gray-900" />
        <span className="ml-3">{name}</span>
      </a>
    </li>
  );
};

export default MenuItem;
