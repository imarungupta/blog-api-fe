import React from "react";
function StudentPropsDemo(props){
    console.log("props", props);

   
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <h1>Roll no: {props.rollno}</h1>
            <h1>Address: {props.address.home_no}</h1>
            <h1>Address: {props.address.area}</h1>
            <h1>Address: {props.address.city}</h1>
            <h1>Address: {props.address.state}</h1>

          
        </div>
    );
}
export default StudentPropsDemo;