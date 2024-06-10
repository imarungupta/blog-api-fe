import React from "react";
import { Container, Card, CardHeader, CardBody, Label, Input, Form, FormGroup, Button, Row, Col } from "reactstrap";
import Base from "./Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../service/user-service";
import { doLogin } from "../auth/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate=useNavigate();  // for redirecting to dashboard page

    // Create useState variable
    const [loginDetail, setLoginDetail]= useState(
        {
        username:"",
        password:"" 
        }
    );
    // Create useState variable for storing errors
    const [error,setError]=useState(
        {
        errors:{},
        isError:false

        }
    );
    // Create function for handling form two way field binding. Here we will pass the data from fields to variable and this function will be used on each fileds
    // ...loginUser means all the fileds of loginUser variable. 
    function handleTwoWayFieldBind(event,fieldName){
        // get the data from the fields and set into useState varaible. 
        setLoginDetail({...loginDetail,[fieldName]:event.target.value});
        event.preventDefault();
        console.log("data::",loginDetail);
    }

    // Submit form function - server connect and get resonse 
    const submitForm = (event,loginDetail)=>{

        event.preventDefault();
        console.log("onSubmit data",loginDetail);
        if(loginDetail.username==="" || loginDetail.password===""){

            toast.error("Username and Password should not be empty");
        }else{
            // Call server api for sendign data to server
            login(loginDetail).then((jwtTokenData)=>{
                
                // save the jwtTokenData and its user datail intl localStorage
                doLogin(jwtTokenData, ()=>{
                    console.log("login detail is saved to local storage");
                    // redirect to dashboard page once logged in. 
                    navigate("/user/dashboard");
                })
                console.log("User login ");
                console.log("JWT Token",jwtTokenData);
                 if(jwtTokenData.status===200){
                     toast.success("Login Successfull");
                 }else{       
                     toast.error("Login Failed");
                 }
            }).catch(error=>{
                console.log("Error",error);
                if(error.response.status===404 || error.response.status===400){
                    toast.error(error.response.data.message);
                    toast.error(error.message);
                }
                setError({
                    errors:error, 
                    isError:true
                  });
            })
        }
    }
    
    // Reset variable function 
    const resetData = () => {
        setLoginDetail(
            {
                username: "",
                password: ""
            }
        )
    }
     
    return (
        <Base>
            <div>
                <Container>
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }}>
                            <Card color="dark" light outline className="mt-3 "> 
                                <CardHeader style={{ textAlign: "center" }} className="ms-1"><h3>Login</h3></CardHeader>
                                <CardBody>
                                    <Form onSubmit={(event)=>submitForm(event,loginDetail)}>
                                        {/* Username Input Field */}
                                        <FormGroup style={{ textAlign: "left" }}>
                                            <Label for="username" className="ms-1">UserName</Label>
                                            <Input type="text" 
                                                   name="username" 
                                                   id="username" 
                                                   placeholder="Enter Name" 
                                                   onChange={(event)=>handleTwoWayFieldBind(event,"username")}
                                                   value={loginDetail.username}
                                                   valid />
                                        </FormGroup>
                                        {/* Password Input Field */}

                                        <FormGroup style={{ textAlign: "left" }}>
                                            <Label for="password" className="ms-1">Password</Label>
                                            <Input type="text" 
                                                   name="password" 
                                                   id="password" 
                                                   placeholder="Enter Name" 
                                                   onChange={(event)=>handleTwoWayFieldBind(event,"password")}
                                                   vlaue={loginDetail.password}
                                                   valid 
                                                   onClick={resetData}/>
                                        </FormGroup>
                                        <Container className="text-center">
                                            <Button color="dark" outline>Login</Button>
                                            <Button color="dark" className="ms-2" type="reset" outline>Reset</Button>
                                        </Container>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Base>
    );
}
export default Login;