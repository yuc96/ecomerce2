import React from 'react';
import './App.css';
import Navbars from "./components/navbar"
import Container from "react-bootstrap/Container";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login"
import MyShopping from "./pages/myshop"
import Cart from "./pages/cart"
import Loading from './components/loading';
import { useSelector } from 'react-redux';
import MenuDividers from './components/menuDividers';
import DetailProduct from './pages/DetailProduct';
import ProtectedRoutes from './components/ProtecRoutes';

 
function App() {

  const load= useSelector(state => state.loading);


  return (
      <HashRouter>
        
        <Navbars></Navbars>
        
        {
          load===true? 
          <Loading></Loading>:
          " "
        }
        
          <Container className="my-2">
          <Routes>
            <Route path="/"exact element={<Home></Home>}/>
            <Route path="/login" element={<Login></Login>} />
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/detail/:id" element={<DetailProduct></DetailProduct>} />

            <Route element={<ProtectedRoutes/>}>
              
            <Route path="/myshopping" element={<MyShopping></MyShopping>} />
              
            </Route> 

          </Routes>
        </Container>

  

      </HashRouter>
     

  );
}

export default App;
