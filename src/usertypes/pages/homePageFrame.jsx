import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import logo from '../../assets/images/logo.svg';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/bars/topBar";
import BottomBar from "../../components/bars/bottomBar";
import BottomNavs from "../../components/bars/bottomnavs";
import LoginModal from "../../components/modals/loginmodal";


export default function HomeFrameHolder(){
    const token = localStorage.getItem('userToken');
    const navigate = useNavigate()
    const currentPath = useLocation().pathname;
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleSide, setToggleSide] = useState(false);
    const [req, setReq] = useState(false);
    const [showLoginModal,setShowLoginModal] = useState(false)

    const handleLogOut = () => {
        localStorage.clear()
    }

    const handleExitLogin = ()=>{
        setShowLoginModal(false)
    }
    return (
        <div className="min-vh-100" style={{overflow:'hidden'}}>
            <TopBar/>
            <LoginModal on={showLoginModal} off={handleExitLogin}/>
            {<Outlet/>}
            {/* <BottomBar/> */}
            <BottomNavs/>
        </div>
    )
}