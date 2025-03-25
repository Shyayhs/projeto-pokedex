import { createContext, useState, useEffect } from "react";

export const themes = {
    light: {
        color: "#1e1f20",
        mainBackground: "#eeeeee", 
        secondaryBackground: "#eb9720"
    },
    dark: {
        color: "#eeeeee",
        mainBackground: "#1e1f20",
        secondaryBackground: "#f2af3c"
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? JSON.parse(storedTheme) : themes.light;
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}