import React from "react";
import Home from "pages/Home/Home";
import { BrowserRouter, Route, Routes as RootRoutes } from "react-router-dom";
import DefaultLayout from "layout/DefaultLayout/DefaultLayout";
import Recharge from "pages/Recharge/Recharge";
import Login from "pages/Login/Login";
import DashBoard from "pages/DashBoard/DashBoard";

const Routes = () => {
  return (
    <BrowserRouter>
      <RootRoutes>
        <Route element={<DefaultLayout />} path="/">
          <Route element={<Home />} index />
          <Route element={<Recharge />} index path="recharge" />
          <Route element={<Login />} path="login" />
          <Route element={<DashBoard />} path="dashboard/promoter" />
        </Route>
      </RootRoutes>
    </BrowserRouter>
  );
};

export default Routes;
