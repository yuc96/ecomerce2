import React, { useState,useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector,useDispatch } from 'react-redux';
import getConfig  from '../utils/getConfig'
import {getProductThunk} from '../store/slices/cart.slice'
import axios, { Axios } from "axios";
import { Row,Col,Button, Card ,ListGroup } from 'react-bootstrap';


function SideBar({stateCart,handleClose}) {
    

    const [data,setData]=useState([]);
    const [total,setTotal]=useState([]);
    

     useEffect(()=>{
                   axios.get('https:e-commerce-api-v2.academlo.tech/api/v1/cart',getConfig ())
                   .then( res =>{
                   setData(res.data)
                })
                .catch(error => console.log(error))
      },[data]);
  
      console.log("estos es sidebarrrrr");
      console.log(data);


    const deleteProduc=()=>{
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/1`,getConfig ())
        .then( res =>{
        setData(res.data)
     })
     .catch(error => console.log(error))
    }


  return (
    <>
      
      <Offcanvas show={stateCart} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Shopping</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Row >
             
             {     
                 data.map((products) => (
                     
                     <Col  className="List" key={products.id}> 
                         <Card style={{ width: '18rem',hight:'18rem'}}>  
                                             
                       
                                     <img className='imgH' src={products.product.images?.[0].url} alt="img_product"></img> 
                                    
                                     <Card.Body>
                                       <Card.Title>{products.product.title}</Card.Title>
                                      </Card.Body>
                                     <ListGroup className="list-group-flush">
                                         <ListGroup.Item>{"Price:"+" "+products.product.price}</ListGroup.Item>
                                         <ListGroup.Item>{"Cantidad de Productos:"+" "+products.quantity}</ListGroup.Item>
                                     </ListGroup>
                                     <Button onClick={deleteProduc} variant="secondary" size="lg">
                                            Eliminar
                                     </Button>            
                          </Card>            
                     
                     </Col>    
                 ))  
             }
           </Row> 
     
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar