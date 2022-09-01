import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import { ArrowDown, Friends, Gaming, HomeActive, Logo, Menu, Messenger, Notifications, Search, Watch } from "../../svg";
import { useSelector } from "react-redux";
export const Header = () => {
    const user = useSelector((state) => state.user);
    return (
        <header>
            <div className="header_left">
                <Link to="/" className="header_logo">
                    <div className="circle">
                        <Logo />
                    </div>
                </Link>
                <div className="search search1">
                    <Search />
                    <input type="text" placeholder="Search Facebook" className="hide_input" />
                </div>
            </div>
            <div className="header_middle">
                <Link to="/" className="middle_icon hover1 active">
                    <HomeActive />
                </Link>
                <Link to="/" className="middle_icon hover1">
                    <Friends />
                </Link>
                <Link to="/" className="middle_icon hover1">
                    <Watch />
                    <div className="middle_notification">9+</div>
                </Link>
                <Link to="/" className="middle_icon hover1">
                    <Gaming />
                </Link>
            </div>
            <div className="header_right">

                <div className="circle_icon hover1">
                    <Menu />
                </div>
                <div className="circle_icon hover1">
                    <Messenger />
                </div>
                <div className="circle_icon hover1">
                    <Notifications />
                    <div className="right_notification">6</div>
                </div>
                <div className="circle_icon hover1">
                    <ArrowDown />
                </div>
                <Link to="/profile" className="profile_link hover1">
                    <img alt="" src={user?.picture} />
                    <span>{user?.first_name}</span>
                </Link>
            </div>
        </header >
    )
}
