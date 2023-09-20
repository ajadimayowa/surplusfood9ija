import React, { useEffect, useState } from "react";
import './css/loader.css';
import sfoodloader from '../../assets/images/sfoodloader.gif';
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const LoaderPage = () => {
    const token = localStorage.getItem('userToken');
    const navigate = useNavigate();

    const [timer, setTimer] = useState(5);

    const handleAction = () => {
        console.log(token,'tokewe')
        if (token == null) {
            navigate('/surplus', {replace :true});
            return
        } else {
            navigate('/app/dash', {replace:true})
        }

    }

    const startTImer = () => {
        let myInterval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
            else if (timer == 0) {
                handleAction();
                setTimer(2);
                clearInterval(myInterval);
            }

        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    }


    useEffect(() => {
        startTImer();
    }, [timer]);

    return (
        <div className="container-fluid w-100 min-vh-100 d-flex justify-content-center align-items-center">
            <img src={sfoodloader} alt="loading" height={'200em'} />
        </div>
    )
}
export default LoaderPage;