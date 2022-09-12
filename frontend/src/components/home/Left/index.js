import React, { useState } from "react";
import { Link } from "react-router-dom";
import { homeLeft } from "../../../constant/HomeLeft";
import { ArrowDown1 } from "../../../svg";
import { LeftLink } from "./LeftLink";
import "./style.css";
export const LeftHome = ({ user }) => {
  const [visiable, setVisiable] = useState(false);
  return (
    <div className="left_home scrollbar">
      <Link to="/profile">
        <div className="left_link hover1">
          <img src={user?.picture} alt="Avatar" />
          <span>
            {user.first_name} {user.last_name}
          </span>
        </div>
      </Link>
      {homeLeft.slice(0, 8).map((item, index) => (
        <LeftLink
          key={index}
          imgLink={item?.img}
          notification={item?.notification}
          text={item?.text}
        />
      ))}
      {!visiable && (
        <div
          className="left_link hover1"
          onClick={() => setVisiable((prev) => !prev)}
        >
          <div className="small_circle">
            <ArrowDown1 />
          </div>
          <span>See more</span>
        </div>
      )}
      {visiable && (
        <div className="more_left">
          {homeLeft.slice(8, homeLeft.length).map((item, index) => (
            <LeftLink
              key={index}
              imgLink={item?.img}
              notification={item?.notification}
              text={item?.text}
            />
          ))}
          <div
            className="left_link hover1"
            onClick={() => setVisiable((prev) => !prev)}
          >
            <div className="small_circle rotate360">
              <ArrowDown1 />
            </div>
            <span>Show less</span>
          </div>
        </div>
      )}
      <div className="splitter"></div>
      <div className="shortcut">
        <div className="heading">Your Shortcuts</div>
        <div className="edit_shortcut">Edit</div>
      </div>
      <div className="shortcut_list"></div>

      <div className={`fb_coppyright ${visiable && "relative_fb_coppyright"} `}>
        <Link to="/">Privacy</Link>
        <span>.</span>
        <Link to="/">Terms</Link>
        <span>.</span>
        <Link to="/">Advertising</Link>
        <span>.</span>
        <Link to="/">
          Ad choice <i className="ad_choices_icon"></i>{" "}
        </Link>
        <span>.</span>
        <Link to="/">Cookies</Link>
        <span>.</span>
        <br />
        Meta © 2022
      </div>
    </div>
  );
};
