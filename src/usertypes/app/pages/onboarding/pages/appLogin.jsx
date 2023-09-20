import React,{useState, useEffect} from "react";
import loginCss from '../css/applogin.module.css'
import { Button, FormControl, InputGroup, Spinner } from "react-bootstrap";
import logo from '../../../../../assets/images/logo.svg';
import {toast} from 'react-toastify';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logUserIn } from "../../../controllers/auth";
import {loginUserIn} from "../../../controllers/auth";
import {useDispatch} from 'react-redux';
import { setUserInfo } from "../../../store/slices/userSlice";

const AppLogin = () => {
    const dispatch = useDispatch();
    const userToken = localStorage.getItem("userToken");
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [hide,setHide] = useState(false)
    

    console.log(userToken)
useEffect(()=>{
    if(userToken!== null){
        navigate('/app/dash');
    }
},[])
    const initialInfo = {
        "email" : '',
        "password":''
    }
    const [userCred, setUserCred] = useState(initialInfo);

    const handleLogin = async (e)=>{
        setLoading(true)
        e.preventDefault();

        try {
            const res = await loginUserIn(userCred);
            if(res?.success){
                toast.success(res.message);
                setLoading(false);
                navigate('/app/dash');
                console.log(res.data);
                dispatch(setUserInfo(res.data));
                localStorage.setItem("userToken", res.token);
                let info = JSON.stringify(res.data);
                localStorage.setItem("userBio", info);
            } else{
                toast.error(res.message);
                setLoading(false)
            }
        } catch (error) {
            
        }
    }


    return (
        <div className={`d-flex flex-column justify-content-center w-100 align-items-center`} style={{overflow:'scroll'}}>
            <div className="d-flex w-100 py-3 px-5">
                <Link to='/surplus'>
                    <i className="bi bi-house-door text-primary" style={{ fontSize: '1.5em', cursor: 'pointer' }}></i>
                </Link>
            </div>
            <div className={`${loginCss.cont} d-flex w-100`}>
                <div className={`${loginCss.left}`}>
                    <div>
                        <h3 className={`${loginCss.header} px-4 text-primary fw-bold`}>Sign in</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <form onSubmit={(e)=>handleLogin(e)} className="d-flex w-100 justify-content-center align-items-center flex-column">
                            <div>
                                <img height='30em' src={logo} />
                            </div>
                            <div className="d-flex mt-5 align-items-center w-50 px-5 flex-column gap-2">
                                <div className="d-flex gap-2 flex-column">
                                    <div>
                                        <label>Your email</label>
                                        <FormControl
                                        required
                                        onChange={(e)=>setUserCred({...userCred, "email":e.target.value})} 
                                        style={{ minWidth: '15em' }} />
                                    </div>

                                    <div className="">
                                        <div className="d-flex justify-content-between">
                                        <label>Your Password</label>
                                        {!hide?
                                        <i className="bi bi-eye-fill" onClick={()=>setHide(true)}></i> :
                                        <i className="bi bi-eye-slash-fill" onClick={()=>setHide(false)}></i>
                                        }
                                        </div>

                                        <FormControl 
                                        required
                                        type={hide && 'password'}
                                        onChange={(e)=>setUserCred({...userCred, "password":e.target.value})} 
                                        style={{ minWidth: '15em' }} />
                                    </div>

                                    <p className="text-end w-100">Forgot password?</p>
                                </div>
                                
                                <Button 
                                type="submit"
                                className="fw-bold"
                                    style={{
                                        color: '#EAFF66',
                                        maxWidth: '10em',
                                        minWidth: '10em'
                                    }}>{
                                        loading? <Spinner size="sm"/> : 'Sign in'
                                    }
                                </Button>
                            </div>
                            <p className="mt-5">Don’t have an account?
                                <span>{' '}</span>
                                <span className="text-primary fw-bold" onClick={() => navigate('/app/reg')} style={{ cursor: 'pointer' }}>
                                    Sign up
                                </span>
                            </p>
                        </form>

                    </div>
                    <div className="d-flex w-100 px-0 mt-3 justify-content-between" style={{fontSize:'0.8em', minWidth:'5em'}}>
                        <p>Privacy Policy</p>
                        <p>Terms and conditions</p>
                    </div>
                </div>
                <div className={`${loginCss.right}`}>
                    <div className={`${loginCss.rightCont}`}>
                        <div className="">
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


        </div>
    )
}
export default AppLogin;