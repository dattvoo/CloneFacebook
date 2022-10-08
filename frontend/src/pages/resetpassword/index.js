import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import "./style.css";
export const ResetPassword = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const logout = () => {
    Cookies.set("user", "");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className="reset">
      <div className="reset_header">
        <img src="../../../icons/facebook.svg" alt="" />
        {user ? (
          <div className="right_reset">
            <Link to="/profile">
              <img src={user.picture} alt="" />
            </Link>
            <button
              className="blue_btn"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="right_reset">
            <button className="blue_btn">Login</button>
          </Link>
        )}
      </div>
      <div className="reset_wrap">
        <div className="reset_form">
          <div className="reset_form_header">Find Your Account</div>
          <div className="reset_form_text">
            Please enter your mail address or mobile number to search for your
            account.
          </div>
          <Formik enableReinitialize initialValues={{ email }}>
            {(formik) => (
              <Form>
                <LoginInput
                  value={formik.email}
                  type="tetx"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {error && <div className="error_text">{error}</div>}
                <div className="reset_form_btns">
                  <Link to="/login" className="gray_btn">
                    Cancle
                  </Link>
                  <button type="submit" className="blue_btn">Search</button>
                </div>
              </Form>

            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
