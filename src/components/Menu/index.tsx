import { useContext } from "react";
import { MenuContext } from "@/context/menuContext";
import { MenuContextType } from "@/@types/menu";
import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "@/utils/constants";

const Menu = () => {
  return (
    <ul className="space-y-2 font-medium">
      {MENU_ITEMS.map((item) => (
        <MenuItem
          name={item.title}
          href={`#${item.id}`}
          key={item.id}
          id={item.id}
          icon={item.icon}
        />
      ))}
    </ul>
  );
};

export default Menu;
