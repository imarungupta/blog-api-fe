import React, { useEffect, useState } from "react";
import { Container, Card, CardHeader, CardBody, Label, Input, Form, FormGroup, Button, Row, Col, FormFeedback } from "reactstrap";
import { toast } from "react-toastify";
import Base from "./Base";
import { register } from "../service/user-service";
function Signup() {

{/* 1- Creating variable in the useState({}) and we need to bind these with our fields like name,email,password etc.So here we will 
    use two way bind the data.i.e. when we change the filed then the varaibale value will be changed and vice-versa. And for that we will 
    use listeners i.e. event (e), so will call a function onChange={(event)=>handleChange(event)}, this event will pass the data from 
    fields to variable and this function will be used on each fileds 
    2- For hanndling errors 
*/}
const [data,setData]=useState(
    {
        name:"",
        email:"",
        password:"",
        about:""
    });  
const [error,setError]=useState({
        errors:{},
        isError:false

});

//    useEffect(() => {
//     console.log(data);
//     console.log(error);
//    },[data]);

function handleChange(event,fieldName){
    setData({...data,[fieldName]:event.target.value});
    //setData({...data,name:event.target.value}); in this line it was taking only name 
    event.preventDefault();
    console.log("data::",data);
}

//  Or We can write above method using arrow function as given below 
// const handleChangeUsingArrowFunction=(event,fieldName)=>{
//     setData({...data,[fieldName]:event.target.value});
//     //setData({...data,name:event.target.value}); in this line it was taking only name 
//     event.preventDefault();
//     console.log("data::",data);
// }

const resetData=function() {
setData(
    {
        name:"",
        email:"",
        password:"",
        about:""
    });
}

// Function for calling api and submit the form. 
function submitForm(event, data){
    event.preventDefault();
    console.log("onSubmit data",data);
    
   // client side validation
    // if(data.name==="" || data.email==="" || data.password==="" || data.about===""){
        
    //     toast.error("Fields should not be empty");

    // }else if(data.password.length<3){

    //     toast.error("Password must be more than 5 characters long");

    // }else{
        // Call server api for sendign data to server
        register(data).then((response)=>{   
            console.log("response",response);
            console.log("status",response.status);
            if(response.status===201){
                toast.success("User Registered Successfully");
                //alert("User Registered Successfully");
                resetData();
            }
        }).catch((error)=>{
            console.log("error",error);
            if(error.response.status===401){
                toast.error(error.message);
                toast.error("You are not a valid user");
            }
            setError({
                      errors:error, 
                      isError:true
                    });
        })
    //}
    
}    


    return (
        <Base>
            <Container>
                <Row>
                    {/* {JSON.stringify(data)} */}
                    <Col sm={{ size: 8, offset: 2 }} >
                        <Card color="dark" light outline className="mt-3">
                            <CardHeader>
                                <h3 style={{ textAlign: "center" }} className="ms-1" >Register</h3>
                            </CardHeader>
                            <CardBody>
                                {/* Creating form */}
                                <Form onSubmit={(event)=>submitForm(event,data)}>
                                    {/* Email Input Field */}
                                    <FormGroup style={{ textAlign: "left" }}>
                                        <Label for="name" className="ms-1 font-weight-bold">Name</Label>
                                        <Input placeholder="Enter Name" 
                                               type="text" 
                                               name="name" 
                                               id="name" 
                                               invalid={error.errors?.response?.data?.name ? true : false} 
                                               onChange={(event)=>handleChange(event,"name")}
                                               value={data.name}
                                        />
                                        <FormFeedback>{error.errors?.response?.data?.name}</FormFeedback>
                                    </FormGroup> 
                                    {/* Email Input Field */}
                                    <FormGroup style={{ textAlign: "left" }}>
                                        <Label for="email" className="ms-1" font-size="bold">Email</Label>
                                        <Input placeholder="Enter Email" 
                                               type="email" 
                                               name="email" 
                                               id="email" 
                                               invalid={error.errors?.response?.data?.email ? true : false}  
                                               onChange={(event)=>handleChange(event,"email")}
                                               /> 
                                               <FormFeedback>{error.errors?.response?.data?.email}</FormFeedback>
                                    </FormGroup>
                                    {/* Password Input Field */}
                                    <FormGroup style={{ textAlign: "left" }}>
                                        <Label for="password" className="ms-1">Password</Label>
                                        <Input placeholder="Enter Password" 
                                               type="password" 
                                               name="password" 
                                               id="password" 
                                               invalid={error.errors?.response?.data?.password ? true : false} 
                                               onChange={(event)=>handleChange(event,"password")}
                                               />
                                        <FormFeedback>{error.errors?.response?.data?.password}</FormFeedback>
                                    </FormGroup>
                                    {/* About Input Field */}
                                    <FormGroup style={{ textAlign: "left" }}>
                                        <Label for="about" className="ms-1">About</Label>
                                        <Input placeholder="Enter About Your Self" 
                                               type="textarea" name="about" 
                                               id="about"
                                               style={{ height: "100px" }} 
                                               outline 
                                               color="dark" 
                                               onChange={(event)=>handleChange(event,"about")} 
                                               invalid={error.errors?.response?.data?.about ? true : false} />
                                            <FormFeedback>{error.errors?.response?.data?.about}</FormFeedback>   
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button color="dark" outline>Register</Button>
                                        <Button onClick={resetData} color="dark" className="ms-2" type="reset" outline>Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}
export default Signup;
