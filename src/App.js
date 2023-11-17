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
import LoaderPage from "./usertypes/pages/loaderpage";
import HomeHolder from "./usertypes/pages/homeHolder";
import AboutUs from "./usertypes/app/pages/others/aboutus";
import TermsandCon from "./usertypes/app/pages/others/tandcon";
import Support from "./usertypes/app/pages/others/support";
import Privacy from "./usertypes/app/pages/others/privacy";
import ContactUs from "./usertypes/app/pages/others/contactus";
import "./custom.scss";
import HowItWorks from "./usertypes/app/pages/others/howitworks";
import HomeFrameHolder from "./usertypes/pages/homePageFrame";
import SearchItemPage from "./usertypes/app/pages/others/searchItem";
import RegPage from "./usertypes/app/pages/onboarding/pages/registrations";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoaderPage/>} />
          <Route path="/surplus" element={<HomeFrameHolder/>}>
            <Route index element={<Homepage />}/>
            <Route path="search" element={<SearchItemPage/>} />
            <Route path="register" element={<RegPage/>} />
            <Route path="about-us" element={<AboutUs/>} />
            <Route path="how-it-works" element={<HowItWorks/>} />
            <Route path="contact-us" element={<ContactUs/>} />
            <Route path="t&c" element={<TermsandCon/>} />
            <Route path="support" element={<Support />} />
            <Route path="privacy" element={<Privacy/>} />    
          </Route>

          {/* this part is for the app */}
          <Route path="/app" element={<AppHomePage />}>
            <Route index path="/app/login" element={<AppLogin />} />
            <Route path="/app/home" element={<AppHome />} />
            <Route path="/app/reg" element={<AppReg />} />

            <Route path="/app/dash" element={<DashboardPage/>}>
              <Route index path="/app/dash" element={<UserDashboard />} />
              <Route path="/app/dash/profile" element={<ProfilePage />} />
              <Route path="/app/dash/products" element={<ProductPage />} />
              <Route path="/app/dash/messages" element={<MessagePage />} />
              <Route path="/app/dash/sales" element={<SalesPage />} />
              <Route path="/app/dash/settings" element={<SettingsPage />} />
            </Route>
          </Route>

          <Route path="admin"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
