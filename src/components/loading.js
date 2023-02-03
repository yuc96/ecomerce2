import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import '../App.css'
const loading =()=> {
   

   
        return (
            <>
              <div className='loading'>
                <Button variant="secondary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading :o ...o:
                </Button>
              </div>
             
          </>
        );
    
}



export default loading;