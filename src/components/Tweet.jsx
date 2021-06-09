import React, { useContext } from 'react'
import { MyThemeContext } from './ThemeProvider';
import {
    CommentsIcon,
    RetweetIcon,
    LikeIcon,
    ShareIcon,
    DotMenuIcon
} from "./Icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// dayjs 
dayjs.extend(relativeTime);

// show all tweet component
const Tweet = ({ content, profileImage, username, user, createdAt }) => {

    const { theme } = useContext(MyThemeContext);
    const convertedDate = dayjs(createdAt.toDate()).fromNow();
    return (
        <div className={`${theme === 'black' ? "h-44 w-full flex flex-row items-center pl-4 my-5 border-b border-gray-700 transition-colors duration-700" : "h-44 w-full flex flex-row items-center pl-4 my-5 border-b border-gray-300 transition-colors duration-700"}`}>
            <img src={profileImage} alt="User profile image" className="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer transition-opacity duration-300" />
            <div className="flex flex-col pl-4 w-full">
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <span className={`${theme === 'black' ? "text-white text-base transition-colors duration-700 font-bold hover:underline cursor-pointer" :
                            "text-black text-base font-bold hover:underline cursor-pointer transition-colors duration-700"}`} >{user}</span>
                        <span className="font-normal text-sm text-primary-darkgray pl-1 cursor-pointer">{username}</span>
                        <span className="font-normal text-sm text-primary-darkgray ml-3">{convertedDate}</span>
                    </div>
                    <div className="group cursor-pointer mr-2">
                        <div className="w-8 h-8 group-hover:bg-primary-opacity rounded-full flex items-center justify-center">
                            <DotMenuIcon className="w-6 h-6 text-primary-darkgray group-hover:text-primary-blue-base" />
                        </div>
                    </div>
                </div>
                <span className={`${theme === 'black' ? "text-white w-full h-full break-words pr-4 text-base transition-colors duration-700 font-normal" :
                    "text-black  w-full h-full text-base pr-4 font-normal break-words transition-colors duration-700"}`}>{content}</span>
                {/* Retweet Love Comments Share Icon */}
                <div className="flex items-center w-full justify-between justify-items-end mt-8 text-primary-darkgray">
                    <div className="flex items-center group">
                        <div className="flex group-hover:bg-primary-opacity items-center cursor-pointer justify-center w-7 h-7 rounded-full">
                            <CommentsIcon className="w-5 h-5 group-hover:text-primary-blue-base " />
                        </div>
                        <span className="text-sm pl-2">724</span>
                    </div>
                    <div className="flex items-center group">
                        <div className="flex group-hover:bg-green-200 items-center cursor-pointer justify-center w-7 h-7 rounded-full">
                            <RetweetIcon className="w-5 h-5 group-hover:text-green-500 " />
                        </div>
                        <span className="text-sm pl-2">15.3K</span>
                    </div>
                    <div className="flex items-center group ">
                        <div className="group-hover:bg-red-300 rounded-full w-7 h-7 cursor-pointer flex items-center justify-center">
                            <LikeIcon className="w-5 h-5 group-hover:text-red-500" />
                        </div>
                        <span className="text-sm pl-2">190K</span>
                    </div>
                    <div className="flex items-center group ">
                        <div className="group-hover:bg-primary-opacity rounded-full w-7 h-7 cursor-pointer flex items-center justify-center">
                            <ShareIcon className="w-5 h-5 group-hover:text-primary-blue-base" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet;
