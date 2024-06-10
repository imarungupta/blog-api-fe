import React from "react";
function GetInputBoxAndPrintValue() {
    
    const[inputData, setInputData]=React.useState(null);
    function getData(inputVal) {
        setInputData(inputVal.target.value)
    }
    return(
        <div>
            <h1>Hello: {inputData}</h1>
            Name: <input type="text" onChange={getData}/>
        </div>
    );
}
export default GetInputBoxAndPrintValue;
