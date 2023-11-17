import React, { useState } from "react";
import { FormCheck, FormSelect, Modal } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from "yup";
import style from '../css/regpage.module.css';
import InputField from "../../../../../components/inputfields/input";
// import InputFieldReg from "../../../../../components/inputfields/inputFieldReg";
import InputFieldReg from "../../../../../components/inputfields/inputFieldReg";
import PrimaryButton from "../../../../../components/buttons/primaryButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginUserIn,signUserUp } from "../../../controllers/auth";
import LoginModal from "../../../../../components/modals/loginmodal";

const RegUserModal = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [loginModal,setLoginModal] = useState(false);
    const navigate = useNavigate();
    const initial = {
        "full_name": "",
        "email": "",
        "username": "",
        "password": "",
        "repeat_password": "",
        "mobile": "",
        // "terms": false
    }

    const schemas = yup.object({
        full_name: yup.string().required("Fullname is required"),
        email: yup.string().required('Email is required').email("Must be a valid email").min(3),
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
        repeat_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Passwords has to match'),
        mobile: yup.number("Must be a number").min(11).required("Phone number is required"),
        // terms: yup.boolean().required('You must agree to the terms of service'),
    });

    const handleCreateUser = async (payload) => {
        setIsLoading(true)
        try {
            console.log(payload)

            const res = await signUserUp(payload);
            console.log({ here: res })
            if (res?.success) {
                setIsLoading(false)
                toast.success('Account Successfully Created, you can login now');
                navigate('/surplus')
                // localStorage.setItem("userToken", res.token);
                // setLoginModal(true);
            } else {
                toast.error('Failed create user.');
                setIsLoading(false)
            }

        } catch (error) {

        }
    }
    return (
        <div className={`${style.container} w-100`}>
            <LoginModal on={loginModal} off={()=>setLoginModal(false)}/>
            <div className="w-100 bg-primary align-items-center py-2 justify-content-center text-center"
                style={{ minHeight: '90px', fontFamily: 'tFont', fontSize: '1em' }}>
                <h3>Thank You For Picking Interest!</h3>
                <p className="p-0 m-1" style={{ fontFamily: 'tFontMd' }}>For support and information, send mail to
                    <span style={{ fontFamily: 'tFont' }}> support@floatsolutionhub.com</span>
                </p>
            </div>

            <div className="mt-5">
                <Formik
                    initialValues={initial}
                    onSubmit={(val) => handleCreateUser(val)}
                    // validateOnBlur={true}
                    validationSchema={schemas}
                >{
                        ({
                            touched,
                            values,
                            errors,
                            handleBlur,
                            handleSubmit,
                            handleChange,
                            ErrorMessage

                        }) => (
                            <form onSubmit={handleSubmit} className="d-flex justify-content-center">
                                <div className="w-100 align-items-center gap-3 d-flex  flex-column justify-content-center">
                                    <InputFieldReg
                                        autoFoc={false}
                                        label={'Fullname'}
                                        passInput={handleChange}
                                        errors={errors.full_name}
                                        fieldName={'full_name'}
                                        fieldId={'full_name'}
                                        formType={'input'}
                                        blur={handleBlur}
                                        toucheed={touched.full_name}
                                    />
                                    <InputFieldReg
                                        autoFoc={false}
                                        label={'Email'}
                                        passInput={handleChange}
                                        errors={errors.email}
                                        fieldName={'email'}
                                        fieldId={'email'}
                                        formType={'input'}
                                        inputType={'email'}
                                        blur={handleBlur}
                                        toucheed={touched.email}
                                    />

                                    <InputFieldReg
                                        autoFoc={false}
                                        label={'Phone number'}
                                        passInput={handleChange}
                                        errors={errors.mobile}
                                        fieldName={'mobile'}
                                        fieldId={'mobile'}
                                        formType={'input'}
                                        inputType={'text'}
                                        blur={handleBlur}
                                        toucheed={touched.mobile}
                                    />

                                    <InputFieldReg
                                        autoFoc={false}
                                        label={'Username'}
                                        passInput={handleChange}
                                        errors={errors.username}
                                        fieldName={'username'}
                                        fieldId={'username'}
                                        formType={'input'}
                                        inputType={'text'}
                                        blur={handleBlur}
                                        toucheed={touched.username}
                                    />

                                    <InputFieldReg
                                        icon={true}
                                        formType={'password'}
                                        autoFoc={false}
                                        label={'Password'}
                                        passInput={handleChange}
                                        errors={errors.password}
                                        fieldId={'password'}
                                        fieldName={'password'}
                                        blur={handleBlur}
                                        toucheed={touched.username}
                                    />

                                    <InputFieldReg

                                        icon={true}
                                        formType={'password'}
                                        autoFoc={false}
                                        passInput={handleChange}
                                        blur={handleBlur}
                                        toucheed={touched.repeat_password}
                                        label={'Confirm Password'}
                                        errors={errors.repeat_password}
                                        fieldId={'repeat_password'}
                                        fieldName={'repeat_password'}
                                        placeholder={''}
                                    />

                                    <div className="d-flex flex-column p-0 m-0" style={{ fontFamily: 'tFontMd', fontSize: '0.8em' }}>
                                        <div className="d-flex text-center gap-2">
                                        <FormCheck  />
                                        <p className="p-0 m-0 mb-1">I Accept <a href="google.com" style={{ textDecoration: 'none' }}>Terms</a>  & <a href="google.com" style={{ textDecoration: 'none' }}>Condition</a></p>
                                        </div>

                                        {touched.terms && errors.terms && <ErrorMessage name="terms" />}
                                    </div>
                                   
                                    <PrimaryButton loading={isLoading} type={'submit'} title='Login' />

                                    <p className="w-75 text-center p-0 m-0" style={{ fontSize: '0.8em', fontFamily: 'tFont' }}>
                                        Have an account? <span
                                            style={{ cursor: 'pointer' }}
                                            className="text-primary"
                                            onClick={() => {
                                                navigate('/surplus/register')
                                            }}>Login</span>
                                    </p>
                                </div>

                            </form>
                        )
                    }

                </Formik>
            </div>

        </div>
    )
}
export default RegUserModal;