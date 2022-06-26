import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Components/views/home";
import { useEffect } from "react";
import { getAuthUser } from "./redux/actions/auth-action";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/views/products';
import AddProduct from './Components/views/addProduct';
import Favorites from './Components/views/favorites';
import Footer from './Components/component/footer';
import ProductAdmin from './Components/views/admin/productAdmin';
import NavbarVendor from './Components/navbarVendor'
import HomeVendor from './Components/views/admin/homeVendor'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, []);

  const user= useSelector(state=>state.auth.user)
 

    const clientLinks =(
      <>
       <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route path="/Products" element={<Products/>} />
          <Route path="/Favorites" element={<Favorites/>}/>
          </Routes>
          <Footer/>
      </Router>
      </> )

      const VendorLinks=(

        <>
        <Router>
        <NavbarVendor/>
        <Routes>
        <Route exact path="/" element={<HomeVendor />}/> 
          <Route path="/Add" element={<AddProduct/>}/> 
          <Route path="/prodAdmin" element={<ProductAdmin/>} />
          </Routes>
          <Footer/>
          </Router>
        </>
      )

  return (
    <div className="App">
     
    {user&& user.role == "Vendor"? VendorLinks: clientLinks}
        
     

    </div>
  );
}

export default App;
