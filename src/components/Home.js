import React, { useContext } from 'react'
import Sidebar from './Sidebar';
import Content from "./Content";
import Timeline from './Timeline';
import { MyThemeContext } from "./ThemeProvider";
const Home = () => {
    const { theme } = useContext(MyThemeContext);
    return (
        <div className={`${theme === "black" ? "bg-primary-black w-full box-border transition-colors duration-700" : "bg-white w-full box-border transition-colors duration-700"}`}>
            <div className="max-w-7xl flex mx-auto min-h-screen justify-center">
                <div className="w-3/12">
                    <Sidebar />
                </div>
                <div className="w-6/12">
                    <Content />
                </div>
                <div className="w-3/12">
                    <Timeline />
                </div>
            </div>
        </div>
    )
}
export default Home;
