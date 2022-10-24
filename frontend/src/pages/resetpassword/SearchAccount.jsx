import { Form, Formik } from "formik";
import React, { useState } from "react";
import LoginInput from "../../components/inputs/loginInput";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

export const SearchAccount = (props) => {
  const {
    email,
    error,
    setError,
    setEmail,
    setVisible,
    setLoading,
    setUserInfos,
  } = props;
  const validateEmail = yup.object({
    email: yup
      .string()
      .required("Email address is required")
      .email("Must be a valid email address")
      .max("50", "Email address can't be more than 50 characters"),
  });
  const handleSearch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/findUser`,
        {
          email,
        }
      );
      setUserInfos(data);
      setLoading(false);
      setVisible(1);
    } catch (error) {
     
      setLoading(false);
      setError(error.respone.data.message);
    }
  };

  return (
    <div className="reset_form">
      <div className="reset_form_header">Find Your Account</div>
      <div className="reset_form_text">
        Please enter your mail address or mobile number to search for your
        account.
      </div>
      <Formik
        enableReinitialize
        initialValues={{ email }}
        validationSchema={validateEmail}
        onSubmit={handleSearch}
      >
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
              <button type="submit" className="blue_btn">
                Search
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
