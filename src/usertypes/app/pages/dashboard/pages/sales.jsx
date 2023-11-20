import { Formik } from "formik";
import React from "react";
import { FormSelect } from "react-bootstrap";
import { Outlet, Routes, Route } from "react-router-dom";
import InputField from "../../../../../components/inputfields/input";
import InputFieldReg from "../../../../../components/inputfields/inputFieldReg";
import PrimaryButton from "../../../../../components/buttons/primaryButton";

export default function SalesPage() {
    const category = [
        {
            title: 'Swallow',
            id: ''
        },
        {
            title: 'Grains',
            id: ''
        },
        {
            title: 'Oils',
            id: ''
        },
        {
            title: 'Tubers',
            id: ''
        }
    ]
    const initial = {

        "name": "",
        "images": [
            {
                "key": "string",
                "location": "string"
            }
        ],
        "description": "",
        "address": "",
        "price": "",
        "category": ""


    }
    return (
        <div className="w-100 px-2">
            <h4 className="text-center py-2 mt-2 rounded shadow-sm bg-light">Post a new product</h4>
            <div className="d-flex w-100 justify-content-center">
                <Formik
                    initialValues={initial}
                    onsubmit={(val) => console.log(val)}
                >
                    {
                        ({ handleSubmit }) => (
                            <form
                                style={{ width: '300px', }}
                                className="d-flex flex-column gap-3 mt-5 mb-3 align-items-center"
                                onSubmit={handleSubmit}>
                                <FormSelect style={{ width: '300px', minHeight: '3.3em' }}>
                                    <option>Select Category</option>
                                    {
                                        category.map((cat) => (
                                            <option>{cat.title}</option>
                                        ))
                                    }
                                </FormSelect>
                                <InputFieldReg 
                                autoFoc={false}
                                fieldName={'name'}
                                fieldId={'name'}
                            placeholder={'Product Title'}
                                formType={'input'} />

                                <div className="w-100">
                                    <p className="p-0 m-0 font-weight-bold" >{'Add photo (optional)'}</p>
                                    <p
                                        style={{ fontFamily: 'tFont', fontSize: '0.8em' }}
                                        className="font-weight-bold p-0 m-0 ">{'Add at least 1 photo for this category'}
                                    </p>
                                    <p className="p-0 m-0 font-weight-bold mt-2" >{'First picture - is the title picture.'}</p>
                                </div>

                                <div className="w-100">
                                    <div>

                                        <input
                                        
                                            className="bg-primary rounded d-flex justify-content-center align-items-center"
                                            style={{ width: '7em', height: '6em' }}
                                            type='file'
                                        />
                                    </div>
                                </div>

                                <PrimaryButton title={'Post'} disable={true} />
                            </form>
                        )
                    }

                </Formik>
            </div>

        </div>
    )
}