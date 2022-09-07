import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DisplayAccessbility } from "../DisplayAccessbility";
import HelpSupport from "../HelpSupport";
import  SettingPrivacy  from "../SettingPrivacy";
import "./style.css";
export const UserMenu = ({ user }) => {
  const [visible, setVisible] = useState(0);
  return (
    <div className="mmenu">
      {visible === 0 && (
        <div className="">
          <Link to="/profile" className="mmenu_header hover3">
            <img src={user?.picture} alt="User_Picture" />
            <div className="mmenu_col">
              <span>
                {user?.first_name}
                {user?.last_name}
              </span>
              See your profile
            </div>
          </Link>
          <div className="mmenu_splitter"></div>
          <div className="mmenu_main hover3">
            <div className="small_circle">
              <i className="report_filled_icon"></i>
            </div>
            <div className="mmenu_col">
              <div className="mmenu_span1">Give Feedback</div>
              <div className="mmenu_span2">Help us improve facebook</div>
            </div>
          </div>

          <div className="mmenu_splitter"></div>
          <div className="mmenu_item hover3" onClick={() => setVisible(1)}>
            <div className="small_circle">
              <i className="settings_filled_icon" ></i>
            </div>
            <span>Setting & privacy</span>
            <div className="rArrow">
              <div className="right_icon"></div>
            </div>
          </div>

          <div className="mmenu_splitter"></div>
          <div className="mmenu_item hover3" onClick={() => setVisible(2)}>
            <div className="small_circle">
              <i className="help_filled_icon"></i>
            </div>
            <span>Help & Support</span>
            <div className="rArrow">
              <div className="right_icon"></div>
            </div>
          </div>

          <div className="mmenu_splitter"></div>
          <div className="mmenu_item hover3" onClick={() => {setVisible(3)}}>
            <div className="small_circle">
              <i className="dark_filled_icon"></i>
            </div>
            <span>Display & Accessbility</span>
            <div className="rArrow">
              <div className="right_icon"></div>
            </div>
          </div>

          <div className="mmenu_splitter"></div>
          <div className="mmenu_item hover3">
            <div className="small_circle">
              <i className="logout_filled_icon"></i>
            </div>
            <span>Logout</span>
          </div>
        </div>
      )}
      {visible === 1 && <SettingPrivacy setVisible={setVisible}/>}
      {visible === 2 && <HelpSupport setVisible={setVisible}/>}
      {visible === 3 && <DisplayAccessbility setVisible={setVisible}/>}
    </div>
  );
};
