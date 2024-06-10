import React from "react";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Home from "../menu/Home";
import Login from "../menu/Login";
import Signup from "../menu/Signup";
import Services from "../menu/Services";
import ContactUs from "../menu/ContactUs";
import Dashboard from "../menu/Dashboard";
import About from "../menu/About";
import ProfileInfo from "../menu/ProfileInfo";
import PrivateRoute from "./PrivateRoute";

function RouterPages(){
    return(
        <BrowserRouter>
        <ToastContainer position="top-center"/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/service" element={<Services/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>

                {/* Private Routing based on condtion i.e. logged in current user and will keep all private route between privat Route tag as given belwo instead of single closing tag */}
                <Route path="/user" element={<PrivateRoute/>}>
                    {/* Keep all the route which we want to show based on condition */}
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="profile"   element={<ProfileInfo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterPages;