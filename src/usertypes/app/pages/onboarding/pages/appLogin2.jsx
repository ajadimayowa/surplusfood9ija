import React from "react";
import { Outlet } from "react-router-dom";

const AppLoginT = ()=>{
    return(
        <div>
            <h1>Welcome to App login second</h1>
            {<Outlet/>}
        </div>
    )
}
export default AppLoginT;