import React, { useState } from "react";
import './css/index.css';
import { Button, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';
import logoFooter from '../../assets/images/logotp.svg';
import homePic from '../../assets/images/homePicRight.png';
import pepperDeal from '../../assets/images/pepperDeal.png';
import { Link, useNavigation } from 'react-router-dom';
import dollarIcon from '../../assets/icons/dollarIcon.svg';
import truckIcon from '../../assets/icons/truckIcon.svg';
import storeIcon from '../../assets/icons/storeIcon.svg';
import { footerContents } from "../../assets/constants";

const Homepage = () => {
    const serviceCaptions = [
        {
            icon: dollarIcon,
            bgColor: '#00000',
            textColor: '#fff',
            title: 'Quality at best price',
            desc: 'Shop smart! Save big with our economical grocery shopping online store!',
        },
        {
            icon: truckIcon,
            title: 'Fast & Safe delivery',
            desc: 'Quick as a flash! We will deliver your order in a blink of an eye. We got you!',
        },
        {
            icon: storeIcon,
            title: 'Fresh Farm Produce',
            desc: 'From our fields to your plate, taste the freshness of farm-to-table!',
        }
    ]

    const advertProducts = [
        {
            prodImg: 'https://thumbs.dreamstime.com/b/grocery-groceries-symbol-as-supermarket-shopping-cart-milk-eggs-cheese-meat-bread-fish-vegetables-fruit-as-icon-134030070.jpg',
            category: 'Grains',
            name: 'Rice',
            desc: 'Shop smart! Save big with our economical grocery shopping online store!',
            title: 'Quality at best price',
            bgColor1: '',
            bgColor2: ''
        },
        {
            prodImg: 'https://neogric.com/wp-content/uploads/2021/03/Nigerian-and-African-Yam-Tubers-Neogric-2.jpg',
            category: 'Tubbers',
            name: 'Yam',
            desc: 'Shop smart! Save big with our economical grocery shopping online store!',
            title: 'Quality at best price',
            bgColor1: '',
            bgColor2: ''
        },
        {
            prodImg: 'https://freshtodommot.com/cdn/shop/products/elubo-yam-flour.jpg?v=1603153355',
            category: 'Flours',
            name: 'Elubo',
            desc: 'Shop smart! Save big with our economical grocery shopping online store!',
            title: 'Quality at best price',
            bgColor1: '',
            bgColor2: ''
        },
        {
            prodImg: 'https://i0.wp.com/nextcashandcarry.com.ng/wp-content/uploads/2022/05/20210412_WL_NI_MILO-POUCH-800GR_A0_01.webp?fit=500%2C700&ssl=1',
            category: 'Beverages',
            name: 'Milo',
            desc: 'Shop smart! Save big with our economical grocery shopping online store!',
            title: 'Quality at best price',
            bgColor1: '',
            bgColor2: ''
        }

    ]


    const testimonials = [
        {
            ownerImg: 'https://mir-s3-cdn-cf.behance.net/user/276/d89950386525853.62d9ec1524e46.jpg',

            name: 'Ajadi Mayowa S',
            rating: '5.0',
            words: 'What sold the entire solution to me was the ease and speed of product delivery',
            id: '',
        },
        {
            ownerImg: 'https://media.licdn.com/dms/image/D4D03AQH_TVkGvPH2NQ/profile-displayphoto-shrink_800_800/0/1681817488225?e=2147483647&v=beta&t=ft1xxaxqQmhfvSCXXWCGrX-2eUzlbFeKf-QvpLmlD1A',

            name: 'Adedolapo Sokoya',
            rating: '6.2',
            words: 'Shop smart! Save big with this online store! totally recomended',
            id: ''
        }

    ]
    return (
        <div className="container-fluid m-0 p-0 w-100" style={{ overflow: 'hidden' }}>

            <div
                className="w-100 shadow-sm px-4 py-0 bg-info
            justify-content-between align-items-center navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="100" height="80" alt="logo" />
                </a>
                <div className="d-flex gap-4 justify-content-end align-items-center">
                    <ul className="navLinks gap-5 align-items-center p-0 m-0" style={{ listStyle: 'none', }}>
                        <li>Home</li>
                        <li>How it works</li>
                        <li>Support</li>
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
                    <Link id="loginButton" to='/app/reg'>
                        <Button>Sign in</Button>
                    </Link>
                    <div className="toggler text-primary gap-4" style={{ fontSize: '1.7em', cursor: 'pointer' }}>
                        <i className="bi bi-search"></i>
                        <i className="bi bi-text-left"></i>
                    </div>
                </div>
            </div>
            <div className="main p-0" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <div className="banner d-flex justify-content-center align-items-center w-100">
                    <div
                        className="banner-intro p-3" style={{ width: '80%' }}>
                        <div className="p-5 banner-content">
                            <h5 className="phrase text-light" style={{ fontFamily: 'hanoble' }}>
                                We are the New Face
                                of Grocery Shopping.
                            </h5>
                            <p className="cap p-0 m-0" style={{ color: '#D8F237' }}>
                                Welcome to our online grocery store, your one-stop-shop for all your
                                grocery needs. We offer a wide variety of fresh produce, pantry
                                essentials, household items, and more, all available at your
                                fingertips from the comfort of your own home.
                            </p>
                            <Link className="d-flex justify-content-center" to='/app/reg' style={{textDecoration:'none'}}>
                            <Button className="mt-3 bg-light py-3 text-primary"
                                style={{ fontWeight: '600' }}
                            >Get Started
                            </Button>
                            </Link>
                        </div>
                        <div className="pt-5">
                            <img src={homePic} width="95%" height="96%" alt="happy buyer" />
                        </div>

                    </div>
                </div>
                <div className="sectTwo w-100 d-flex 
                gap-4 px-4
                justify-content-center align-items-center
                "
                    style={{ backgroundColor: '#F4F4F4' }}>
                    {
                        serviceCaptions.map((captions) => (
                            <div>
                                <div className="p-2 text-center"
                                    style={{ backgroundColor: captions.bgColor }}><img src={captions.icon} /></div>
                                <div className="text-center">
                                    <h4>{captions.title}</h4>
                                    <p className="p-0 m-0 text-center px-5">{captions.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="sectThree mt-5 w-100 d-flex 
                flex-column
                px-4
                justify-content-center align-items-center
                "
                    style={{ backgroundColor: '#fff' }}>
                    <h4>Explore Awesome Products</h4>
                    <h2 className="text-center" style={{ fontWeight: '700' }}>With Customized Shopping Experience</h2>
                </div>

                <div className="sectAdGoods mt-5 w-100 px-4
                justify-content-center gap-3 align-items-center
                "
                    style={{ backgroundColor: '#fff' }}>
                    {
                        advertProducts.map((prod) => (
                            <div className="d-flex flex-column p-4 justify-content-center align-items-center"
                                style={{ maxWidth: '80%' }}>
                                <div className="w-100 d-flex flex-column align-items-center">
                                    <div className="d-flex justify-content-between w-100">
                                        <h5>{prod.category}</h5>
                                        <p className="p-0 m-0">prod rating</p>
                                    </div>
                                    <div>
                                        <img src={prod.prodImg} height={200} alt="product image" />
                                    </div>
                                </div>
                                <div className="d-flex flex-column p-3 align-items-center w-100 rounded-bottom-5 bg-info">
                                    <h4>{prod.name}</h4>
                                    <p className="text-center">{prod.desc}</p>
                                    <Button>Shop now</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="sectAdGoods mt-5 w-100 px-4
                justify-content-center gap-3 align-items-center
                "
                    style={{ backgroundColor: '#fff' }}>
                    <div className="d-flex justify-content-center gap-5"
                        style={{ backgroundColor: '#EFFBF9', minHeight: '15em', maxHeight: '15em', minWidth: '80%' }}>
                        <div className="d-flex w-25 align-items-center justify-content-center">
                            <img src={pepperDeal} alt="pepper basket" height="80%" />
                        </div>
                        <div className="py-5 d-flex flex-column w-50 ">
                            <p className="text-primary p-0 m-0">Weekly offer</p>
                            <h4 style={{ fontWeight: '700', fontSize: '3em' }}>
                                Check Out Deal of the Day.
                            </h4>
                            <h2 className="p-0 m-0 text-danger"> 10% Discount on every Bag Purchase!!!</h2>
                        </div>
                    </div>
                </div>


                <div className="sectTest d-flex flex-column mt-5 w-100 px-4
                justify-content-center gap-3 align-items-center
                "
                    style={{ backgroundColor: '#fff' }}>
                    <h1 className="text-center">
                        See how <span className="text-primary">Surplus food</span> is<br />
                        making life easier.
                    </h1>

                    <div className="testimonials gap-4">
                        {
                            testimonials.map((testimony) => (
                                <div className=" d-flex gap-3 border border-1 border-primary p-2 rounded rounded-3"
                                style={{maxWidth:'25em', maxHeight:'20em'}}>
                                    <div>
                                        <img src={testimony.ownerImg} alt="picture" height={150} />
                                    </div>
                                    <div>
                                        <h6 className="d-flex gap-2">
                                            <span><i class="bi bi-star-fill text-primary"></i></span>
                                            <span>{testimony.rating}</span>
                                        </h6>
                                        <p>{testimony.words}</p>
                                        <p style={{fontWeight:'600'}}>{testimony.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                </div>
                <div className="footerRow m-0  mt-5 w-100 px-4
                justify-content-center align-items-center gap-3 py-4"
                    style={{ backgroundColor: '#F9F9F9', minHeight:'15em' }}>
                        <Col className="d-flex align-items-start">
                            <img src={logoFooter} alt="footer logo"/>
                            
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <h5>Company</h5>
                            <ul className="p-0 m-0" style={{listStyle:'none'}}>
                                {
                                    footerContents.company.map((info)=>(<li><a>{info}</a></li>))
                                }
                            </ul>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <h5>Features</h5>
                            <ul className="p-0 m-0" style={{listStyle:'none'}}>
                                {
                                    footerContents.features.map((info)=>
                                    (<li><a href="#" style={{textDecoration:'none',color:'black'}}>{info}</a></li>))
                                }
                            </ul>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <h5>Resources</h5>
                            <ul className="p-0 m-0" style={{listStyle:'none'}}>
                                {
                                    footerContents.resources.map((info)=>
                                    (<li><a href="#" style={{textDecoration:'none',color:'black'}}>{info}</a></li>))
                                }
                            </ul>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <h5>Contact us</h5>
                            <ul className="p-0 m-0" style={{listStyle:'none'}}>
                                {
                                    footerContents.reachUs.map((info)=>
                                    (<li><a href="#" style={{textDecoration:'none',color:'black'}}>{info}</a></li>))
                                }
                            </ul>
                        </Col>
                    
                </div>
            </div>
            <div style={{minHeight:'5em', fontSize:'1.5em', backgroundColor:'#fff'}} className="d-flex justify-content-end gap-3 px-5">
            <Link to='https://api.whatsapp.com/message/NSIQY7RHQ2W4C1?autoload=1&app_absent=0'>
                <i className="bi bi-whatsapp"></i></Link>
            <Link to='https://www.instagram.com/surplusfood9ja/'><i className="bi bi-instagram"></i></Link>
           
            </div>

        </div>
    )
}
export default Homepage;