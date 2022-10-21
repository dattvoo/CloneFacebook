import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import * as Yup from "yup";
export const ChangePassword = (props) => {
  const { password, setPassword, conf_pass, setConfPass } = props;
  const validatePassword = Yup.object({
    password: Yup.string()
      .required("Password is required!")
      .min("6", "Password must be atleast 6 characters")
      .max("32", "Password can't be more than 36 character"),
    conf_pass: Yup.string()
      .required("Confirm password is required!")
      .oneOf([Yup.ref("password")], "Confirm password is not match"),
  });

  return (
    <div className="reset_form" style={{ height: "320px" }}>
      <div className="reset_form_header">Change Password</div>
      <div className="reset_form_text">Pick a strong password.</div>
      <Formik
        enableReinitialize
        initialValues={{ password, conf_pass }}
        validationSchema={validatePassword}
      >
        {(formik) => (
          <Form>
            <LoginInput
              value={formik.email}
              type="password"
              name="password"
              placeholder="New Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <LoginInput
              value={formik.email}
              type="password"
              name="conf_pass"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfPass(e.target.value);
              }}
            />
            {/* {error && <div className="error_text">{error}</div>} */}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancle
              </Link>
              <button type="submit" className="blue_btn">
                Continute
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
