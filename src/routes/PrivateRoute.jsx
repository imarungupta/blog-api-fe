import React from 'react'
import { Outlet , Navigate} from 'react-router-dom'
import { getCurrentUserDetail, isUserLoggedIn , getTokenFromLocalStorage} from '../auth/Auth'


function PrivateRoute() {

  let loggedUser = isUserLoggedIn();
  let currentUser = getCurrentUserDetail(); 
  let token = getTokenFromLocalStorage();
  //console.log('loginUser', loginUser)


    console.log("login", loggedUser);
    console.log("token", token);
    console.log('currentUser Detail::', currentUser);
    console.log('currentUser Name::', currentUser.name);
    console.log('currentUser Email::', currentUser.email);

  // if(loggedUser) {
  //   return <Outlet></Outlet>
  // }else{
  //   console.log("login", loggedUser)
  //   return <Navigate to="/login" />
  // }

  return loggedUser ? <Outlet></Outlet> : <Navigate to="/login" />;
}
export default PrivateRoute