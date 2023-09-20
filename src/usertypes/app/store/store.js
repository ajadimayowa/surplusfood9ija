import React from "react";
import { userDefSlice, clearUserInfo,setUserInfo } from "./slices/userSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : userDefSlice
    
})