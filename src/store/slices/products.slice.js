import { createSlice } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import {setLoading} from "./loading.slice"
import { useSelector } from 'react-redux';



export const productSlice=createSlice({
    name: 'product',
    initialState:[],
    reducers:{
        setProduct: (state,action)=>{
                return action.payload
        }
    }
        
})

export const getProductThunk = ()=> dispatch =>{
    dispatch (setLoading(true));
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
    .then( res =>(
        dispatch(setProduct(res.data))
    ) )
    .catch(error => console.log(error))
    .finally(()=>dispatch (setLoading(false)));
}



export const getSearchThunk = (searchProduct)=> dispatch =>{

        
     dispatch (setLoading(true));
     axios.get(`https:e-commerce-api-v2.academlo.tech/api/v1/products?title=${searchProduct}`)
     .then( res =>(
         dispatch(setProduct(res.data))
     ) )
     .catch(error => console.log(error))
     .finally(()=>dispatch (setLoading(false)));
}

export const { setProduct } = productSlice.actions;

export default productSlice.reducer; 