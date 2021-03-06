import React from "react";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


const Container= styled.div`
width: 100%;
height:100vh;
display:flex;
// background-color:#F3FFE1;
margin-bottom: 300px;
`
const Wrapper= styled.div`
height: 100%
`
const Slide= styled.div`
width:100vw;
height:100vh;
display: flex;
align-items: center;
`
const ImgContainer= styled.div`
flex:1
height:100%;`
const Image= styled.img`
height: 80%;
border-radius: 50% 20% / 10% 40%;
`
const InfoContainer= styled.div`
flex:1
padding: 50px;
margin-left: 10px`
const Title= styled.h1`
font-size: 70px;`
const Desc= styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500`

const Button= styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border-radius:10px;
background-color:#DB2B39;
border:none;
`
const Button2= styled.button`
padding: 50px;
margin-top:50px;
font-size:50px;
border:none;
border-radius: 50% 20% / 10% 40%;
background-color:#FCE4D81;
`

export default function homeVendor() {

const navigate= useNavigate()
  return (
    <Container >
      <Wrapper>
        <Slide>
        <ImgContainer>
        <Image src="https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/science/scientists-link-highly-processed-foods-to-memory-loss/12927114-1-eng-GB/Scientists-link-highly-processed-foods-to-memory-loss.jpg"></Image></ImgContainer>
        <InfoContainer>
          <Title>At AntiGaspi we fight against food waste</Title>
          {/* <Desc>. Every day and near you, 
many merchants offer you food at low prices on our application.
 So what are you waiting for to try? Sign Up and save a meal!</Desc> */}
          <Button onClick={()=>{navigate("/Add")}}>Start adding a  bascket meal!</Button>
        </InfoContainer>
      
        </Slide>
       
        
      
      </Wrapper>
     </Container>
   

  );
}