import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const MenuItem = ({ name, href }: { name: string; href?: string }) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <AiOutlineLink className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        <span className="ml-3">{name}</span>
      </a>
    </li>
  );
};

export default MenuItem;
