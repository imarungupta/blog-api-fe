import React from "react";
function StateObjectDemo(){
    //let data="Arun";
    let [data,setData]=React.useState("Arun");
    function UpdateData(){
       // data="Bunty";
       setData("Bunty");
       
        alert(data+" is clled ");
    }
    return(
        <div id="stateId">
            <h1>Stat value is : {data}</h1>
            <button onClick={UpdateData}>Update State</button>
        </div>
    );
}
export default StateObjectDemo;