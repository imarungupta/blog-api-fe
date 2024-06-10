import React from 'react';
import StudentPropsDemo from './StudentPropsDemo';
function CallStudentProps(){    

    const [name, setName]= React.useState("Bunty");
    const [rollno, setRollno]= React.useState("200");

    function updateStudentProps(){
        setName("Bunty12");
        setRollno("2001");
    }
    return(
        <div className="App">
            <h1>Sending props to StudentPropsDemo Function Props1</h1>
            <StudentPropsDemo name ={"Arun"} rollno={1} address={{home_no:"123",area:"Alenganj",city:"alld",state:"UP"}}/>
            {/* <h1>Sending props to StudentPropsDemo Function Props2</h1>
            <StudentPropsDemo name ={"tArun"} rollno={1} address={{home_no:"1234",area:"Alenganj1",city:"alld1",state:"UP1"}}/>
             */}
            <h1>Sending props to StudentPropsDemo Function Props3</h1>
            <StudentPropsDemo name ={name} rollno={rollno} address={{home_no:"1234",area:"Alenganj1",city:"alld1",state:"UP1"}}/>

            <button onClick={()=>(updateStudentProps())}>Update</button>
        </div>
    );
}
export default CallStudentProps;