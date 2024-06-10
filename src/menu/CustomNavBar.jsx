import React from 'react';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
// Here NavLink from reactstrap is being used for navbar so that form could not reload on click
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { doLogoutAndRemoveTokenFromLocalStorage, getCurrentUserDetail, getRoleDetail, isUserLoggedIn } from '../auth/Auth';

const CustomNavBar = () => {

  const navigate= useNavigate();// for redirecting to home page

  const [isOpen, setIsOpen] = React.useState(false);
  const [loginUser, setLoginUser] = React.useState(false); // User is logged in or not
  const [currentUser, setCurrentUser] = React.useState(undefined);// Current logged in user details
  const [role, setRole] = React.useState(undefined);

  // let's create useEffect hook to check if user is logged in or not and this will be called as soon as the page is loaded
  React.useEffect(() => {
    setLoginUser(isUserLoggedIn());     // setting the value of loginUser to true or false from auth
    setCurrentUser(getCurrentUserDetail()); // setting the value of currentUser from auth
    setRole(getRoleDetail()); // setting the current value of role from auth 
  },[isUserLoggedIn])         // if isUserLoggedIn changes then useEffect will be called if it is true then here it will become true and if it is false then it will become false
                             // here we have  provide input [isUserLoggedIn] so it will be called only when isUserLoggedIn changes and not again


                             // Now based on the value of loginUser we will render the navbar
  const toggle = () => setIsOpen(!isOpen);
  
  const logout = () => {
    doLogoutAndRemoveTokenFromLocalStorage(); 
    setLoginUser(false);
    navigate('/'); // Navigate to home page
  }
  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="md"
        fixed=""
        className='px-4'
      >
        {/* <NavbarBrand href="/home">My Blog</NavbarBrand> */}
        <NavbarBrand tag={ReactLink} to="/" >My Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

        {/* {me-auto is to make Nav bar LHS} */}
          <Nav className="me-auto" navbar> 
            <NavItem>
              <NavLink tag={ReactLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/service">Service</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/contactus">Contact Us</DropdownItem>
                <DropdownItem tag={ReactLink} to="/home">Facebook</DropdownItem>
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          {/* {then below <Nav> is used to make the nav bar login an Signup on RHS , 
            it will take these bars RHS automatically and the above Nag tag is for LHS} */}
          <Nav navbar>
            {/* {if user is logged in then show Logout else show Login} */}
            {
            loginUser ? 
            <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/dashboard">{currentUser.email}</NavLink>
                </NavItem>
               
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    More
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Id: {currentUser.id}</DropdownItem>
                    <DropdownItem>{currentUser.name}</DropdownItem>
                    <DropdownItem tag={ReactLink} to="/about">{currentUser.about}</DropdownItem>
                    <DropdownItem tag={ReactLink} to="/signup">SignUp</DropdownItem>
                    <DropdownItem tag={ReactLink} to="/user/profile">Profile</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
            </>: 
             <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>             
                  <NavLink tag={ReactLink} to="/signup">SighUp</NavLink>
                </NavItem>
            </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default CustomNavBar;