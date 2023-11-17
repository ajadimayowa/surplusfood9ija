import React, { useState } from "react";
import Style from './css/topbar.module.css';
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import { Button } from "react-bootstrap";
import LoginModal from "../modals/loginmodal";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    const currentPath = useLocation().pathname;
    const token = localStorage.getItem('userToken');
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleSide, setToggleSide] = useState(false);
    const [req, setReq] = useState(false);
    const [showLoginModal,setShowLoginModal] = useState(false);
    const navigate = useNavigate();


    const handleLoginCheck = ()=>{
      
            setShowLoginModal(true)
      
    }

    const handleExitLogin = ()=>{
        setShowLoginModal(false)
    }

    return (
        <div className={`navbar bg-light shadow-sm sticky px-4 py-0
        justify-content-between align-items-center navbar-expand-lg ${Style.container}`}>
            <LoginModal on={showLoginModal} off={handleExitLogin}/>
            <a className="navbar-brand m-0 p-0" href="/surplus">
                <img src={logo} width="70" height="70" alt="logo" />
            </a>
            <div className="d-flex gap-4 justify-content-end align-items-center">
                <ul className="navLinks gap-5 align-items-center p-0 m-0" style={{ listStyle: 'none', }}>
                    <li ><Link to={token == null ? '/surplus' : '/app/dash'} style={{ color: currentPath == '/surplus' && '#0E6C4D' }}>{token == null ? 'Home' : 'Dashboard'}</Link></li>
                    <li><Link to='how-it-works' style={{ color: currentPath == '/surplus/how-it-works' && '#0E6C4D' }}>How it works</Link></li>
                    <li><Link to='about-us' style={{ color: currentPath == '/surplus/about-us' && '#0E6C4D' }}>About us</Link></li>
                    <li><Link to='contact-us' style={{ color: currentPath == '/surplus/contact-us' && '#0E6C4D' }}>Contact us</Link></li>
                </ul>
                <Link id="loginButton" to='/app/login'>
                    <Button>Sign in</Button>
                </Link>
                <div className="toggler text-primary gap-3" style={{ fontSize: '1.3em', cursor: 'pointer' }}>
                    {token? <i className="bi bi-person-circle"></i> :<i className="bi bi-person-circle" onClick={()=>handleLoginCheck()}></i>}
                    {/* <i className="bi bi-text-left" onClick={() => setToggleSide(!toggleSide)}></i> */}
                </div>
            </div>
        </div>
    )
}
export default TopBar;