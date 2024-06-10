// import { myAxios } from "./serviceHelper";
import axios from "axios";
import { getTokenFromLocalStorage } from "../auth/Auth";

export const BASE_URL = "http://localhost:8083";
// function create a new service helper instance with the given options .
//const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGlscGlAZ21haWwuY29tIiwiaWF0IjoxNzE3NzQ0MTMxLCJleHAiOjE3MTc3NjIxMzF9.rU_zjFM3wsPBolv5pVzye0fESkT6Z8AeL38y4o7lrVI";
 const token = getTokenFromLocalStorage();


export const myAxios = new axios.create({
    baseURL: BASE_URL, 
    headers: {"Authorization" : `Bearer ${token}`, 'Content-Type': 'application/json'}
});
export const register = (user) => {

   
    return myAxios.post("/api/auth/register/user",user)
                  .then((response)=>response);

    // So here calling the api using post and then whatever response we are gettig, we are connectint it inot json and retrun the same 
}

export const login = (user) => {

    return myAxios.post("/api/auth/login",user)
                  .then((response)=>response);
}