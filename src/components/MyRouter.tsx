import React from "react";
import { Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import CONSTANT from "../configs/CONSTANT";

import Header from "./Header";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About/AboutPage";
import LoginPage from "../pages/Login/LoginPage";
import AuthCheck from "./AuthCheck/AuthCheck";
import MainLayout from "./MainLayout/MainLayout";

// const history = createBrowserHistory()

const MyRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={CONSTANT.ROUTES.LOGIN} component={LoginPage} />
        <AuthCheck>
          {/* <MainLayout> */}
          <Header></Header>
          <Route exact path={CONSTANT.ROUTES.HOME} component={HomePage} />
          <Route path={CONSTANT.ROUTES.ABOUT} component={AboutPage} />
          {/* </MainLayout> */}
        </AuthCheck>
      </Switch>
    </Router>
  );
};

export default MyRouter;
