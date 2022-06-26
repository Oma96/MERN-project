   

import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink,useNavigate } from "react-router-dom";
import LoginModal from "../Components/auth/loginModal";
import RegiterModal from "../Components/auth/registerModal";
import { logoutHandler } from "../redux/actions/auth-action";
import React from "react";

import styled from 'styled-components'
import { Button } from "react-bootstrap";



const Container = styled.div `
     height: 60px;
`
const Wrapper= styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
`
const Left= styled.div`
 flex:1;
 display: flex;
 align-items: center;
 `
 const Language = styled.span`
  font-size: 14px;
  cursor:pointer;
  `
 
  
  const Center= styled.div`
   flex:1;
   text-align: center;`

const Logo= styled.h1`
font-weight: bold`
  const Right= styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`
// const Button= styled.button`
// padding: 10px;
// font-size: 20px;
// background-color: transparent;
// cursor: pointer;
// border-radius:10px;
// background-color:#DB2B39;
// border:none;
// `




export default function NavFct() {
const isAuth = useSelector((state) => state.auth.isAuth);

const cart = useSelector((state)=>state.cart.cartItems)


// const getCartCount=()=>{
//   return cart.reduce((qty,product)=>qty+product.qty,0)
// }
//logout
   const navigate= useNavigate()
  const dispatch=useDispatch()
  const logoutUser=()=>{
    dispatch(logoutHandler())
    navigate('/')

  }
  const authLinks = (
    <>
   
    
       <NavLink to="/" style={{textDecoration:'none',fontWeight:500,color:'black'}}>Home</NavLink>
        <NavLink to="products" style={{textDecoration:'none',fontWeight:500,color:'black',marginLeft:10,marginRight:10}}>Products</NavLink>
       
      
       <NavLink to="/favorites" style={{textDecoration:'none',fontWeight:500,color:'black', marginRight:10}}>Favorites </NavLink>
     <Button variant ="danger"onClick={logoutUser} >Logout </Button>
     </>
  );

  const visitorLinks = (
    <>
      <LoginModal />
      <RegiterModal />
    </>
  );

 
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          
        </Left>
        <Center><Logo>AntiGaspi</Logo></Center>
        <Right>
        {  isAuth? authLinks:   visitorLinks   }
        </Right>
          
             
           
         
           



      </Wrapper>
    </Container>
  );
}