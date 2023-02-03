import React , { useEffect,useState }from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {setLoading} from "../store/slices/loading.slice";
import { useDispatch,useSelector } from 'react-redux';
import axios, { Axios } from "axios";
import {getSearchThunk} from '../store/slices/products.slice';
import Carousel from 'react-bootstrap/Carousel';
import { Row,Col,Button, Card ,ListGroup } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {putProductThunk} from '../store/slices/cart.slice'


const DetailProduct=()=>{
      const navigate=useNavigate();  
      const dispatch=useDispatch();  
      const data= useSelector(state => state.product); 
      const { id } = useParams();
      const [detail,setDetail]= useState([]);  
      const [cont,setCont]= useState(0);  
      let aux=0; 
      console.log(id);
      console.log("esto es data en detailproducts");
      console.log(data);  
      useEffect(()=>{

            dispatch(getSearchThunk(id));
            dispatch (setLoading(true));
            axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then( res =>(
                setDetail(res.data)
            ) )
            .catch(error => console.log(error))
            .finally(()=>{
                dispatch (setLoading(false))
                dispatch(getSearchThunk(detail.category.id));
                
                });



     },[id]);

     console.log("ESTOS SON LOS DETALLES");
       console.log(detail);

     const Add=()=>{
         console.log("adData");
          aux=cont+1;
          console.log(aux);
          setCont(aux);
     }
    const Substract=()=>{
         console.log("subData");
         if(cont!==0){
                 aux=cont-1;
         }
        console.log(aux);
          setCont(aux);
    }

    const addProducts=()=>{

        const token = localStorage.getItem("token");
        if(token){
            const cartproducts ={ 
                quantity: cont,
                productId: detail.id
            } 
                console.log(cartproducts);
                dispatch(putProductThunk(cartproducts));
        }else{
            navigate("/login");
        }
    
        
      }

    return (
        <>
            <div>
                 <h1>{detail.title}</h1>
             <Carousel>
                     <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail.images?.[0].url}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail.images?.[1].url}
                        alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail.images?.[2].url}
                        alt="Third slide"
                        />

                      
                    </Carousel.Item>
             </Carousel>
              <Card style={{ width: '100%',hight:'18rem'}}>         
                                <Card.Body>
                                    <Card.Title>{detail.brand}</Card.Title>
                                    <Card.Body>{detail.description}</Card.Body>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                        <ListGroup.Item>{"Price:"+" "+detail.price}</ListGroup.Item>
                                </ListGroup>
                                    <div className="AddProducts">
                                         <Button className="BotonAdd" variant="dark"  onClick={Add}><h2>+</h2> </Button>
                                        <h2 className="NumberAdd">{cont}</h2>
                                        <Button className="BotonAdd" variant="dark" onClick={Substract}><h2>-</h2></Button>
                                    </div>
                                    <Button onClick={addProducts} variant="primary" size="lg">
                                         <box-icon name='cart' ></box-icon>
                                    </Button>
              </Card>   
            </div>
            <div>
                <h2>Other Products of Interest</h2>
             <Row >
             
                {     
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
                                        <Button variant="secondary" size="lg">
                                            <box-icon name='cart' ></box-icon>
                                        </Button>            
                             </Card>            
                        
                        </Col>    
                    ))  
                }
              </Row> 
        
             </div>
            

        </>
    );
}

export default DetailProduct;