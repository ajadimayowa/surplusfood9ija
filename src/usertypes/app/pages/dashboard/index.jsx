import React, { useState } from "react";
import { Outlet, Routes, Route, useLocation, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import logo from '../../../../assets/images/logo.svg';
import './index.css';
import BottomNavs from "../../../../components/bars/bottomnavs";

function DashboardPage() {
    const navigate = useNavigate();
    const history = useLocation();
    const userToken = localStorage.getItem("userToken")
    const [toggleSide, setToggleSide] = useState(false);

    console.log(history.pathname);

    const guides = [
        {
            path: '/app/dash',
            title: 'Dashboard',
            icon: "bi bi-speedometer2"
        },

        {
            path: '/app/dash/products',
            title: 'Products',
            icon: "bi bi-basket2"
        },
        {
            path: '/app/dash/messages',
            title: 'Messages',
            icon: "bi bi-envelope-fill"
        },
        {
            path: '/app/dash/sales',
            title: 'Sales',
            icon: "bi bi-graph-up-arrow"
        }, {
            path: '/app/dash/profile',
            title: 'Profile',
            icon: "bi bi-person-bounding-box"
        }, {
            path: '/app/dash/settings',
            title: 'Settings',
            icon: "bi bi-gear-wide-connected"
        },
    ]

    const handleLogOut = ()=>{
        localStorage.clear();
        navigate('/')
    }
    return (
        <div className="dashboard-container w-100" style={{fontFamily:'tFontMd'}}>
            {/* this is the side bar */}
            <div
                className="sidenav"
                style={{
                    width: '20%',
                    flexDirection: 'column',
                }}>
                <div className="logo fw-bold text-light">
                    <p style={{ margin: 0, padding: 0 }}>
                        Surplus9ja
                    </p>
                </div>
                <ul className="sidenavs d-flex flex-column justify-content-center gap-4" style={{ listStyle: 'none',padding: 0 }}>
                    {
                        guides.map((tab, index) => <Link key={index} to={tab.path} style={{ zIndex: 2, textDecoration:'none' }}>
                            <li className="py-3" 
                            style={{ backgroundColor: tab.path == history.pathname.toString() ? '#fff' : null, color: tab.path == history.pathname.toString() ? '#0b9960' : '#fff' }}>
                                <div className="gap-4" style={{ display: 'flex', alignItems: 'center', gap: 5, paddingInline: 20, zIndex: 3 }} >
                                    <span className="p-0 m-0">
                                    <i className={tab.icon}></i>
                                    </span>
                                    <p className="p-0 m-0">{tab.title}</p>
                                </div></li></Link>)
                    }
                </ul>

                <div className="logout py-3 gap-4" 
                onClick={handleLogOut}
                style={{ display: 'flex', 
                alignItems: 'center', gap: 5, 
                paddingInline: 20, zIndex: 3, color:'#fff' }}>
                    <span className="p-0 m-0">
                    <i className="bi bi-box-arrow-left"></i>
                    </span>
                    <p className="p-0 m-0">Logout</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div className="topnav d-flex align-items-center px-4 justify-content-between">
                    <a  className="navbar-brand" href="/surplus">
                        <img src={logo} width="100" height="80" alt="logo" />
                    </a>
                    <i className="bi bi-text-left text-primary" onClick={() => setToggleSide(!toggleSide)} style={{ fontSize: '1.5em' }}></i>
                </div>
                <div className="mainpage">
                <div className={`${toggleSide ? 'sideBarDash' : 'offSideBarDash'} 
            w-100 bg-primary`} style={{ zIndex: 600 }}>

                        <ul className="d-flex mobNavLinks flex-column w-100 px-0 gap-2"
                            style={{ listStyle: 'none', textAlign: 'center', color: '#fff', textDecoration: 'none' }}>
                            <Link to='/app/dash' onClick={() => setToggleSide(!toggleSide)}> <li className="w-100 py-3">Home</li></Link>
                            <Link to='/app/dash/products' onClick={() => setToggleSide(!toggleSide)} ><li className="w-100 py-3">Products</li></Link>
                            <Link to='/app/dash/messages' onClick={() => setToggleSide(!toggleSide)} ><li className="w-100 py-3">Inbox</li></Link>
                            <Link to='/app/dash/sales' onClick={() => setToggleSide(!toggleSide)}><li className="w-100 py-3">Sales</li></Link>
                            <Link to='/app/dash/profile' onClick={() => setToggleSide(!toggleSide)}><li className="w-100 py-3">Profile</li></Link>
                            <Link to='/app/dash/settings' onClick={() => setToggleSide(!toggleSide)}><li className="w-100 py-3">Settings</li></Link>
                            


                        </ul>

                        <div className="d-flex justify-content-center mt-5  w-100"
                            onClick={() => setToggleSide(!toggleSide)}>
                                <Button onClick={handleLogOut} variant="outline-secondary">Logout</Button>
                        </div>

                    </div>

                    {/* main render component page */}
                    {<Outlet />}

                </div>
                <BottomNavs/>

            </div>
        </div>
    )
}
export default DashboardPage;