export type MenuContextType = {
  selectedMenu: string;
  selectedMenuTitle: string;
  setSelectedMenu: (menuId: string, menuTitle: string) => void;
};
