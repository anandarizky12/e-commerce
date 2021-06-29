import * as api from '../api/index.js';
import {PRODUCT_DETAILS_FAIL, 
        PRODUCT_DETAILS_REQ, 
        PRODUCT_DETAILS_SUCCESS, 
        PRODUCT_LIST_FAIL, 
        PRODUCT_LIST_REQUEST, 
        PRODUCT_LIST_SUCCESS 
        } from '../constance/productConstance.js';

export const  listProducts =()=> async (dispatch)=>{
    try {

        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await api.fetchProducts();
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({type:PRODUCT_LIST_FAIL, payload :error.message});
    }
}

export const  getDetails =(id)=> async (dispatch)=>{
    try {

        dispatch({type: PRODUCT_DETAILS_REQ});
        
        const {data} = await api.fetchDetails(id);

        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({type:PRODUCT_DETAILS_FAIL, payload :error.message});
    }
}