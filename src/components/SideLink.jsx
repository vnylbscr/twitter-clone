import React, { useContext } from 'react'
import { MyThemeContext } from './ThemeProvider';

const SideLink = ({ name, Icon }) => {
    const {theme} = useContext(MyThemeContext);
    return (
        <li className="group">
            <a href="#" className="cursor-pointer block">
                <div className="inline-block">
                    <div className={`" ${theme === "black" ? "text-white group flex flex-row items-center  py-4 px-4 group-hover:text-primary-blue-base rounded-full group-hover:bg-primary-hover transition-colors duration-700" : "text-black flex flex-row items-center  py-4 px-4 group-hover:text-primary-blue-base rounded-full transition-colors duration-700 group-hover:bg-primary-hover"}"`}>
                        <Icon className="w-7 h-7 pl-1" />
                        <span className="text-xl pl-4 font-bold">{name}</span>
                    </div> 
                </div>
            </a>
        </li>
    )
}

export default SideLink;
