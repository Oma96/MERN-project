import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Components/views/home";
import { useEffect } from "react";
import { getAuthUser } from "./redux/actions/auth-action";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/views/products';
import AddProduct from './Components/views/addProduct';
import Favorites from './Components/views/favorites';
import Footer from './Components/component/footer';
import ProductAdmin from './Components/views/admin/productAdmin';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route path="/Products" element={<Products/>} />
          <Route path="/Add" element={<AddProduct/>}/>
          <Route path="/Favorites" element={<Favorites/>}/>
          <Route path="ProdAdmin" element={<ProductAdmin/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
