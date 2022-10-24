import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SearchAccount } from "./SearchAccount";
import { SendMail } from "./SendMail";
import { CodeVerification } from "./CodeVerification";
import "./style.css";
import Footer from "../../components/login/Footer";
import { ChangePassword } from "./ChangePassword";
export const ResetPassword = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [conf_pass, setConfPass] = useState("");
  const [userInfos, setUserInfos] = useState("");

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
        {visible === 0 && (
          <SearchAccount
            email={email}
            error={error}
            setEmail={setEmail}
            setLoading={setLoading}
            setVisible={setVisible}
            setError={setError}
            setUserInfos={setUserInfos}
          />
        )}
        {visible === 1 && userInfos && (
          <SendMail
            userInfos={userInfos}
            email={email}
            error={error}
            setEmail={setEmail}
            setLoading={setLoading}
            setVisible={setVisible}
            setError={setError}
          />
        )}
        {visible === 2 && (
          <CodeVerification
            email={email}
            error={error}
            setEmail={setEmail}
            setLoading={setLoading}
            setVisible={setVisible}
            setError={setError}
            code={code}
            setCode={setCode}
            user={user}
          />
        )}
        {visible === 3 && (
          <ChangePassword
            password={password}
            setPassword={setPassword}
            conf_pass={conf_pass}
            setConfPass={setConfPass}
            user={user}
            email={email}
            setLoading={setLoading}
            error={error}
            setError={setError}

          />
        )}
      </div>
      <Footer />
    </div>
  );
};
