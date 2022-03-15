import React from "react";
import { useSelector } from "react-redux";
import  PanierList  from "./panierList";
import "./products.css"



export default function Products() {
  const user = useSelector((state) => state.auth.user);
  
  return (
    <div>
      <h1 className="text">Welcome back {user&&user.name} </h1>
      <PanierList />
      
    </div>
  );
}