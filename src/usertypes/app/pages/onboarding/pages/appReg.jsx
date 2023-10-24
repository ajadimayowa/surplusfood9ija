import React, { useState } from "react";
import loginCss from '../css/appReg.module.css'
import { Button, FormControl, FormSelect, InputGroup, Spinner } from "react-bootstrap";
import logo from '../../../../../assets/images/logo.svg';
import { Link } from "react-router-dom";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { getAllCountries } from "../../../controllers/services";
import { toast } from "react-toastify";
import { signUp } from "../../../controllers/auth";
import api from "../../../controllers/api";
import { signUserUp } from "../../../controllers/auth";
import { useNavigate } from "react-router-dom";

const AppReg = () => {
    const navigate = useNavigate()
    const [counts, setAllCountries] = useState([{ flag: '', idd: { root: '', suffixes: [] } }]);
    const [loading,setLoading] = useState(false);
    

    let initialInfo = {
        "full_name": "",
        "email": "",
        "username": "",
        "password": "",
        "repeat_password": "",
        "mobile": ""
    }


    const [userBio, setUserBio] = useState(initialInfo);

    const handleDropSelect = (e) => {
        getCountries()


    }

    const getCountries = async () => {
        const res = await getAllCountries();
        if (res?.status == 200) {
            console.log(res)
            setAllCountries(res?.data);
        }
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        const body = {
            "full_name": userBio.full_name,
            "email": userBio.email,
            "username": userBio.username,
            "password": userBio.password,
            "repeat_password": userBio.repeat_password,
            "mobile": userBio.mobile
        }

        e.preventDefault();
        if (userBio.pass != userBio.confPass) {
            toast.error('Passwords not equal!')
        } else {
            try {
                const res = await signUserUp(body);
                console.log(res, 'here now');
                if (res?.success) {
                    toast.success('User created Succesfully');
                    navigate('/app/login',{replace:true});
                    setLoading(false)
                } else {
                    toast.error(`${res?.message}`);
                    setLoading(false)
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className={`${loginCss.cont} py-0`} style={{ overflowY: 'auto' }}>
            <div className={`${loginCss.left} w-100`}  style={{height:'100vh', overflow:'scroll'}}>
                <div className="px-3">
                    <h3 className={`${loginCss.header}  text-primary fw-bold`}>Create account</h3>
                    <Link to='/surplus'>
                        <i className="bi bi-house-door text-primary" style={{ fontSize: '1.5em', cursor: 'pointer' }}></i>
                    </Link>

                </div>
                <div className="d-flex">
                    <form ng-form='reg' autoComplete="off" onSubmit={(e) => handleSubmit(e)} className="d-flex w-100 justify-content-center align-items-center flex-column">
                        <div>
                            <img height='30em' src={logo} />
                        </div>
                        <div className="d-flex mt-3 align-items-center w-50 px-5 flex-column gap-3">

                            <div>
                                <label htmlFor='fname'>Full Name</label>
                                <FormControl
                                    onChange={(e) => setUserBio({ ...userBio, full_name: e.target.value })}
                                    type="string" id='fname' required style={{ minWidth: '15em' }} />
                            </div>

                            <div>
                                <label>Email address</label>
                                <FormControl
                                    onChange={(e) => setUserBio({ ...userBio, email: e.target.value })}
                                    type="email" required style={{ minWidth: '15em' }} />
                            </div>

                            <div>
                                <label>Username</label>
                                <FormControl
                                    onChange={(e) => setUserBio({ ...userBio, username: e.target.value })}
                                    required style={{ minWidth: '15em' }} />
                            </div>

                            <div>
                                <label>Your Password</label>
                                <FormControl onChange={(e) => setUserBio({ ...userBio, password: e.target.value })}
                                    type="text" style={{ minWidth: '15em' }} />
                            </div>

                            <div>
                                <label>Confirm Password</label>
                                <FormControl type="text"
                                    onChange={(e) => setUserBio({ ...userBio, repeat_password: e.target.value })}
                                    style={{ minWidth: '15em' }} />
                            </div>

                            <ul className="text-danger" style={{fontSize:'0.8em'}}>
                                    <li>Must contain one integer</li>
                                    <li>One special character</li>
                                    <li>Three lowercase</li>
                                    <li>One uppercase</li>
                                    <li>Length must be more than 8.</li>
                                </ul>

                            <div className="d-flex flex-column justify-content-start align-items-start
                            w-100" style={{ minWidth: '15em', maxWidth:'15em' }}>
                               
                                <label>Phone</label>
                                <FormControl
                                    className="w-100"
                                    onChange={(e) => setUserBio({ ...userBio, mobile: e.target.value })}
                                    required type='number' maxLength={10} style={{ minWidth: '8em' }} />
                                {/* </div> */}
                            </div>
                            

                            <div className="d-flex justify-content-center gap-2 w-100" style={{ minWidth: '20em' }}>
                                <FormCheckInput required onChange={(e) => setUserBio({ ...userBio, checked: e.target.value })} />
                                <label>I agree to terms and conditions </label>
                            </div>

                            <Button 
                                type="submit"
                                className="fw-bold"
                                    style={{
                                        color: '#EAFF66',
                                        maxWidth: '10em',
                                        minWidth: '10em'
                                    }}>{
                                        loading? <Spinner size="sm"/> : 'Register'
                                    }
                                </Button>
                        </div>
                        <p className="mt-3">Have an account? <span className="text-primary">
                            <Link to='/app/login' style={{ textDecoration: 'none' }}>
                                Login
                            </Link>
                        </span></p>
                    </form>

                </div>
                <div className="d-flex w-100 px-4 justify-content-between">
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
export default AppReg;