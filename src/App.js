import React, { useState, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./usertypes/pages";
import AppHomePage from "../src/usertypes/app";
import AppHome from "./usertypes/app/pages";
import AppLogin from "./usertypes/app/pages/onboarding/pages/appLogin";
import AppLoginT from "./usertypes/app/pages/onboarding/pages/appLogin2";
import RegUser from "./usertypes/app/pages/onboarding/pages/registeration";
import DashboardPage from "./usertypes/app/pages/dashboard";
import UserDashboard from "./usertypes/app/pages/dashboard/pages/dash";
import ProfilePage from "./usertypes/app/pages/dashboard/pages/profile";
import MessagePage from "./usertypes/app/pages/dashboard/pages/messages";
import ProductPage from "./usertypes/app/pages/dashboard/pages/products";
import SalesPage from "./usertypes/app/pages/dashboard/pages/sales";
import SettingsPage from "./usertypes/app/pages/dashboard/pages/settings";
import AppReg from "./usertypes/app/pages/onboarding/pages/appReg";
import './custom.scss'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/doc" element={<AppHome />} />
          <Route path="/support" element={<AppHome />} />

          {/* this part is for the app */}
          <Route path="/app" element={<AppHomePage />}>
            
            <Route path="/app/home" element={<AppHome />} />
            <Route path="/app/login" element={<AppLogin />} />
            <Route path="/app/reg" element={<AppReg />} />

            <Route path="/app/dash" element={<DashboardPage/>}>
              <Route index path="/app/dash" element={<UserDashboard/>}/>
              <Route path="/app/dash/profile" element={<ProfilePage/>}/>
              <Route path="/app/dash/products" element={<ProductPage/>}/>
              <Route path="/app/dash/messages" element={<MessagePage/>}/>
              <Route path="/app/dash/sales" element={<SalesPage/>}/>
              <Route path="/app/dash/settings" element={<SettingsPage/>}/>
            </Route>
          </Route>

          <Route path="admin"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
