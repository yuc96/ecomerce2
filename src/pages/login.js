
import React, {  useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import Alert from '../components/Alert'


const Login=()=>{
    
    const navigate=useNavigate();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [state,setState]=useState(false);
    const handleSubmit=(e)=>{
            e.preventDefault();

            const data={
                email,
                password
            }

            console.log(data);
            axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login',data)
            .then( res =>{ 
                console.log(res.data.token) 
                localStorage.setItem("token",res.data.token)
                navigate("/")
            })
            .catch(error => {
                console.log(error.request.status)
                setState(true);
            })

    }

     


    return (
        <>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Alert state={state} reset={()=>setState(false)}></Alert>
        </>
    );
}

export default Login;