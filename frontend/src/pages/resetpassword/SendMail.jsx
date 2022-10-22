import React from "react";
import { Link } from "react-router-dom";

export const SendMail = ({ userInfos }) => {
  return (
    <div className="reset_form dynamic_height">
      <div className="reset_form_header">Reset Your Password</div>
      <div className="reset_grid">
        <div className="reset_left">
          <div className="reset_form_text">
            How do you want to recieve the code to reset your password?
          </div>
          <label htmlFor="email" className="hover1">
            <input type="radio" name="email" id="email" checked readOnly />
            <div className="label_col">
              <span>Send code via email</span>
              <span>{userInfos?.email}</span>
            </div>
          </label>
        </div>
        <div className="reset_right">
          <img src={userInfos?.picture} alt="" />
          <span>{userInfos?.email}</span>
          <span>{userInfos?.username}</span>
        </div>
      </div>
      <div className="reset_form_btns">
        <Link to="/login" className="gray_btn">
          Not You?
        </Link>
        <button type="submit" className="blue_btn">
          Continute
        </button>
      </div>
    </div>
  );
};
