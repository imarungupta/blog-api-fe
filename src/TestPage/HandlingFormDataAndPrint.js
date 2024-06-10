import React from "react";
import Base from "../Master/Base";
function HandlingFormElements(event){
    //Declare the useState for input text,select box and checkbox
    const [inputText,setInputText]=React.useState("");
    const [checkboxText,setCheckboxText]=React.useState(false);
    const [selectText,setSelectText]=React.useState("");

    function getFormData(event){
        console.log(inputText,checkboxText,selectText);
        <h3></h3>
        event.preventDefault();
    }
    return(
        <Base>
        <div>
            <form onSubmit={getFormData}>
                <h1>Handling Form Elements</h1>
                <h3>Entered Input : {inputText}</h3>
                <input type="text" id="input" placeholder="Enter the Input" onChange={(event)=>(setInputText(event.target.value))} /><br /><br />
                <div>
                    <select id="select" onChange={(event)=>(setSelectText(event.target.value))} value={selectText} >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select><br /><br />
                    <input type="checkbox" name="checkbox" value="checkbox" onChange={(event)=>(setCheckboxText(event.target.value))} /><span>Please Check the checkbox</span><br /> <br />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </Base>
    )

}export default HandlingFormElements;