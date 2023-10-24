import React from "react";
import { Outlet, Routes, Route, Link } from "react-router-dom";
import cssStyle from "./css/dash.module.css"
import { Button } from "react-bootstrap";

export default function UserDashboard() {
    const userInfo = JSON.parse(localStorage.getItem('userBio'));

    console.log(userInfo,'hii');
    let firstName = userInfo?.full_name.slice(' ')
    return (
        <div className={cssStyle.container} style={{ overflow: 'auto' }}>
            <div className="d-flex mt-3 px-3">
                <div>Hello <span className="fw-bold text-capitalize">{firstName}</span> How are you today?</div>

            </div>

            <div className="w-100 d-flex justify-content-center mt-4" style={{minHeight:'30%'}}>
                <div style={{maxWidth:'70%'}} className="w-75 shadow-lg rounded rounded-5 d-flex align-items-center justify-content-center">
                   <img height='150px' src="https://st.depositphotos.com/1063437/56831/i/450/depositphotos_568315230-stock-photo-wicker-basket-assorted-grocery-products.jpg"/>
                </div>
            </div>

            <div className="w-100 d-flex flex-column text-center justify-content-center align-items-center mt-4">
                <h3 style={{ fontFamily: 'hanoble' }}>Because We are Just <br/> Getting Started !!</h3>
                <p className="px-4"
                style={{ fontFamily: 'Times' }}
                >We want you to tell us what you <br/> want us to sell to you and <br/>how you want us to <br/>deliver it to you!!</p>
                <Link to='https://api.whatsapp.com/message/NSIQY7RHQ2W4C1?autoload=1&app_absent=0'>
                <Button style={{maxWidth:'10em'}}>Make Suggestions</Button>
                </Link>
            </div>

        </div>


    )
}