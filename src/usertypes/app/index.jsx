import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import AppHome from "./pages";
import AppLogin from "./pages/onboarding/pages/appLogin";
import AppLoginT from "./pages/onboarding/pages/appLogin2";
import './index.css'


const AppHomePage = () => {
    return (
        <div className="mainContainer" style={{overflow:'hidden'}}>
        {<Outlet/>}
        </div>
    )
}
export default AppHomePage;