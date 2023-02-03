import React, { useState,useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Alerts({state,reset}) {

    console.log("ESTE ES EL ALERT ESTADO");
    console.log(state);
    const [show, setShow] = useState(state);

    useEffect(()=>{
       setShow(state);
    },[state]);
 
  console.log(state);
  


  if (show) {
    return (
      <Alert variant="danger" onClose={() => reset()} dismissible>
        <Alert.Heading>Ohps SOMETHING WENT WRONG !</Alert.Heading>
        <p>
           Your Email or Password is Incorrect or not exist a User
        </p>
      </Alert>
    );
  }
 
}

export default Alerts ;