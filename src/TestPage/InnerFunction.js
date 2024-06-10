import { render } from "@testing-library/react";
import MultipleComponentInOnePage from "./MultipleComponentInOnePage"

function InnerFunction(){
    let name="ArunGupta";
    function innerFunction1(){
        let name="Atharv";
        alert(name);
        render(
            <div className="App">
                <h1>Hellow User from Innner function</h1>
               
            </div>
        )
    }
    return(
<div className="App">
    <h1>Hellow User from user function:{name}</h1>
    <button onClick={()=>innerFunction1()}>Inner Function With Arraow Notation</button>
    <button onClick={innerFunction1}>Inner Function Without Arraow</button>
    <button onClick={()=>innerFunction1("Inner Function is Called")}>Inner Function arg</button>
    <MultipleComponentInOnePage />
</div>
    )
}
export default InnerFunction;