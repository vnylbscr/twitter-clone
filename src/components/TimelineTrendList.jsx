import React, { useContext } from 'react'
import { MyThemeContext } from './ThemeProvider';

const TimelineTrendList = ({ trend, tag, countTweet }) => {
    const { theme } = useContext(MyThemeContext);
    return (
        <div className="flex flex-col px-2">
            <span className="text-primary-lightgray text-sm">{trend}</span>
            <span className={`${theme === "black" ? "font-bold text-white transition-colors duration-700" : "font-bold text-black transition-colors duration-700"}`}>{tag}</span>
            <span className="text-primary-lightgray text-sm mt-1">{countTweet} Tweets</span>
        </div>
    )
}
export default TimelineTrendList;
