import { createSlice} from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import getConfig  from '../../utils/getConfig'
import { setLoading } from "./loading.slice";

export const cartSlice=createSlice({
        name: 'cart',
        initialState: [],
        reducers:{
            setLoading: (state,action)=>{
                    return action.payload
            }
        }
            
})

export const getProductThunk = ()=> dispatch =>{

    dispatch (setLoading(true));
    axios.get('https:e-commerce-api-v2.academlo.tech/api/v1/cart',getConfig ())
    .then( res =>{
            console.log("ESTA ES LA LISTA CAR")
            console.log(res.data)
           dispatch(setcart(res.data))
       
     })
    .catch(error => console.log(error))
    .finally(()=>dispatch (setLoading(false)));
}

export const putProductThunk = (cartproducts)=> dispatch =>{
   
     console.log(cartproducts);

     axios.post('https:e-commerce-api-v2.academlo.tech/api/v1/cart',cartproducts,getConfig ())
     .then( res =>{
         
             console.log(res.data)
            dispatch(getProductThunk())
        
      })
     .catch(error => console.log(error))
   
}
 

export const { setcart } = cartSlice.actions;

export default cartSlice.reducer;