import { MenuContextType } from "@/@types/menu";
import { FC, ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children?: ReactNode;
}

export const MenuContext = createContext<MenuContextType | null>(null);

const MenuProvider: FC<ProviderProps> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState("url-encoder");
  const [selectedMenuTitle, setSelectedMenuTitle] = useState("URL Encoder");

  const updateSelectedMenu = (menuId: string, menuTitle: string) => {
    setSelectedMenu(menuId);
    setSelectedMenuTitle(menuTitle);
  };

  return (
    <MenuContext.Provider
      value={{
        selectedMenu,
        setSelectedMenu: updateSelectedMenu,
        selectedMenuTitle,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
