import React,{useState} from "react";
import { useSelector } from "react-redux";
import  PanierList  from "../component/panierList";
import { InputGroup,FormControl,Button } from "react-bootstrap";






export default function Products() {
  const [input, setInput] = useState('')

  const handleInput=(e) => {
    setInput(e.target.value) }



  const user = useSelector((state) => state.auth.user);
  
  return (
    <div>
      <InputGroup style={{maxWidth:500,marginLeft:450,marginTop:100}}>
    <FormControl style={{borderRadius:10}}
      placeholder="Search a bascket..."
      value={input}
      onChange={handleInput}/>
  
  </InputGroup>
      <PanierList input={input} />
    
      
    </div>
  );
}