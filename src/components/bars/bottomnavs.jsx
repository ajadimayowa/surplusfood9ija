import React, { useState, useEffect } from "react";
import Style from './css/bottomNavs.module.css';
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginModal from "../modals/loginmodal";


const BottomNavs = ({ }) => {
    const currentPath = useLocation().pathname;
    const token = localStorage.getItem('userToken');
    const location = useLocation();
    const navigate = useNavigate();
    const [showLoginModal, setShowLoginModal] = useState(false);

    

    const handleExitLogin = () => {
        setShowLoginModal(false)
    }

    const menus = [
        {
            title: 'Home',
            icon: 'bi-house-door',
            path: '/surplus'
        },
        {
            title: 'Saved',
            icon: 'bi-basket2',
            path: '/app/dash'
        },
        {
            title: 'Sell',
            icon: 'bi-bag-check',
            path: '/app/dash'
        },
        {
            title: 'Messages',
            icon: 'bi-envelope',
            path: '/app/dash'
        },
        {
            title: 'Profile',
            icon: 'bi-person',
            path: '/app/dash'
        },
    ]

    const handleLoginCheck = (pathUrl) => {
        if (token) {
            navigate(pathUrl)

        } else {
            setShowLoginModal(true)
        }
    }
    return (
        <div className={`bg-light justify-content-between w-100 shadow-sm sticky px-4 
        ${currentPath=='/surplus/register'? Style.offBottomNav : Style.container}`}>
           
            <LoginModal on={showLoginModal} off={handleExitLogin} />
            {
                menus.map((menu, index) => (
                    <div
                        key={index}
                        onClick={() => handleLoginCheck(menu.path)}
                        className="d-flex flex-column text-primary justify-content-center  align-items-center"
                        style={{ fontFamily: 'tFontMd', fontSize: '0.9em', cursor: 'pointer' }}>
                        <i className={`bi ${menu.icon}${currentPath == menu.path ? '-fill' : ''} p-0 m-0`} style={{ fontFamily: 'tFontMd', fontSize: '1.4em' }}></i>
                        <p className="m-0 p-0" style={{ fontFamily: 'tFon', fontSize: '0.7em' }}>{menu.title}</p>
                    </div>
                ))
            }

            {/* <Link to='https://api.whatsapp.com/message/NSIQY7RHQ2W4C1?autoload=1&app_absent=0'>
                <i className="bi bi-whatsapp"></i></Link>
            <Link to='https://www.instagram.com/surplusfood9ja/'><i className="bi bi-instagram"></i></Link> */}


        </div>
    )
}
export default BottomNavs