import React from "react";
import loginCss from '../css/applogin.module.css'
import { Button, FormControl, InputGroup } from "react-bootstrap";
import logo from '../../../../../assets/images/logo.svg';
import { Link } from "react-router-dom";

const AppLogin = () => {
    return (
        <div className={`${loginCss.cont} d-flex justify-content-center`}>
            <div className={`${loginCss.left}`}>
               <div>
               <h3 className={`${loginCss.header} text-primary fw-bold`}>Sign in</h3>
               <Link to='/'>
               <i className="bi bi-house-door text-primary" style={{fontSize:'1.5em', cursor:'pointer'}}></i>
               </Link>
               </div>
                <div className="d-flex justify-content-center">
                    <form className="d-flex w-100 justify-content-center align-items-center flex-column">
                        <div>
                            <img height='30em' src={logo} />
                        </div>
                        <div className="d-flex mt-5 align-items-center w-50 px-5 flex-column gap-3">
                            <div>
                                <label>Your email</label>
                                <FormControl style={{ minWidth: '15em' }} />
                            </div>

                            <div>
                                <label>Your Password</label>
                                <FormControl style={{ minWidth: '15em' }} />
                            </div>

                            <Button className="fw-bold"
                            style={{ 
                                color: '#EAFF66',
                                maxWidth: '6em',
                                minWidth:'6em'
                                 }}>Sign in</Button>
                        </div>
                        <p className="mt-5">Don’t have an account? <span className="text-primary">
                            <Link to='/app/reg' style={{ textDecoration: 'none' }}>
                                Sign up
                            </Link>
                        </span></p>
                    </form>

                </div>
                <div className="d-flex  justify-content-between">
                    <p>Privacy Policy</p>
                    <p>Terms and conditions</p>
                </div>
            </div>
            <div className={`${loginCss.right}`}>
                <div className={`${loginCss.rightCont}`}>
                    <div>
                        <h1 className="fw-bold">
                            Focus on work
                        </h1>
                        <p style={{
                            textDecoration: 'underline',
                            textDecorationColor: '#F6CB1B',
                        }}>We will do the grocery hunting for you</p>

                        <p className="mt-4 px-5">
                            While you chase the bag for the family,
                            Let us help you handle the stress
                            of the Nigeria Market.

                            You be boss, relax!
                        </p>
                        <Button variant="light" className="mt-3 fw-bold text-primary">About us</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AppLogin;