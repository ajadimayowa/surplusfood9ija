import axios from "axios";
import base64 from 'base-64';

export const apiKey = base64.encode('e2b1b93e3082485a308992c8c30e06c1');


export const  baseUrl = `${process.env.REACT_APP_BASEURL}/api/v1/`;

export const useAxios = axios.create({
    baseURL : baseUrl,
    headers : {
        Accept: "application/json",
        "Authorization": `Basic ZmxvYXRoaHViQGdtYWlsLmNvbTplMmIxYjkzZTMwODI0ODVhMzA4OTkyYzhjMzBlMDZjMQ==`
    },
})