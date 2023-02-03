import React, { useEffect } from 'react';
import { Row,Col,Button, Card ,ListGroup } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import {getProductThunk} from '../store/slices/products.slice';
import 'boxicons';
import '../App.css';
import {Link} from "react-router-dom";

const Home=()=>{
  const dispatch=useDispatch();   
  const data= useSelector(state => state.product);

//   console.log(data);

            useEffect(()=>{

                    dispatch( getProductThunk());
            },[]);


    return (
        
        <div className="divHome">  
                
             <Row >
             
            {    
                 
                 data.length !==0 ?
                 data.map((products) => (
                     
                    <Col  className="List" key={products.id}>
                        
                            
                          <Card style={{ width: '18rem',hight:'18rem'}}>  
                                 <Link  to={`/detail/${products.id}`}>
                                        <img className='imgH' src={products.images[0].url} alt="img_product"></img> 
                                 </Link>       
                                <Card.Body>
                                    <Card.Title>{products.title}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                        <ListGroup.Item>{"Price:"+" "+products.price}</ListGroup.Item>
                                     </ListGroup>
                                    <Button  variant="secondary" size="lg">
                                        Add to Cart
                                         <box-icon name='cart' ></box-icon>
                                    </Button>
                            </Card>
                       
                     
                    </Col>
                       
                ))
                :
                <div className="errorSearch">
                    <h2>Not Exist This Product</h2>
                    <box-icon  name='error' type='solid' ></box-icon>

                </div>
                
            }
         </Row> 
        
        
        
        </div>
            
        
    );
}

export default Home;