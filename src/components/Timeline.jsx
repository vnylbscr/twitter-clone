import React, { useContext, useState } from 'react'
import {
    ArrowIcon,
    DotMenuIcon,
    SearchIcon,
    SettingIcon
} from "./Icons";
import { MyThemeContext } from './ThemeProvider';
import TimelineTrendList from './TimelineTrendList';
import { Timeline as TimeLineWidgets } from 'react-twitter-widgets';

const trendList = [
    {
        trend: "Trend in Turkey",
        tag: "#freesehinsah",
        count: "34.6K"
    },
    {
        trend: "Trend in Germany",
        tag: "#sagopakajmer",
        count: "13.6K"
    },
    {
        trend: "Trend in Morocco",
        tag: "#vscode",
        count: "34.6K"
    },
    {
        trend: "Trend in USA",
        tag: "#TwitterClone",
        count: "69.6K"
    },
    {
        trend: "Trend in Egypt",
        tag: "#TwitterClone",
        count: "19.6K"
    }
]
const Timeline = () => {
    // Theme Context
    const { theme } = useContext(MyThemeContext);

    const [timelineUser, setTimelineUser] = useState("accurcy");
    return (
        <div className="top-25 sticky">
            <main className="flex flex-col max-h-screen">
                {/* Header */}
                <header className={`${theme === 'black' ? "flex w-full border border-transparent flex-row items-center justify-center bg-gray-600 p-3 m-3 transition-colors duration-700 rounded-full focus-within:ring-1 focus-within:ring-primary-blue-base focus-within:text-primary-blue-base" : "flex w-full border border-transparent flex-row items-center justify-center bg-gray-200 p-3 m-3 rounded-full focus-within:ring-1 focus-within:ring-primary-blue-base transition-colors duration-700 focus-within:text-primary-blue-base"}`}>
                    <SearchIcon className="w-7 h-17 ml-5 text-primary-lightgray focus:outline-none" />
                    <input type="text" placeholder="Search Twitter"
                        className={`${theme === 'black' ? "w-full h-6 text-primary-lightgray transition-colors duration-700 bg-transparent outline-none px-3 group-f focus:text-white" : "w-full h-6 text-primary-lightgray bg-transparent outline-none px-3 group-f focus:text-black transition-colors duration-700"}`}
                        onChange={(e) => setTimelineUser(e.target.value)}
                        value={timelineUser || ""}
                    />
                    <div className="has-tooltip cursor-pointer group">
                        <ArrowIcon className="w-8 h-8 text-primary-darkgray group-hover:text-primary-blue-base" />
                        <span className="tooltip bg-primary-darkgray mt-6 p-2 text-white text-xs w-32 h-16 flex items-center justify-center rounded-sm">
                            Change the timeline to see the person you want.
                        </span>
                    </div>
                </header>
                {/* Trends  */}
                <div className="h-full w-full">
                    <div className={`${theme === 'black' ? "flex flex-col transition-colors duration-700 bg-gray-800 p-5 mt-1 ml-5 rounded-xl" : "flex flex-col bg-gray-100 p-5 mt-1 ml-5 rounded-xl transition-colors duration-700"}`}>
                        <div className="flex flex-row items-center justify-between w-full border-b border-gray-700 h-14">
                            <span className={`${theme === 'black' ? "text-white text-xl font-extrabold transition-colors duration-700" : "text-black text-xl font-extrabold transition-colors duration-700"}`}>Trends for you</span>
                            <div className="w-7 h-7 flex items-center justify-center hover:bg-primary-opacity rounded-full">
                                <SettingIcon className="w-5 h-5  text-primary-blue-base cursor-pointer" />
                            </div>
                        </div>
                        {/* Trend List */}
                        {trendList.map(item => {
                            return (
                                <div key={item.trend} >
                                    <div className={`${theme === 'black' ? "flex flex-row items-center justify-between h-24 transition-colors duration-700 border-b border-t border-gray-700 hover:bg-primary-opacity w-full cursor-pointer" : "flex flex-row items-center justify-between h-24 border-b border-t transition-colors duration-700 border-gray-300 hover:bg-primary-opacity w-full cursor-pointer"}`}>
                                        <TimelineTrendList trend={item.trend} tag={item.tag} countTweet={item.count} />
                                        <div className="w-7 h-7 rounded-full hover:bg-primary-opacity cursor-pointer flex items-center justify-center has-tooltip">
                                            <DotMenuIcon className="w-5 h-5 text-primary-darkgray" />
                                            <span className="tooltip bg-primary-darkgray mt-20 text-white text-xs w-16 h-6 flex items-center justify-center rounded-sm">
                                                More
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="w-full h-full hover:bg-primary-opacity rounded-xl mt-2">
                            <span className="text-primary-blue-base mt-2 cursor-pointer pt-4 pl-2">
                                Show more
                        </span>
                        </div>
                    </div>
                </div>
                {/* Terms About etc. */}
                <div className="flex flex-col px-2 h-full w-full ml-5 my-4">
                    <div className="flex">
                        <a href="#" className="text-primary-darkgray text-xs pr-2 hover:underline">
                            Terms of Service
                    </a>
                        <a href="#" className="text-primary-darkgray text-xs pr-2 hover:underline">
                            Privacy Policity
                    </a>
                        <a href="#" className="text-primary-darkgray text-xs pr-2 hover:underline">
                            Cookie Policity
                    </a>
                    </div>
                    <div className="flex mt-2">
                        <a href="#" className="text-primary-darkgray text-xs pr-2 hover:underline">
                            About Twitter
                        </a>
                        <a href="#" className="text-primary-darkgray text-xs pr-2 hover:underline">
                            More...
                        </a>
                        <span href="#" className="text-primary-darkgray text-xs pr-2">
                            Mert Genç 2021
                        </span>
                    </div>
                </div>
                {/* Tweet Widgets */}
                <div className="w-full pl-4 flex items-center  justify-center mx-1 my-4">
                    <TimeLineWidgets
                        dataSource={{
                            sourceType: 'profile',
                            screenName: timelineUser,
                        }}
                        options={{
                            height: '400',
                        }}
                        renderError={() => <p className={`${theme === 'black' ? "text-white text-2xl font-bold" : "text-primary-darkgray text-2xl font-bold"}`}>Could not load timeline. Please enter an existing username or a valid username.</p>}
                    />
                </div>
            </main>
        </div>
    )
}

export default Timeline
