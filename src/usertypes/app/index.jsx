import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import AppHome from "./pages";
import AppLogin from "./pages/onboarding/pages/appLogin";
import AppLoginT from "./pages/onboarding/pages/appLogin2";
import './index.css'


const AppHomePage = () => {
    return (
        <div className="mainContainer bg-danger m-0 p-0 w-100" style={{overflow:'hidden'}}>
        {<Outlet/>}
        </div>
    )
}
export default AppHomePage;