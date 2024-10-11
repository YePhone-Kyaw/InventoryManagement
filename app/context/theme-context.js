'use client';

import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const changeTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return(
        <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
