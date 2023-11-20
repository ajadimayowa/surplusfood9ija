import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./inputfield.module.css";
import "./inputfield.module.css";

export default function InputField({disable, icon,fieldId,fieldName, errors,autoFocus, title, onClick, placeholder,inputType,formType,passInput,toggleShow}) {
 
  const [showPass,setShowPass] = useState(false);
  const navigate = useNavigate();
if(formType == 'input'){
  return (
    <div className="d-flex flex-column" style={{ width: "300px",}}>
    <div className={`${style.container}  rounded rounded-1`}>
      <input
      autoFocus={autoFocus}
      onChange={passInput}
      id={fieldName}
      name={fieldName}
      className={`${style.field} rounded`}
      type={inputType}
        placeholder={placeholder}
        style={{
          outline: "none",
          border: "none",
          margin: "0px",
          paddingLeft: "10px",
          color:'#7b7b7b',
          width:'90%'
        }}
      />
      {/* <p
      onClick={toggleShow}
        style={{
          display: "flex",
          margin: "0px",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {icon}
      </p> */}

      {icon? <i className="bi bi-eye"></i>:''}
    </div>
    <p className="p-0 m-0 text-danger" style={{fontSize:'0.8em'}}>{errors}</p>
    </div>
  )
}
 else if(formType == 'password') {
  return (
    <div className="d-flex flex-column" style={{ width: "300px",}}>
    <div className={`${style.container} rounded rounded-1`}>
      <input
      onFocus={autoFocus}
      onChange={passInput}
      id={fieldId}
      name={fieldName}
      className={`${style.field} rounded`}
      type={showPass?'text':'password'}
        placeholder={placeholder}
        style={{
          outline: "none",
          border: "none",
          width: "88%",
          margin: "0px",
          paddingLeft: "10px",
          color:'#7b7b7b'
        }}
      />
      {/* <p
      onClick={toggleShow}
        style={{
          display: "flex",
          margin: "0px",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {icon}
      </p> */}

      {<i className={`bi ${showPass?'bi-eye':'bi-eye-slash'}`} onClick={()=>setShowPass(!showPass)}></i>}
    </div>
    <p className="p-0 m-0 text-danger" style={{fontSize:'0.8em'}}>{errors}</p>
    </div>
  )
} else if(formType == 'searchButton'){
  return (
    <div className="d-flex flex-column mt-2" style={{ width: "340px",}}>
    <div onClick={onClick} className={`bg-light ${style.container} rounded rounded-1`}>
    {icon? <i className="bi bi-search text-center text-primary" style={{width:'50px',fontSize:'1.3em'}}></i>:''}
      <button
      onChange={passInput}
      id={fieldName}
      name={fieldName}
      className={`py-2 bg-light text-start px-3 ${style.field} rounded`}
      type={inputType}
        placeholder={placeholder}
        style={{
          outline: "none",
          border: "none",
          margin: "0px",
          paddingLeft: "10px",
          color:'#7b7b7b',
          width: "270px",
        }}
      >I am looking for?</button>
      {/* <p
      onClick={toggleShow}
        style={{
          display: "flex",
          margin: "0px",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {icon}
      </p> */}
    </div>
    <p className="p-0 m-0 text-danger" style={{fontSize:'0.8em'}}>{errors}</p>
    </div>
  )
} 
else if(formType == 'search'){
  return (
    <div className="d-flex flex-column mt-2" style={{ width: "340px",}}>
    <div  className={`bg-light ${style.container} rounded rounded-1`}>
    {icon? 
    <i className="bi bi-chevron-left text-center text-primary" 
    onClick={()=>navigate(-1)}
     style={{width:'50px',fontSize:'1.3em'}}></i>:''}
      <input
      autoFocus
      onChange={passInput}
      id={fieldName}
      name={fieldName}
      className={`py-2 bg-light text-start px-3 ${style.field} rounded`}
      type={inputType}
        placeholder={placeholder}
        style={{
          outline: "none",
          border: "none",
          margin: "0px",
          paddingLeft: "10px",
          color:'#7b7b7b',
          width: "270px",
        }}
      />
      {/* <p
      onClick={toggleShow}
        style={{
          display: "flex",
          margin: "0px",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {icon}
      </p> */}
    </div>
    <p className="p-0 m-0 text-danger" style={{fontSize:'0.8em'}}>{errors}</p>
    </div>
  )
}
}
