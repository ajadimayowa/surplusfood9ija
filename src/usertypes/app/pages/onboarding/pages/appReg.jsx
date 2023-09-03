import React, { useState } from "react";
import loginCss from '../css/appReg.module.css'
import { Button, FormControl, FormSelect, InputGroup } from "react-bootstrap";
import logo from '../../../../../assets/images/logo.svg';
import { Link } from "react-router-dom";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { getAllCountries } from "../../../controllers/services";
import { toast } from "react-toastify";

const AppReg = () => {
    const [counts, setAllCountries] = useState([{ flag: '', idd:{root:'', suffixes:[]}}]);

    let initialInfo = {
        fname:'',
        mail: '',
        username : '',
        dial : '',
        number : '',
        pass : '',
        confPass : '',
        checked : false
      }
    const [userBio, setUserBio] = useState(initialInfo);

    const handleDropSelect = (e) => {
        getCountries()


    }

    const handleSelect = (val)=>{
        console.log(val)

    }

    const getCountries = async () => {
        const res = await getAllCountries();
        if (res?.status == 200) {
            console.log(res)
            setAllCountries(res?.data);
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
       if(userBio.pass != userBio.confPass){
        toast.error('Passwords not equal!')
       } else{
        try {
            console.log(userBio)
            
          } catch (error) {
            console.log(error)
            
          }
       }
      }
    return (
        <div className={`${loginCss.cont}`} style={{ overflowY: 'auto' }}>
            <div className={`${loginCss.left} py-5 w-100`}>
               <div>
               <h3 className={`${loginCss.header} text-primary fw-bold`}>Create account</h3>
               <Link to='/'>
               <i className="bi bi-house-door text-primary" style={{fontSize:'1.5em', cursor:'pointer'}}></i>
               </Link>
               
               </div>
                <div className="d-flex justify-content-center">
                    <form ng-form='reg' autoComplete="off" onSubmit={(e)=>handleSubmit(e)} className="d-flex w-100 justify-content-center align-items-center flex-column">
                        <div>
                            <img height='30em' src={logo} />
                        </div>
                        <div className="d-flex mt-3 align-items-center w-50 px-5 flex-column gap-3">

                            <div>
                                <label htmlFor='fname'>Full Name</label>
                                <FormControl 
                                onChange={(e)=>setUserBio({...userBio, fname : e.target.value})}
                                type="string" id='fname' required style={{ minWidth: '15em' }} />
                            </div>
                            
                             <div>
                                <label>Email address</label>
                                <FormControl 
                                onChange={(e)=>setUserBio({...userBio, mail : e.target.value})}
                                type="email" required style={{ minWidth: '15em' }} />
                            </div>

                            <div>
                                <label>Preferred Username</label>
                                <FormControl
                                autoComplete='off'
                                onChange={(e)=>setUserBio({...userBio, username : e.target.value})} 
                                 id="username" required style={{ minWidth: '15em' }} />
                            </div>

                            <div>
                                <label>Your Password</label>
                                <FormControl onChange={(e)=>setUserBio({...userBio, pass : e.target.value})} 
                                type="password" style={{ minWidth: '15em' }} />
                            </div>

                            <div>
                                <label>Confirm Password</label>
                                <FormControl type="password"
                                onChange={(e)=>setUserBio({...userBio, confPass : e.target.value})}
                                 style={{ minWidth: '15em' }} />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center
                             gap-2 w-100" style={{ minWidth: '15em' }}>
                                <div className="d-flex gap-2">
                                    <FormSelect required onChange={(e)=>setUserBio({...userBio, dial : e.target.value})} 
                                    onClick={(e) => handleDropSelect(e)} style={{ maxWidth: '7em',minWidth:'7em' }}>
                                        <option selected value=''>+1</option>
                                        {
                                            counts.map((count, index) =>
                                             <option
                                             onChange={(e)=>setUserBio({...userBio, dial : e.target.value})} 
                                             key={index} value={`${count.idd.root}${count.idd.suffixes}`} className="d-flex w-100">
                                               {`${count.flag} ${count.idd.root}${count.idd.suffixes}` }
                                             </option>
                                             )
                                        }
                                    </FormSelect>
                                    <FormControl
                                    onChange={(e)=>setUserBio({...userBio, number : e.target.value})}
                                     required type='number' maxLength={10} style={{ maxWidth: '8em', minWidth:'8em' }} />
                                </div>
                            </div>

                            <div className="d-flex justify-content-center gap-2 w-100" style={{ minWidth: '20em' }}>
                                <FormCheckInput required onChange={(e)=>setUserBio({...userBio, checked : e.target.value})}/>
                                <label>I agree to terms and conditions </label>
                            </div>

                            <Button type="submit" className="fw-bold"
                                style={{
                                    color: '#EAFF66',
                                    maxWidth: '6em',
                                    minWidth: '6em'
                                }}>Register</Button>
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