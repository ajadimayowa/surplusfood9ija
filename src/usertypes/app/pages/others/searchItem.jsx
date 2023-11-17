import React,{useState} from "react";
import InputField from "../../../../components/inputfields/input";

const SearchItemPage = ()=>{
    return(
        <div className="d-flex w-100">
            <div className="d-flex justify-content-center align-items-center w-100 bg-primary py-2">
            <InputField fieldId={'myInput'} formType={'search'} icon={true} placeholder={'I am looking for?'}/>
            </div>
            
        </div>
    )
}
export default SearchItemPage;