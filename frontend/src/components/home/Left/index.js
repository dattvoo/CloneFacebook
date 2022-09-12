import React from "react";
import { LeftLink } from "./LeftLink";
import "./style.css";
import { homeLeft } from "../../../constant/HomeLeft";
import { Link } from "react-router-dom";
export const LeftHome = ({ user }) => {
  return (
    <div className="left_home">
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
    </div>
  );
};
