import React from "react";
function HideAndShowElement() {
    const [show, setShow] = React.useState(true);
    return (
        <div>
            {/* <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
                <br />
            </button>
            {show && <h1>Hello</h1>} */}
            {show ?  <h1>Hello Shwoing</h1> : <h1>Hello Hide</h1>}
            <button onClick={() => setShow(!show)}> Toggle Element</button>  

            <button onClick={() => setShow(true)}> show Button</button>    
            <button onClick={() => setShow(false)}> Hide Button</button>       
        </div>
    );
}
export default HideAndShowElement;  