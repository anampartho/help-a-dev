import { useContext } from "react";
import { MenuContext } from "@/context/menuContext";
import { MenuContextType } from "@/@types/menu";
import PasswordGenerator from "./PasswordGenerator";
import URLEncoder from "./URLEncoder";

const Tool = () => {
  const { selectedMenu, selectedMenuTitle } = useContext(
    MenuContext
  ) as MenuContextType;

  return (
    <>
      <div className="flex items-center mb-4 rounded">
        <h1 className="text-2xl font-bold">{selectedMenuTitle}</h1>
      </div>

      {selectedMenu === "url-encoder" && <URLEncoder />}
      {selectedMenu === "password-generator" && <PasswordGenerator />}
    </>
  );
};

export default Tool;
