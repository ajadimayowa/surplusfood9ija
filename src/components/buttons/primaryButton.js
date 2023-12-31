import React from "react";
import style from "./button.module.css";
import { Spinner } from "react-bootstrap";

export default function PrimaryButton({title,type,loading, disable}){
    return(
        <div className={`bg-primary ${style.container}`}>
            <button
            disabled={disable}
            type={type}
            style={{
                outline: "none",
                border:'0px',
                borderRadius:'5px',
                backgroundColor: 'transparent',
                width:'100%',
                margin: "0px",
                paddingLeft: "10px",
                color:'white',
                fontFamily:'tFont'
              }}
            >{loading?<Spinner size="sm"/>:title}</button>
        </div>
    )
}