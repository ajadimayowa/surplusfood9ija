import { baseUrl } from "./config";
import axios from "axios";

const baseur = 'baseUrl/api/v1';

let header = {
    
}

const logUserIn = async (payload,token)=>{
    try {
        const res = await axios.post(`${baseur}/user/signin`,payload)
        console.log(res)
    } catch (error) {
        
    }
}