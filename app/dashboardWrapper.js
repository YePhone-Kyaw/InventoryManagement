"use client";

import React, { useEffect } from "react";
import StoreProvider, { useAppSelector } from "./redux";
import SideBar from "./_components/sidebar";
import NavigationBar from "./_components/navbar";

function DashboardLayout({children}){

    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]); 

    return (
        <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
            <SideBar />
            <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
                <NavigationBar />
                {children}
            </main>
        </div>
    );
};

export default function DashboardWrapper({children}) {
    return (
        <StoreProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </StoreProvider>
    )
}