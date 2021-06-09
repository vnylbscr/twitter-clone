import React, { useContext } from 'react'
import BottomProfile from './BottomProfile';

import {
    TwitterIcon,
    HomeIcon,
    ExploreIcon,
    NotificationIcon,
    MessageboxIcon,
    BookmarksIcon,
    ListsIcon,
    ProfileIcon,
    MoreIcon
} from "./Icons";
import SideLink from "./SideLink";
import { MyThemeContext } from './ThemeProvider';
// side Links -->
const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon
    },
    {
        name: "Explore",
        icon: ExploreIcon
    },
    {
        name: "Notification",
        icon: NotificationIcon
    },
    {
        name: "Message",
        icon: MessageboxIcon
    },
    {
        name: "Bookmarks",
        icon: BookmarksIcon
    },
    {
        name: "Lists",
        icon: ListsIcon
    },
    {
        name: "Profile",
        icon: ProfileIcon
    },
    {
        name: "More",
        icon: MoreIcon
    }
]

const Sidebar = () => {
    const { theme } = useContext(MyThemeContext);
    return (
        // side bar 
        <div className="sticky top-0 h-screen flex flex-col justify-between">
            {/* main content */}
            <nav className="ml-5">
                <ul>
                    {/* Icon */}
                    <div className={`${theme === "black" ? "text-white w-14 h-14 hover:bg-primary-darkgray flex justify-center items-center rounded-full transition-all duration-500 ml-1" : "text-primary-blue-base w-14 h-14 hover:bg-primary-darkgray flex justify-center items-center rounded-full transition-all duration-500 ml-1"} "`}>
                        <TwitterIcon className="w-9 h-9" />
                    </div>
                    {/*Side Links */}
                    {sideLinks.map((item) => {
                        return (
                            <SideLink key={item.name} name={item.name} Icon={item.icon} />
                        )
                    })}
                </ul>
                {/* Tweet Button  */}
                <div className="my-2 text-white">
                    <button className="bg-primary-blue-base focus:outline-none rounded-full shadow-2xl hover:bg-primary-blue-dark  text-white h-12 transition-colors duration-500
                    w-64 text-lg font-bold"
                    >Tweet</button>
                </div>
                
            </nav>
            <BottomProfile />
        </div>
    )
}

export default Sidebar;

