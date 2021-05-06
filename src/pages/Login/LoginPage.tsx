import React from "react";
import styles from "./index.module.scss";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { loginToServer } from "../../slices/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleDevBtnClick = () => {
    dispatch(loginToServer({ username: "admin", password: "admin" }));
  };

  return (
    <div className={styles.LoginContainer}>
      <h2>Login Page</h2>
      <h2>To be implemented</h2>
      <Button onClick={handleDevBtnClick}>Dev</Button>
    </div>
  );
};

export default LoginPage;
