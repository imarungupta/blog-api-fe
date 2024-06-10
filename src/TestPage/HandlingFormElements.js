import React from 'react';
function HandlingFormElements() {
    const [inputData, setInputData] = React.useState(null);
    function setInputDataFunction(inputVal) {
        setInputData(inputVal.target.value);
    }
    return (
        <div>
            <form>
                <h1>Handling Form Elements</h1>
                <h3>Entered Input : {inputData}</h3>
                <input type="text" id="input" placeholder="Enter the Input" onChange={setInputDataFunction} /><br /><br />
                <div>
                    <select id="select">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select><br /><br />
                    <input type="checkbox" name="checkbox" value="checkbox" /><span>Please Check the checkbox</span><br /> <br />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default HandlingFormElements