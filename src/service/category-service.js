import axios from "axios";
import { getTokenFromLocalStorage } from "../auth/Auth";

//const token = getTokenFromLocalStorage();

export const BASE_URL = "http://localhost:8083";

const token1= "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGlscGlAZ21haWwuY29tIiwiaWF0IjoxNzE3OTMyMDQ2LCJleHAiOjE3MTc5NTAwNDZ9.5GkoWxmUPM_3C43n9j_bLI5COQgfYzWU9Yaddv4bm1I"
export const myAxios = new axios.create({
    //baseURL: "http://localhost:8083/api/categories",
    
    baseURL: BASE_URL,
    headers: {"Authorization" : `Bearer ${token1}`, 'Content-Type': 'application/json'}
});

// We can see the url from the backend application or from swagger API
export const loadAllCategories = () => {
    return myAxios.get("/api/categories/").then((response) => response.data);
}


// /api/user/{userId}/category/{categoryId}/posts
export const saveCategory = (postData) => {
    const tokenPost = getTokenFromLocalStorage();

    console.log("postData===?",postData.userId);
    console.log("postData===?",postData.categoryId);
    console.log("tokenPost===?",tokenPost);

    const addPostUrl=`/api/user/${postData.userId}/category/${postData.categoryId}/posts`;
    console.log("addPostUrl===?",addPostUrl);

    return privateAxios.post(addPostUrl, postData).then((response) => response.data);
}

export const privateAxios = new axios.create({
    baseURL: BASE_URL,
    headers: {"Authorization" : `Bearer ${getTokenFromLocalStorage()}`, 'Content-Type': 'application/json'}
    
});

privateAxios.interceptors.response.use(config=>{
    console.log("Inside interceptor");
   const token = getTokenFromLocalStorage();
 
   if(token){
    config.headers.common.Authorization = `Bearer ${token}`;
    console.log(config);
   }
   
   return config;
},(error)=>{
   return Promise.reject(error);
});