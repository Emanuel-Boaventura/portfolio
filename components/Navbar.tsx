import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav
      className="flex gap-6 justify-end items-center px-8 py-2 text-gray-300 h-fit w-full
         bg-neutral-600 sticky"
    >
      <span className="mr-auto hidden">Link-sobrenome</span>
      <span className="font-bold">About</span>
      <span className="font-bold">Projects</span>
      <span className="font-bold">Contact</span>
      <span className="border border-gray-500 p-1 rounded-lg">
        {darkMode ? <SunIcon className="h-6" /> : <MoonIcon className="h-6" />}
      </span>
    </nav>
  );
};

export default Navbar;
