import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from "yup";
import InputField from "../inputfields/input";
import PrimaryButton from "../buttons/primaryButton";
import { loginUserIn } from "../../usertypes/app/controllers/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const LoginModal = ({ on, off }) => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const initial = {
        email: '',
        password: ''
    }

    const schemas = yup.object({
        email: yup.string().required("Email is a required "),
        password: yup.string().required("Password is required"),
        // lastName: yup.string().trim().required("Last name is required").min(3),
        // email: yup.string().email("Must be a valid email").min(3),
        // dialcode: yup.string().required("Dial code is required"),
        // phoneNumber: yup.string().required("Phone number is required").matches(/^[0-9]+$/, "Must be only digits")
        //     .min(8, "minimum must be 8 characters")
        //     .max(17, "maximum must be 17 characters"),
        // gender: yup.string().trim().required("Gender is required"),
        // country: yup.string().trim().required("Country is required"),
        // state: yup.string().trim().required("states is required").min(3),
        // city: yup.string().required("city is required").min(3),
        // address: yup.string().required("Address is required").min(3),
        // branch: yup.string().trim().required("branch is required").min(3),
        // staffId: yup.string().trim().required("staff Id is required").min(3),
        // // about: yup.string().trim().required("About is required").min(3),

    });

    const handleLogin = async (payload) => {
        setIsLoading(true)
        try {
           
            const res = await loginUserIn(payload);
            console.log({here:res})
            if (res?.success) {
                setIsLoading(false)
                toast.success('Login Successfull');
                localStorage.setItem("userToken", res.token);
                navigate('/app/dash');
            } else {
                toast.error('Failed too login');
                setIsLoading(false)
            }

        } catch (error) {

        }
    }
    return (
        <Modal show={on} centered>
            <Modal.Header>
                <div className="w-100 d-flex justify-content-between">
                    <h5 style={{ fontFamily: 'tFont' }}>Kindly login below</h5>
                    <i className="bi bi-x-circle" style={{ cursor: 'pointer', fontWeight: '900' }}
                        onClick={off}
                    ></i>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={initial}
                    onSubmit={(val) => handleLogin(val)}
                    validateOnBlur={true}
                    validationSchema={schemas}
                >{
                        ({
                            values,
                            errors,
                            handleSubmit,
                            handleBlur,
                            handleChange,
                            touched
                        }) => (
                            <form onSubmit={handleSubmit} className="d-flex justify-content-center">
                                <div className="w-100 align-items-center gap-3 d-flex  flex-column justify-content-center">
                                    <InputField
                                        passInput={handleChange}
                                        errors={errors.email} fieldName={'email'} fieldId={'email'} placeholder={'User Email'} formType={'input'} />

                                    <InputField
                                        passInput={handleChange}
                                        errors={errors.password} fieldId={'password'} fieldName={'password'} icon={true} name={'password'} placeholder={'Password'} formType={'password'} />
                                    <p className="w-75 text-end p-0 m-0" style={{ fontSize: '0.8em' }}>Forgot your password?</p>
                                    <PrimaryButton loading={isLoading} type={'submit'} title='Login' />
                                    <p className="w-75 text-center p-0 m-0" style={{ fontSize: '0.8em', fontFamily: 'tFont' }}>
                                        Dont have an account? <span
                                            style={{ cursor: 'pointer' }}
                                            className="text-primary">Register</span>
                                    </p>
                                </div>

                            </form>
                        )
                    }

                </Formik>
            </Modal.Body>

        </Modal>
    )

}
export default LoginModal;