import React, { useEffect, useRef, useState } from 'react'
import useClickOutSide from '../../../helpers/clickOutSide';
import { Search, Return } from '../../../svg'
import "./style.css";
export const SearchMenu = ({ color, setShowSearchMenu }) => {
    const SearchMenuRef = useRef(null);
    const inputRef = useRef(null);
    const [iconVisible, setIconVisible] = useState(true);
    useClickOutSide(SearchMenuRef, () => {
        setShowSearchMenu(false);
    })
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <div className="header_left search_area scrollbar" ref={SearchMenuRef}>
            <div className="search_wrap">
                <div className="header_logo">
                    <div className="circle hover1" onClick={() => { setShowSearchMenu(false) }}>
                        <Return color={color} />
                    </div>
                </div>
                <div className="search" onClick={() => { inputRef.current.focus() }}>
                    {iconVisible && (<div>
                        <Search color={color} />
                    </div>)
                    }
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search Facebook"
                        onFocus={() => { setIconVisible(false) }}
                        onBlur={() => { setIconVisible(true) }} />
                </div>
            </div>
            <div className="search_history_header">
                <span>Recently searches</span>
                <a href="#!">Edit</a>
            </div>
            <div className="search_history"></div>
            <div className="search_resuilt scrollbar"></div>
        </div>
    )

}