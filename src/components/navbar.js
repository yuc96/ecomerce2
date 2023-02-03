import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'boxicons';
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import {getSearchThunk} from '../store/slices/products.slice';
import SideBar from './SideBar';




const NavScrollExample=()=> {
  
  const [searchProduct,setSearchProduct]=useState("");
  const [stateCart,setStateCart]=useState(false);
  const dispatch=useDispatch(); 
  


  const Search=()=>{
    
    console.log("ESTO ES SEARCH");
    console.log(searchProduct);
    dispatch(getSearchThunk(searchProduct));
  }

  const Cart=()=>{
      console.log("SOY CART");
      setStateCart(true);
  }
  const handleClose=()=>{
    setStateCart(false);
  }

 console.log(stateCart);
  return (
    <>
     <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" >MiPampa</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/myshopping">
                    My Shopping
                    <box-icon type='solid' name='shopping-bags'></box-icon>
                </Nav.Link>
                <Nav.Link onClick={Cart}>
                    My Cart
                    <box-icon type='solid' name='cart'></box-icon>
                </Nav.Link>
          
          </Nav>
          <Form className="d-flex" >
            <input className="searchinput"
              type="text"
              value={searchProduct}
              placeholder="Search your Product"
              onChange={(e) => setSearchProduct(e.target.value)}
          />
            <Button  onClick={Search} as={Link} to="/" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <SideBar stateCart={stateCart} handleClose={handleClose}></SideBar>
    </>
  
  );
}

export default NavScrollExample;