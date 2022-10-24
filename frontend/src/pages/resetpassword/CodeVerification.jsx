import { Form, Formik } from "formik";
import React, { useState } from "react";
import LoginInput from "../../components/inputs/loginInput";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
export const CodeVerification = (props) => {
  const {
    error,
    setError,
    setVisible,
    // loading,
    setLoading,
    email,
    code,
    setCode,
    user,
  } = props;
  console.log(
    "🚀 ~ file: CodeVerification.jsx ~ line 20 ~ CodeVerification ~ user",
    user
  );

  const validateCode = yup.object({
    code: yup
      .string()
      .required("Code is required")
      .min("5", "Code must be 5 character")
      .max("5", "Code must be 5 character"),
  });
  const submitCode = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/validateResetCode`,
        {
          email,
          resetCode: code,
        }
      );
      setLoading(false);
      setError("");
      setVisible(3);
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data.message);
    }
  };
  return (
    <div className="reset_form">
      <div className="reset_form_header">Code Verification</div>
      <div className="reset_form_text">
        Please enter code that been sent to your email.
      </div>
      <Formik
        enableReinitialize
        initialValues={{ code }}
        validationSchema={validateCode}
        onSubmit={submitCode}
      >
        {(formik) => (
          <Form>
            <LoginInput
              value={formik.email}
              type="tetx"
              name="code"
              placeholder="Code"
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
            {error && <div className="error_text">{error}</div>}
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
