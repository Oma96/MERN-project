   
import { Nav, Navbar, Container, Button} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import LoginModal from "../Components/auth/loginModal";
import RegiterModal from "../Components/auth/registerModal";
import { logoutHandler } from "../redux/actions/auth-action";
import React from "react";
import "./navbar.css"
import {BsCartFill} from "react-icons/bs"



export default function NavFct() {
  const isAuth = useSelector((state) => state.auth.isAuth);
//logout
  const dispatch=useDispatch()
  const logoutUser=()=>{
    dispatch(logoutHandler())
  }
  const authLinks = (
    <>
       <Link className="link2" to="/">
       <Nav.Link id="link2" href="#home">Home</Nav.Link>
       </Link>
       <Link className="link2" to="/Products">
       <Nav.Link id="link2" href="#products">Products</Nav.Link>
       </Link>
       <Link className="link2" to="/Contact">
       <Nav.Link id="link2" href="#contact">Contact</Nav.Link>
       </Link>
      <NavLink to='/cart'> <Button variant="success" id="but1" ><BsCartFill/>0</Button></NavLink>
      
       
       
      <Button id="but" onClick={logoutUser} >Logout </Button>
          </>
  );

  const visitorLinks = (
    <>
      <LoginModal />
      <RegiterModal />
    </>
  );
  return (
    <div className="Navbar">
      <Navbar bg="light" variant="light">
        <Container>
          <Link className="link" to="/">
              <Nav.Link id="titre" href="#home">AntiGaspi</Nav.Link>
            </Link>
             
           
          <Nav className="me-auto">
           

{  isAuth? authLinks:   visitorLinks   }

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}