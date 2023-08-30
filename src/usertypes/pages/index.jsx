import React, { useState } from "react";
import './css/index.css';
import { Button } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';
import homePic from '../../assets/images/homePicRight.png';
import { Link, useNavigation } from 'react-router-dom';

const Homepage = () => {
    const serviceCaptions = [
        {
            icon : '',
            title : 'Quality at best price',
            desc : 'Shop smart! Save big with our economical grocery shopping online store!',
        },
        {
            icon : '',
            title : 'Fast & Safe delivery',
            desc : 'Quick as a flash! We will deliver your order in a blink of an eye. We got you!',
        },
        {
            icon : '',
            title : 'Fresh Farm Produce',
            desc : 'From our fields to your plate, taste the freshness of farm-to-table!',
        }
    ]
    return (
        <div className="container-fluid p-0 w-100" style={{ overflow: 'hidden' }}>

            <div
                className="w-100 shadow-sm px-4 py-0 bg-info
            justify-content-between align-items-center navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="100" height="80" alt="logo" />
                </a>
                <div className="d-flex gap-4 justify-content-end align-items-center">
                    <ul className="navLinks gap-5 align-items-center p-0 m-0" style={{ listStyle: 'none',}}>
                        <li>Home</li>
                        <li>How it works</li>
                        <li>Support</li>
                    </ul>
                    <form className=" d-flex gap-2 justify-content-end align-items-center">
                        <input
                            className="form-control mr-sm-2"
                            type="search" placeholder="Search"
                            aria-label="Search" 
                            style={{ maxWidth: '15em', maxHeight:'5em' }} />
                        <button  
                        style={{minHeight:'2em'}}
                        className="btn btn-outline-success my-2 my-sm-0 py-0" type="submit">Search</button>
                    </form>
                    <Link id="loginButton" to='/app/reg'>
                        <Button>Sign in</Button>
                    </Link>
                </div>
            </div>
            <div className="main p-0" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <div className="banner d-flex justify-content-center align-items-center bg-danger w-100">
                    <div
                        className="banner-intro p-3" style={{ width: '80%' }}>
                        <div className="p-5 banner-content">
                            <h5 className="phrase text-light" style={{fontFamily: 'hanoble' }}>
                                We are the New Face
                                of Grocery Shopping.
                            </h5>
                            <p className="cap p-0 m-0" style={{color:'#D8F237'}}>
                                Welcome to our online grocery store, your one-stop-shop for all your
                                grocery needs. We offer a wide variety of fresh produce, pantry
                                essentials, household items, and more, all available at your
                                fingertips from the comfort of your own home.
                            </p>
                            <Button className="mt-3 bg-light py-3 text-primary" 
                            style={{fontWeight:'600'}}
                            >Get Started</Button>
                        </div>
                        <div>
                            <img src={homePic} width="410" height="408" alt="happy buyer" />
                        </div>

                    </div>
                </div>
                <div className="sectTwo w-100 d-flex 
                gap-5 px-4
                justify-content-center align-items-center
                " 
                style={{backgroundColor:'#F4F4F4'}}>
                    {
                        serviceCaptions.map((captions)=>(
                            <div>
                                <div>{captions.icon}</div>
                                <div className="text-center">
                                    <h4>{captions.title}</h4>
                                    <p className="p-0 m-0 text-center px-5">{captions.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="d-flex justify-content-center">Footer</div>

        </div>
    )
}
export default Homepage;