"use client";

import { Bell, Menu, Moon, Search, Settings, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state/page";
import Link from "next/link";

export default function NavigationBar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
    // document.documentElement.classList.toggle("dark");
  };

  return (
    <main className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>

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
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button  onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
          </div>
          <hr className="w-0 h-7 border border-solid border-1 border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
              <img src="" alt="User Profile" className="rounded-full h-full object-cover w-50 h-50" />
              {/* <img src={user.photoURL} alt="User Profile" className="rounded-full h-full object-cover w-50 h-50" />
              <span>{user.displayName}</span> */}
          </div>
        </div>
        <Link href="/setting">
            <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </main>
  );
}
