import React,{useState} from 'react'
import ProductList from './productList'
import {FormControl,InputGroup} from 'react-bootstrap'
import {useSelector} from 'react-redux'

function ProductAdmin() {
  
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
      <ProductList input={input} />
    
      
    </div>
  )
}

export default ProductAdmin