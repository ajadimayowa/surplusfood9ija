import React, { useState } from "react";
import style from "./inputfield.module.css";
import "./inputfield.module.css";

export default function InputField({ icon,fieldId,fieldName, errors, title, placeholder,inputType,formType,passInput,toggleShow}) {
  const [showPass,setShowPass] = useState(false);
if(formType == 'input'){
  return (
    <div className="d-flex flex-column" style={{ width: "300px",}}>
    <div className={`${style.container} rounded rounded-1`}>
      <input
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
} else if(formType == 'search'){
  return (
    <div className="d-flex flex-column" style={{ width: "340px",}}>
    <div className={`bg-light ${style.container} rounded rounded-1`}>
      <input
      onChange={passInput}
      id={fieldName}
      name={fieldName}
      className={`py-2 px-3 ${style.field} rounded`}
      type={inputType}
        placeholder={placeholder}
        style={{
          outline: "none",
          border: "none",
          margin: "0px",
          paddingLeft: "10px",
          color:'#7b7b7b',
          width: "340px",
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
}
