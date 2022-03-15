   
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginModal from "../Components/auth/loginModal";
import RegiterModal from "../Components/auth/registerModal";
import { logoutHandler } from "../redux/actions/auth-action";
import React from "react";
import "./navbar.css"


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
       <Nav.Link href="#home">Home</Nav.Link>
       </Link>
       <Link className="link2" to="/Products">
       <Nav.Link href="#products">Products</Nav.Link>
       </Link>
       <Link className="link2" to="/Contact">
       <Nav.Link href="#contact">Contact</Nav.Link>
       </Link>
      
      
      <Button className="but" onClick={logoutUser} >Logout </Button>
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
              <Nav.Link className="titre" href="#home">AntiGaspi</Nav.Link>
            </Link>
             
           
          <Nav className="me-auto">
           

{  isAuth? authLinks:   visitorLinks   }

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}