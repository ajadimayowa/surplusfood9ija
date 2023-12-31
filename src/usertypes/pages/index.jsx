import React, { useEffect, useState } from "react";
import './css/index.css';
import { Badge, Button, Card, Col, Modal } from 'react-bootstrap';
import logoFooter from '../../assets/images/logotp.svg';
import homePic from '../../assets/images/homePicRight.png';
import pepperDeal from '../../assets/images/pepperDeal.png';
import { Link, useNavigate } from 'react-router-dom';
import dollarIcon from '../../assets/icons/dollarIcon.svg';
import truckIcon from '../../assets/icons/truckIcon.svg';
import storeIcon from '../../assets/icons/storeIcon.svg';
import { footerContents } from "../../assets/constants";
import CollapsableData from "../../components/collapsibleData";
import { useLocation } from "react-router-dom";
import { getWeather } from "../app/controllers/services";
import InputField from "../../components/inputfields/input";
import TopBar from "../../components/bars/topBar";
import BottomBar from "../../components/bars/bottomBar";
import BottomNavs from "../../components/bars/bottomnavs";

const Homepage = (props) => {
    const currentPath = useLocation().pathname;
    const token = localStorage.getItem('userToken');
    const [req, setReq] = useState(false);
    const navigate = useNavigate()

    console.log(currentPath);

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
            prodImg: 'https://images.squarespace-cdn.com/content/v1/58b72eac46c3c480fcbe7366/1551906370876-2QFYXGTV60734RJA74NX/Risotto.png',
            category: 'Grains',
            name: 'Rice',
            desc: 'We have the best suppliers in the market for all type of grains.',
            title: 'Quality at best price',
            bgColor1: '',
            bgColor2: ''
        },
        {
            prodImg: 'https://neogric.com/wp-content/uploads/2021/03/Nigerian-and-African-Yam-Tubers-Neogric-2.jpg',
            category: 'Tubbers',
            name: 'Yam',
            desc: 'Our tubers are sourced from the finest farms around the country.',
            bgColor1: '',
            bgColor2: ''
        },
        {
            prodImg: 'https://www.transparentpng.com/thumb/vegetable/mw4OSK-vegetables-basket-png.png',
            category: 'Peppers',
            name: 'Pepper',
            desc: 'Fresh pepper with quality taste to aid your cooking.',
            title: 'Quality at best price',
            bgColor1: '',
            bgColor2: ''
        },
        {
            prodImg: 'https://pngimg.com/d/sunflower_oil_PNG35.png',
            category: 'Oil',
            name: 'Refined Healthy Oil',
            desc: 'We make the time to get you the oil you need, from the best sellers out there.',
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
    const fetch = async () => {

    }

    useEffect(() => {
        fetch()
    })
    return (

        <div className="m-0 p-0 w-100" style={{fontFamily:'tFontMd' }}>
            <TopBar/>

            <Modal centered show={req}>
                <Modal.Header >
                    <h5>
                        What would you like us to help you with?
                    </h5>
                    <i className="bi bi-x-circle" style={{ cursor: 'pointer' }} onClick={() => setReq(false)}></i>
                </Modal.Header>
                <Modal.Body className="p-2">
                    <div className="d-flex justify-content-center gap-5" style={{ fontSize: '0.8em' }}>
                        <div className="d-flex justify-content-center flex-column text-center" style={{ cursor: 'pointer' }}>
                            <p className="p-0 m-0">Do Grocery Shopping</p>
                            <i className="bi bi-basket2-fill text-primary" style={{ fontSize: '2.5em' }}></i>
                        </div>

                        <div className="d-flex justify-content-center flex-column text-center" style={{ cursor: 'pointer' }}>
                            <p className="p-0 m-0">Request Dispatch Rider</p>
                            <i className="bi bi-bicycle text-primary" style={{ fontSize: '2.5em' }}></i>
                        </div>

                        <div className="d-flex justify-content-center flex-column text-center" style={{ cursor: 'pointer' }}>
                            <p className="p-0 m-0">Request For A Mover</p>
                            <i className="bi bi-truck text-primary fw-bold" style={{ fontSize: '2.5em' }}></i>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>

            <div className="main p-0" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <div className="banner gap-1 w-100">
                    <div className="left-banner w-50">
                        <h5 className="text-light" id="introText" style={{ fontFamily: 'hanoble' }}>
                            We are the New Face
                            of Grocery Shopping.
                        </h5>
                        <p className="w-100 p-0 mt-3 m-0" id="introDesc" style={{ color: '#D8F237' }}>
                            Search for anything near you
                        </p>

                        {/* buttons */}

                        <div className="gap-3 mb-5" id="buttonsContainer">{
                            <InputField onClick={()=>navigate('/surplus/search')} icon={true} disable={true} placeholder='I am looking for?' formType={'searchButton'}/>

                            // <>
                            //     {
                            //         token == null ?
                            //             <Link className="d-flex justify-content-center" to='/app/reg' style={{ textDecoration: 'none' }}>
                            //                 <Button className="mt-3 bg-light py-3 text-primary"
                            //                     style={{ fontWeight: '600', minWidth: '10em', maxWidth: '12em' }}
                            //                 >Get Started
                            //                 </Button>
                            //             </Link> :

                            //             <Button onClick={() => setReq(true)} className="mt-3 bg-light py-3 text-primary"
                            //                 style={{ fontWeight: '600', minWidth: '10em', maxWidth: '12em' }}
                            //             >Request Service
                            //             </Button>

                            //     }

                            //     {
                            //         token == null ?
                            //             <Link className="d-flex justify-content-center" to='/app/login' style={{ textDecoration: 'none' }}>
                            //                 <Button className="mt-3 bg-primary py-3 text-light border-light"
                            //                     style={{ fontWeight: '600', minWidth: '10em', maxWidth: '12em' }}
                            //                 >Login
                            //                 </Button>
                            //             </Link> :
                                        
                            //             <Button className="mt-3 bg-primary py-3 text-light border-light"
                            //                 style={{ fontWeight: '600', minWidth: '10em', maxWidth: '12em' }}
                            //             >Feed a Child
                            //             </Button>
                                        
                            //     }
                            // </>
                        }</div>

                    </div>

                    <div className="right-banner">
                        <div className="pt-5">
                            <img className="bg-transparent rounded rounded-4" src={homePic}
                                width="350px" height="360px" alt="happy buyer" />
                        </div>
                    </div>
                </div>
                <div className="sectTwo w-100 d-flex 
                gap-4 px-4
                justify-content-center align-items-center
                "
                    style={{ backgroundColor: '#F4F4F4' }}>
                    {
                        serviceCaptions.map((captions, index) => (
                            <div key={index}>
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

                <div id="market" className="sectAdGoods mt-5 w-100 px-4
                justify-content-center gap-3 align-items-center
                "
                    style={{ backgroundColor: '#fff' }}>
                    {
                        advertProducts.map((prod, index) => (
                            <div key={index} className="d-flex flex-column p-4 justify-content-center align-items-center"
                                style={{ maxWidth: '80%' }}>
                                <div className="w-100 d-flex flex-column align-items-center">
                                    <div className="d-flex justify-content-between w-100">
                                        <h5>{prod.category}</h5>
                                        <i className="bi bi-star-fill text-primary"></i>
                                    </div>
                                    <div>
                                        <img src={prod.prodImg} height={200} alt="product image" />
                                    </div>
                                </div>
                                <div className="d-flex flex-column p-3 align-items-center w-100 rounded-bottom-5 "
                                    id={index == 0 ? "grains" : index == 1 ? "tubs" : index == 2 ? "flours" : index == 3 ? "bevs" : 'newCat'}>
                                    <h4>{prod.name}</h4>
                                    <p className="text-center">{prod.desc}</p>
                                    <Button style={{ backgroundColor: '#FF7C02' }}>Shop now</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="deal-section mt-5 w-100">

                    <div className="left-deal-banner">
                        <div className="pt-5">
                            <img src={pepperDeal} width="300px" height="170px" alt="pepper basket" />
                        </div>
                    </div>

                    <div className="right-deal-banner">
                        <p className="p-0 m-0">Weekly offer</p>
                        <h4 className="w-100" id="dealIntro">
                            Check Out Deal of the Day.
                        </h4>
                        <p className="p-0 m-0 text-danger" id="dealDesc" style={{ color: '#D8F237' }}>
                            10% Discount on every basket of pepper Purchase!!!
                        </p>

                        {/* timer */}

                        <div className="gap-3 w-100" id="timerContainer">
                            Expires in :
                            <Badge>02</Badge>
                            :
                            <Badge>02</Badge>
                            :
                            <Badge>44s</Badge>
                        </div>

                    </div>
                </div>


                <div className="sectTest d-flex flex-column mt-5 w-100 px-4
                justify-content-center gap-3 align-items-center"
                    style={{ backgroundColor: '#fff' }}>
                    <h1 className="text-center">
                        See how <span className="text-primary">Surplus food</span> is<br />
                        making life easier.
                    </h1>

                    <div className="testimonials gap-4">
                        {
                            testimonials.map((testimony, index) => (
                                <div key={index} className=" d-flex gap-3 border border-1 border-primary p-2 rounded rounded-3"
                                    style={{ maxWidth: '25em', maxHeight: '20em' }}>
                                    <div>
                                        <img src={testimony.ownerImg} alt="picture" height={150} />
                                    </div>
                                    <div>
                                        <h6 className="d-flex gap-2">
                                            <span><i className="bi bi-star-fill text-primary"></i></span>
                                            <span>{testimony.rating}</span>
                                        </h6>
                                        <p>{testimony.words}</p>
                                        <p style={{ fontWeight: '600' }}>{testimony.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                </div>
                <div className="p-3 w-100 d-flex justify-content-center bg-transparent">
                    {!token &&
                        <Card className="shadow rounded rounded-4 d-flex flex-column gap-3 py-3 mt-3 px-5">

                        <h4 style={{ fontFamily: 'hanoble' }}>
                            Ready to get started?
                        </h4>
                        <p className="pr-5">
                            Create an account in minutes <br />
                            and instantly become
                            your <br /> own boss!
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <Link to='/surplus/register'>
                                <Button>Get started</Button>
                            </Link>

                            <p className="p-0 m-0" style={{cursor:'pointer'}}>Contact Support</p>
                        </div>

                    </Card>}


                </div>

                <div className="footerMobile w-100">
                    {
                        footerContents.map((footer, index) => (
                            <div key={index}>
                                <CollapsableData data={footer} />
                            </div>
                        ))
                    }
                </div>
                <div className="footerRow m-0  mt-5 w-100 px-4
                justify-content-center align-items-center gap-3 py-4"
                    style={{ backgroundColor: '#F9F9F9', minHeight: '15em' }}>
                    <Col className="d-flex align-items-start">
                        <img src={logoFooter} alt="footer logo" />

                    </Col>
                    <Col className="d-flex flex-column justify-content-center">
                        <h5>Company</h5>
                        <ul className="p-0 m-0" style={{ listStyle: 'none' }}>
                            {
                                footerContents[0].links.map((info, index) => (<li key={index}><a>{info}</a></li>))
                            }
                        </ul>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center">
                        <h5>Features</h5>
                        <ul className="p-0 m-0" style={{ listStyle: 'none' }}>
                            {
                                footerContents[1].links.map((info, index) =>
                                    (<li key={index}><a href="#" style={{ textDecoration: 'none', color: 'black' }}>{info}</a></li>))
                            }
                        </ul>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center">
                        <h5>Resources</h5>
                        <ul className="p-0 m-0" style={{ listStyle: 'none' }}>
                            {
                                footerContents[2].links.map((info, index) =>
                                    (<li key={index}><a href="#" style={{ textDecoration: 'none', color: 'black' }}>{info}</a></li>))
                            }
                        </ul>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center">
                        <h5>Contact us</h5>
                        <ul className="p-0 m-0" style={{ listStyle: 'none' }}>
                            {
                                footerContents[3].links.map((info, index) =>
                                    (<li key={index}><a href="#" style={{ textDecoration: 'none', color: 'black' }}>{info}</a></li>))
                            }
                        </ul>
                    </Col>

                </div>
            </div>
            <BottomNavs/>
        </div>
    )
}
export default Homepage;