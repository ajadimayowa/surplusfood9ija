import React from "react";
import axios from "axios";

let baseUrl = 'https://surplusfood-9ja.onrender.com/api/v1/'

const config =(token)=>{
    return token? {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin" : '*',
        "Authorization" : `Bearer ${token}`
    } : 
    {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin" : '*',
        "Authorization" : `Basic ZmxvYXRoaHViQGdtYWlsLmNvbTplMmIxYjkzZTMwODI0ODVhMzA4OTkyYzhjMzBlMDZjMQ==`
    }
}

export default {
    get : async (url,token) =>{
        try {
            const res = axios.get(`${baseUrl}${url}`,config(token));
            return res;
        } catch (error) {
            console.log(error)
        }
    },
    post : async (url,body,token)=>{
        const res = axios.post(`${baseUrl}${url}`,body,config(token));
        return res;
    }
}