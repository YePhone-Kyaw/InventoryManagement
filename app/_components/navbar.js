"use client";

import { Bell, Moon, Search, Sun } from "lucide-react";
import { useState } from "react";

export default function NavigationBar() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const changeTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };


  return (
    <main className="flex justify-between items-center w-full mb-7">
      {/* left sidebar */}
      <div className="flex justify-between items-center gap-5">
      <div className="relative">
          <input
            type="search"
            placeholder="Search products"
            className="pl-10 pr-4 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
            <Search className="text-gray-500" size={20} />
          </div>
        </div>
      </div>
      <div className="flex ">
        <div>
            <button className={`toggle-button`} onClick={changeTheme}>
                {isDarkMode ? (
            <Sun className="cursor-pointer text-gray-500" size={20} />
                    
                ) : (
                    <Moon className="cursor-pointer text-gray-500" size={20} />
                )}
            </button>
        </div>
      </div>
    </main>
  );
}
