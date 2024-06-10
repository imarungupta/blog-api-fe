import React from "react";
import CustomNavBar from "./CustomNavBar";
function Base({title ="My Blog",children}){
    return(
        <div className="container-fluid p-0 m-0 text-center">
            <h5>{title}</h5>
            <CustomNavBar />

            {children}

            <h1>This is footer</h1>
        </div>
    );
}export default Base;