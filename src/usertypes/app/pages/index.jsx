import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import AppLoginT from "./onboarding/pages/appLogin2";
import AppLogin from "./onboarding/pages/appLogin";
import Homepage from "../../pages";

const AppHome = () => {
    return (
        <div>
        <h1>Welcome to peekup</h1>
        </div>
    )
}
export default AppHome;