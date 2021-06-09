import React, { useState, useEffect, useContext } from 'react'
import { db } from "./firebase";
import profileImage from '../assets/mert.jpg';
import BottomContentLink from './BottomContentLink';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
    TopTweetsIcon,
    MediaIcon,
    GifIcon,
    PollIcon,
    EmojiIcon,
    ScheduleIcon,
    LoadingIcon
} from "./Icons";
import Tweet from './Tweet';
import { MyThemeContext } from './ThemeProvider';
import ToggleTheme from "./ToggleTheme";
import firebase from "firebase";

const bottomContentLinks = [
    {
        name: "Media",
        icon: MediaIcon
    },
    {
        name: "GIF",
        icon: GifIcon
    },
    {
        name: "Poll",
        icon: PollIcon
    },
    {
        name: "Emoji",
        icon: EmojiIcon
    },
    {
        name: "Schedule",
        icon: ScheduleIcon
    }
]
const Content = () => {
    // use theme mode
    const { theme } = useContext(MyThemeContext);
    const [tweet, setTweet] = useState("");
    const [loading, setLoading] = useState(false);
    const [tweetFromFirestore, setTweetFromFirestore] = useState([]);
    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("tweets").
            orderBy("createdAt", "desc").
            onSnapshot(querySnapshot => {
                let tweets = [];
                querySnapshot.docs.map(documentSnapshot => {
                    const firebaseData = {
                        id: documentSnapshot.id,
                        ...documentSnapshot.data()
                    }
                    tweets.push(firebaseData);
                })
                setTweetFromFirestore(tweets);
            })
        return () => {
            // clean up
            unsubscribe();
        }
    }, []);

    const handleSetInput = e => {
        setTweet(e.target.value);
    }
    // save tweet to firestore database
    const saveTweetToFirestore = async () => {
        setLoading(true);
        setTweet("");
        await firebase.firestore().collection('tweets').add({
            content: tweet,
            createdAt: new Date(),
            user: "Guest",
            username: "@guest",
            userImg: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        });
        setLoading(false);
    }
    return (
        <main className={`${theme === 'black' ? "flex flex-1 flex-col bg-primary-black transition-colors duration-700 h-full border-r border-l border-gray-700" : "flex flex-1 flex-col h-full border-r border-l border-gray-300 bg-white transition-colors duration-700"}`}>
            {/* Header */}
            <header className={`${theme === "black" ? "bg-primary-black text-white flex sticky top-0 z-50 flex-row h-16 border-b border-gray-700 justify-between transition-colors duration-700 px-4 py-4   " : "bg-white text-black flex sticky top-0 z-50 flex-row h-16 border-b border-gray-300 justify-between transition-colors duration-700 px-4 py-4 "}`}>
                <span className="font-extrabold text-xl">Home</span>
                <ToggleTheme />
                <div className="has-tooltip rounded-full hover:bg-primary-opacity flex items-center justify-center w-10 h-10 cursor-pointer">
                    <TopTweetsIcon className="w-7 h-7 text-primary-blue-base" />
                    <span className="tooltip bg-primary-darkgray mb-10 text-white text-xs w-20 h-6 flex items-center justify-center rounded-sm pl-2">
                        Top Tweets
                    </span>
                </div>
            </header>
            {/* Add Tweet Area */}
            <div className="flex flex-row h-44 w-full my-4 pl-4">
                <img src={profileImage} alt="Profile Image" className="w-12 h-12 rounded-full hover:opacity-80 transition-opacity duration-300" />
                <div className="pl-3 w-full flex flex-col">
                    <div className="h-full ml-2 flex flex-col">
                        <textarea type="text" className={`${theme === "black" ? "w-full pb-28 bg-transparent  text-white text-xl focus:outline-none break-words resize-none overflow-y-hidden border-b transition-colors duration-700 border-gray-700 mb-5" : "w-full pb-28 bg-transparent  text-black text-xl focus:outline-none break-words resize-none overflow-y-hidden border-b transition-colors duration-700 border-gray-300 mb-5"}`}
                            placeholder="What's happening?"
                            onChange={handleSetInput}
                            maxLength={140}
                            value={tweet || ""}
                        />
                        <div className="flex justify-between">
                            <div className="flex flex-row items-center">
                                {
                                    loading &&
                                    <LoadingIcon className="mb-10 mx-5" />
                                }
                                {
                                    bottomContentLinks.map(item => {
                                        return (
                                            <BottomContentLink key={item.name} name={item.name} Icon={item.icon} />
                                        )
                                    })
                                }
                                {
                                    tweet &&
                                    <div className="w-full h-full flex justify-center items-start mt-5 ml-3">
                                        <CircularProgressbar maxValue={140} value={tweet.length}
                                            className="w-6 h-6" />
                                    </div>
                                }

                            </div>
                            <button className={`${tweet ? "bg-primary-blue-base hover:bg-primary-blue-dark rounded-full mr-4 focus:outline-none w-1/6 h-3/6 mb-4 text-white text-l font-bold" : "bg-primary-blue-base opacity-40 rounded-full mr-4 w-1/6 h-3/6 mb-4 text-white text-l font-bold focus:outline-none pointer-events-none"}`}
                                onClick={() => saveTweetToFirestore()}>
                                Tweet
                            </button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            {
                tweetFromFirestore.length === 0 &&
                <div className="flex items-center justify-center">
                    <LoadingIcon className="w-9 h-9 text-primary-blue-base" />
                </div>
            }
            {/* Tweet Content */}
            <div className="my-4 h-full">
                {
                    tweetFromFirestore.map(item => {
                        return (
                            <div key={item.id} className="w-full">
                                <Tweet user={item.user} username={item.username} profileImage={item.userImg} createdAt={item.createdAt} content={item.content} />
                            </div>
                        )
                    })
                }
            </div>
            

        </main>
    )
}
export default Content;
