import React from "react";
import axios from "axios";


let baseUrl = `${process.env.REACT_APP_BASEURL}/api/v1/`

const config =(token)=>{
    return token? {
        headers :{
            "Content-type": "application/json",
            "Access-Control-Allow-Origin" : '*',
            "Authorization" : `Bearer ${token}`
        }
       
    }
    : 
    {
        headers : {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin" : '*',
            "Authorization" : `Basic ZmxvYXRoaHViQGdtYWlsLmNvbTplMmIxYjkzZTMwODI0ODVhMzA4OTkyYzhjMzBlMDZjMQ==`
        }
        
    }
}

const baseHeader = {
    headers : {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin" : '*',
            "Authorization" : `Basic ZmxvYXRoaHViQGdtYWlsLmNvbTplMmIxYjkzZTMwODI0ODVhMzA4OTkyYzhjMzBlMDZjMQ==`
        }
}



export default {
    login: async (url) =>{
        try {
            const res = await axios.post(`${baseUrl}${url}`,baseHeader);
            if(res.status){
                console.log(res)
            }
            return res;
        } catch (error) {
            console.log(error)
        }
    },
    get : async (url,token) =>{
        try {
            const res = await axios.get(`${baseUrl}${url}`,baseHeader);
            return res;
        } catch (error) {
            console.log(error)
        }
    },
    post : async (url,body)=>{
        try {

        const res = await axios.post(`${baseUrl}${url}`,body,baseHeader);
        
        } catch (error) {
            
        }
    }
}