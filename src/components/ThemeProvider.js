import { createContext, useState } from "react";

export const MyThemeContext = createContext("black");

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("black");
    return (
        <MyThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </MyThemeContext.Provider>
    )
}

export default ThemeProvider;
