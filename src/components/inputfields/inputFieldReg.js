import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./inputfield.module.css";
import "./inputfield.module.css";

export default function InputFieldReg({
  disable,
  label,
  autoFoc,
  blur,
  icon,
  fieldId,
  fieldName,
  errors,
  title,
  onClick,
  placeholder,
  inputType,
  formType,
  passInput,
  toggleShow,
  toucheed,
}) {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  if (formType == "input") {
    return (
      <div
        className="d-flex flex-column"
        style={{ width: "300px", fontFamily: "tFontMd" }}
      >
        <p className="p-0 m-0 mb-1">{label}</p>
        <div className={`${style.container}  rounded rounded-1`}>
          <input
            onBlur={blur}
            autoFocus={autoFoc}
            onChange={passInput}
            id={fieldName}
            name={fieldName}
            className={`${style.field} rounded`}
            type={inputType}
            placeholder={placeholder}
            style={{
              width: "90%",
              outline: "none",
              border: "none",
              margin: "0px",
              paddingLeft: "10px",
              color: "#7b7b7b",
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

          {icon ? <i className="bi bi-eye"></i> : ""}
        </div>
        {toucheed && errors && (
          <p className="p-0 m-0 text-danger" style={{ fontSize: "0.8em" }}>
            {errors}
          </p>
        )}
      </div>
    );
  } else if (formType == "password") {
    return (
      <div
        className="d-flex flex-column"
        style={{ width: "300px", fontFamily: "tFontMd" }}
      >
        <p className="p-0 m-0 mb-1">{label}</p>
        <div className={`${style.container} rounded rounded-1`}>
          <input
            onBlur={blur}
            onChange={passInput}
            id={fieldId}
            name={fieldName}
            className={`${style.field} rounded`}
            type={showPass ? "text" : "password"}
            placeholder={placeholder}
            style={{
              outline: "none",
              border: "none",
              width: "90%",
              margin: "0px",
              paddingLeft: "10px",
              color: "#7b7b7b",
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

          {
            <i
              className={`bi ${showPass ? "bi-eye" : "bi-eye-slash"}`}
              onClick={() => setShowPass(!showPass)}
            ></i>
          }
        </div>
        {toucheed && errors && (
          <p className="p-0 m-0 text-danger" style={{ fontSize: "0.8em" }}>
            {errors}
          </p>
        )}
      </div>
    );
  } else if (formType == "searchButton") {
    return (
      <div className="d-flex flex-column mt-2" style={{ width: "340px" }}>
        <p className="text-danger">{label}</p>
        <div
          onClick={onClick}
          className={`bg-light ${style.container} rounded rounded-1`}
        >
          {icon ? (
            <i
              className="bi bi-search text-center text-primary"
              style={{ width: "50px", fontSize: "1.3em" }}
            ></i>
          ) : (
            ""
          )}
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
              color: "#7b7b7b",
              width: "270px",
            }}
          >
            I am looking for?
          </button>
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
        {errors && (
          <p className="p-0 m-0 text-danger" style={{ fontSize: "0.8em" }}>
            {errors}
          </p>
        )}
      </div>
    );
  } else if (formType == "search") {
    return (
      <div className="d-flex flex-column mt-2" style={{ width: "340px" }}>
        <p className="text-danger">{label}</p>
        <div className={`bg-light ${style.container} rounded rounded-1`}>
          {icon ? (
            <i
              className="bi bi-chevron-left text-center text-primary"
              onClick={() => navigate(-1)}
              style={{ width: "50px", fontSize: "1.3em" }}
            ></i>
          ) : (
            ""
          )}
          <input
            autoFocus={autoFoc}
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
              color: "#7b7b7b",
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
        {errors && (
          <p className="p-0 m-0 text-danger" style={{ fontSize: "0.8em" }}>
            {errors}
          </p>
        )}
      </div>
    );
  }
}
