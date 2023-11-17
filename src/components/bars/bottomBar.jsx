import React from "react";
import Style from './css/bottombar.module.css';
import { Link } from "react-router-dom";

const BottomBar = () => {
    return (
        <div className={`shadow-sm sticky px-3 ${Style.container}`}>
            
            
                <Link to='https://api.whatsapp.com/message/NSIQY7RHQ2W4C1?autoload=1&app_absent=0'>
                    <i className="bi bi-whatsapp"></i></Link>
                <Link to='https://www.instagram.com/surplusfood9ja/'><i className="bi bi-instagram"></i></Link>

            
        </div>
    )
}
export default BottomBar