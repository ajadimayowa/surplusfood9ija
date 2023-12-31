import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import logo from '../../assets/images/logo.svg';
import './css/homeHolder.css';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const HomeHolder = () => {
    const token = localStorage.getItem('userToken');
    const navigate = useNavigate()
    const currentPath = useLocation().pathname;
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleSide, setToggleSide] = useState(false);
    const [req, setReq] = useState(false);

    const handleLogOut = () => {
        localStorage.clear()
    }
    return (
        <div className="holder-cont w-100 m-0" style={{ overflow: 'hidden', overflowX: 'hidden' }}>
            <div
                className="w-100 shadow-sm px-4 py-0
            justify-content-between align-items-center navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/surplus">
                    <img src={logo} width="100" height="80" alt="logo" />
                </a>
                <div className="d-flex gap-4 justify-content-end align-items-center">
                    <ul className="navLinks gap-5 align-items-center p-0 m-0" style={{ listStyle: 'none', }}>
                        <li ><Link to={token == null ? '/surplus' : '/app/dash'} style={{ color: currentPath == '/surplus' && '#0E6C4D' }}>{token == null ? 'Home' : 'Dashboard'}</Link></li>
                        <li><Link to='how-it-works' style={{ color: currentPath == '/surplus/how-it-works' && '#0E6C4D' }}>How it works</Link></li>
                        <li><Link to='about-us' style={{ color: currentPath == '/surplus/about-us' && '#0E6C4D' }}>About us</Link></li>
                        <li><Link to='contact-us' style={{ color: currentPath == '/surplus/contact-us' && '#0E6C4D' }}>Contact us</Link></li>
                    </ul>
                    <form className="search-form gap-2 justify-content-end align-items-center">
                        <input
                            className="form-control mr-sm-2"
                            type="search" placeholder="Search"
                            aria-label="Search"
                            style={{ maxWidth: '15em', maxHeight: '5em' }} />
                        <button
                            style={{ minHeight: '2em' }}
                            className="btn btn-outline-success my-2 my-sm-0 py-0" type="submit">Search</button>
                    </form>
                    <Link id="loginButton" to='/app/login'>
                        <Button>Sign in</Button>
                    </Link>
                    <div className="toggler text-primary gap-3" style={{ fontSize: '1.3em', cursor: 'pointer' }}>
                        <i className="bi bi-search" onClick={() => setToggleSearch(!toggleSearch)}></i>
                        <i className="bi bi-text-left" onClick={() => setToggleSide(!toggleSide)}></i>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center w-100">
                <form className={`${toggleSearch ? 'onSearch' : 'offSearch'} w-100 gap-2 justify-content-center align-items-center`}>
                    <input
                        className="form-control mr-sm-2"
                        type="search" placeholder="Search"
                        aria-label="Search"
                        style={{ maxWidth: '15em', maxHeight: '5em' }} />
                    <button
                        style={{ minHeight: '2em' }}
                        className="btn btn-outline-success my-2 my-sm-0 py-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
            <div className={`${toggleSide ? 'sideBar' : 'offSideBar'} bg-primary 
            w-100`} style={{ zIndex: 600 }}>

                <ul className="d-flex mobNavLinks flex-column w-100 px-0 gap-3"
                    style={{ listStyle: 'none', textAlign: 'center', color: '#fff', textDecoration: 'none' }}>
                    <Link className="py-2" onClick={() => setToggleSide(!toggleSide)} to={token == null ? '/surplus' : '/app/dash'} style={{ color: currentPath == '/surplus' ? '#48b5b3' : '#fff' }}><li className="w-100 py-3">{token == null ? 'Home' : 'Dashboard'}</li></Link>
                    <Link to='how-it-works' onClick={() => setToggleSide(!toggleSide)} ><li className="w-100 py-3">How it works</li></Link>
                    <Link to='about-us' onClick={() => setToggleSide(!toggleSide)}><li className="w-100 py-3">About us</li></Link>
                    <Link to='contact-us' onClick={() => setToggleSide(!toggleSide)}><li className="w-100 py-3">Contact us</li></Link>


                </ul>

                <div className="d-flex justify-content-center mt-3  w-100"
                    onClick={() => setToggleSide(!toggleSide)}>
                    {
                        token == null ? <Link to='/app/reg'>
                            <Button variant="outline-secondary">Get Started</Button>
                        </Link> :
                            <Button onClick={() => setReq(true)} variant="outline-secondary">Request Service</Button>

                    }

                </div>
                {
                    token !== null &&
                    <Link className="mt-4" to='/'>
                        <Button onClick={handleLogOut} variant="outline-light">Log out</Button>
                    </Link>}
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center">

                <Modal centered show={req}>
                    <Modal.Header >
                        <h5>
                            What would you like us to help you with?
                        </h5>
                        <i className="bi bi-x-circle" style={{cursor:'pointer'}} onClick={() => setReq(false)}></i>
                    </Modal.Header>
                    <Modal.Body className="p-2">
                        <div className="d-flex justify-content-center gap-5" style={{fontSize:'0.8em'}}>
                        <div className="d-flex justify-content-center flex-column text-center" style={{cursor:'pointer'}}>
                                <p className="p-0 m-0">Do Grocery Shopping</p>
                                <i className="bi bi-basket2-fill text-primary" style={{fontSize:'2.5em'}}></i>
                            </div>

                            <div className="d-flex justify-content-center flex-column text-center" style={{cursor:'pointer'}}>
                                <p className="p-0 m-0">Request Dispatch Rider</p>
                                <i className="bi bi-bicycle text-primary" style={{fontSize:'2.5em'}}></i>
                            </div>

                            <div className="d-flex justify-content-center flex-column text-center" style={{cursor:'pointer'}}>
                                <p className="p-0 m-0">Request For A Mover</p>
                                <i className="bi bi-truck text-primary fw-bold" style={{fontSize:'2.5em'}}></i>
                            </div>
                        </div>
                    </Modal.Body>

                </Modal>

            </div>

            {<Outlet />}
        </div>
    )
}
export default HomeHolder;