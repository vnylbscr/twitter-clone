import React, { useRef, useState } from 'react'
import Picker from 'emoji-picker-react';

// MERT GENÇ
const BottomContentLink = ({ className, Icon, name }) => {
    const inputRef = useRef();
    const onClickIcon = () => {
        inputRef.current.click();
    }
    return (
        <div className={`has-tooltip items-center justify-center flex rounded-full hover:bg-primary-opacity mb-10 ${className} h-12 px-2 cursor-pointer`} onClick={onClickIcon}>
            <input type="file" style={{ display: 'none' }} ref={inputRef} />
            <Icon className="w-7 h-7 text-primary-blue-base" />
            <span className="tooltip bg-primary-darkgray mt-20 text-white text-xs w-16 h-6 flex items-center justify-center rounded-sm">
                {name}
            </span>
        </div>
    )
}
export default BottomContentLink;
