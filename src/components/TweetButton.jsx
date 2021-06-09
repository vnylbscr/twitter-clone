import React from 'react'

// tweet Button
const TweetButton = ({ className, title, ...props }) => {
    return (
        <button className={className} {...props}>
            {title}
        </button>
    )
}
export default TweetButton;
