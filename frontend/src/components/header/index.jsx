import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useClickOutSide from "../../helpers/clickOutSide";
import {
  ArrowDown,
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
} from "../../svg";
import { AllMenu } from "./AllMenu";
import { SearchMenu } from "./SearchMenu";
import "./style.css";
import { UserMenu } from "./UserMenu";
export const Header = () => {
  const user = useSelector((state) => state.user);
  const color = "#65676b";
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showAllMenu, setShowAllMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const AllMenuRef = useRef(null);
  const userMenuRef = useRef(null);

  useClickOutSide(AllMenuRef, () => {
    setShowAllMenu(false);
  });
  useClickOutSide(userMenuRef, () => {
    setShowUserMenu(false);
  });
  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div
          className="search search1"
          onClick={() => {
            setShowSearchMenu(true);
          }}
        >
          <div>
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search Facebook"
            className="hide_input"
          />
        </div>
      </div>
      {showSearchMenu && (
        <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} />
      )}
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
        <div className="circle_icon hover1" ref={AllMenuRef}>
          <div
            onClick={() => {
              setShowAllMenu(!showAllMenu);
            }}
          >
            <Menu />
          </div>
          {showAllMenu && <AllMenu />}
        </div>
        <div className="circle_icon hover1">
          <Messenger />
        </div>
        <div className="circle_icon hover1">
          <Notifications />
          <div className="right_notification">6</div>
        </div>
        <div className="circle_icon hover1" ref={userMenuRef}>
          <div className="" onClick={() => setShowUserMenu((prev) => !prev)}>
            <ArrowDown />
          </div>
          {showUserMenu && <UserMenu user={user} />}
        </div>
        <Link to="/profile" className="profile_link hover1">
          <img alt="" src={user?.picture} />
          <span>{user?.first_name}</span>
        </Link>
      </div>
    </header>
  );
};
