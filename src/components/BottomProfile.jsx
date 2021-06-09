import React, { useContext } from 'react'
import profileImage from '../assets/mert.jpg';
import { DotMenuIcon } from "./Icons";
import { MyThemeContext } from './ThemeProvider';
const BottomProfile = () => {
    const { theme } = useContext(MyThemeContext);
    return (
        <div className="flex justify-between items-center h-16 mb-4 pl-4 hover:bg-primary-opacity rounded-full py-2 hover:text-primary-blue-base cursor-pointer">
            <div className="flex flex-row items-center">
                <img src={profileImage} alt="profile image" className="w-12 h-12 rounded-full" />
                <div className="flex flex-col pl-3">
                    <span className={`${theme === 'black' ? "pl-1 text-base font-bold text-white transition-colors duration-700" : "pl-1 text-base font-bold text-black transition-colors duration-700"}`}>mert</span>
                    <span className="text-primary-darkgray">@accurcy</span>
                </div>
            </div>
            <div className="pr-4">
                <DotMenuIcon className="w-7 h-7 text-primary-darkgray" />
            </div>
        </div>
    )
}

export default BottomProfile;
