import React, { useContext } from 'react'
import { MyThemeContext } from './ThemeProvider'
import { LightIcon, DarkIcon } from "./Icons";
const ToggleTheme = () => {
    const { theme, setTheme } = useContext(MyThemeContext);
    const handleChangeTheme = () => {
        const color = theme === "black" ? "light" : "black";
        setTheme(color);
    }
    return (
        <div className="flex items-center justify-center cursor-pointer transition-all duration-700">
            {theme === "black" ? (
                <div className="has-tooltip flex" onClick={handleChangeTheme}>
                    <LightIcon className="w-8 h-8 text-white" />
                    <span className="tooltip bg-primary-darkgray mt-10 text-white text-xs w-20 h-10 flex items-center justify-center rounded-sm pl-2">
                        Toggle Light Mode
                    </span>
                </div>
            )
                : (
                    <div className="has-tooltip flex" onClick={handleChangeTheme}>
                        <DarkIcon className="w-8 h-8 text-black" />
                        <span className="tooltip bg-primary-darkgray mt-10 text-white text-xs w-20 h-10 flex items-center justify-center rounded-sm pl-2">
                           Toggle Dark Mode
                        </span>
                    </div>
                )
            }
        </div>

    )
}

export default ToggleTheme;
