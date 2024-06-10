
// Function to check if user is logged in or not.

export const isUserLoggedIn = ()=> {
    // here we are getting the loginData from the localStorage object of the browser.
    const loginData = localStorage.getItem("localStorageData");
    //console("loginData: " + loginData)
    // here we are checking if the loginData is null or not.
    if (loginData === null) {
        return false;
    }else{
        // if the loginData is not null then we are returning true and then user is logged in.
        return true;
    }
  }

  //export default isUserLoggedIn

// function to login and set the token in the localStorage object of the browser.
export function doLogin(data, next) {

    localStorage.setItem("localStorageData", JSON.stringify(data));
    next();
    // here loginData is the key and JSON String is the value. Becasue in localStorage  string is 
    // stored and during taking from localStorage we need to parst this string to Json. 
    // Here next is the callback function that will be used when we actually use the functionality

    // So here we are storing the loginData in the localStorage object of the browser.

}
//export default doLogin;

// function to logout and remove the token from the localStorage object of the browser.
export function doLogoutAndRemoveTokenFromLocalStorage() {
    localStorage.removeItem("localStorageData");
    //next();
}
export const getTokenFromLocalStorage =() => {
    const loginData = localStorage.getItem("localStorageData");
    if (loginData === null) {
        return null;
    }else{
        return JSON.parse(loginData).data.token;
    }
}
// function to get the current user detail.
export const getCurrentUserDetail = () => {
    if(isUserLoggedIn()) {
        const curentUser = JSON.parse(localStorage.getItem("localStorageData")).data.user;  // This we written with the help of inpect element 
        return curentUser;
    }else{
        return undefined;
}
}
// Since in the localStorage the loginData will contain token and user both and here we need only user 
//that is why we have kept user while takging data from localStorage

export const getRoleDetail=() => {
    if(isUserLoggedIn()) {
        const curentUser = JSON.parse(localStorage.getItem("localStorageData")).data.user.role;  // This we written with the help of inpect element 
        return curentUser;
    }else{
        return undefined;
    }
}
