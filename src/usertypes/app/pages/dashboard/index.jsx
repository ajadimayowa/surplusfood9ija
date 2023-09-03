import React from "react";
import { Outlet, Routes, Route, useLocation, Link } from "react-router-dom";
import './index.css';

function DashboardPage() {
    const history = useLocation();

    console.log(history.pathname);

    const guides = [
        {
            path: '/app/dash',
            title: 'Dashboard',
            icon: ''
        },

        {
            path: '/app/dash/products',
            title: 'Products',
            icon: ''
        },
        {
            path: '/app/dash/messages',
            title: 'Messages',
            icon: ''
        },
        {
            path: '/app/dash/sales',
            title: 'Sales',
            icon: ''
        }, {
            path: '/app/dash/profile',
            title: 'Profile',
            icon: ''
        }, {
            path: '/app/dash/settings',
            title: 'Settings',
            icon: ''
        },
    ]
    return (
        <div className="dashboard-container bg-info w-100">
               {/* this is the side bar */}
               <div
                className="sidenav"
                style={{
                    width: '20%', display: 'flex',
                    flexDirection: 'column',
                }}>
                <div className="logo">	
                    <p style={{ margin: 0, padding: 0 }}>
                        Brand Logo
                    </p>
                </div>
                <ul className="sidenavs" style={{ listStyle: 'none', backgroundColor: 'yellow', padding: 0 }}>
                    {
                        guides.map((tab) => <Link to={tab.path} style={{ zIndex: 2 }} >
                            <li style={{ backgroundColor: tab.path == history.pathname.toString() ? 'pink' : null }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5, paddingInline: 20, zIndex: 3 }} >
                                    <span>icon</span><p >{tab.title}</p>
                                </div></li></Link>)
                    }
                </ul>

                <div className="logout" style={{ display: 'flex', alignItems: 'center', gap: 5, paddingInline: 20, zIndex: 3 }}>
                    <span>Icon</span>
                    <p>Logout</p>
                </div>
            </div>

             <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div className="topnav">topbar</div>
                <div className="mainpage">
                    {<Outlet/>}
                </div>
            </div>
        </div>
    )
}
export default DashboardPage;