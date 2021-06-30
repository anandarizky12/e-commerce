import * as api from '../api/index.js';
import Cookie from 'js-cookie';
import {CART_ADD_ITEM, PRODUCT_DETAILS_FAIL, 
        PRODUCT_DETAILS_REQ, 
        PRODUCT_DETAILS_SUCCESS, 
        PRODUCT_LIST_FAIL, 
        PRODUCT_LIST_REQUEST, 
        PRODUCT_LIST_SUCCESS,
        REMOVE_CART 
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

export const  addToCart= (id,qty)=>async(dispatch,getState)=>{
    try {
        const {data} = await api.fetchDetails(id);

        dispatch({type : CART_ADD_ITEM,
                  payload:{product:data._id,
                        name:data.name,
                        image:data.image,
                        category:data.category,
                        brand:data.brand,
                        price:data.price,
                        stock:data.stock,
                        qty}});
        const {cart:{cartItems}} = getState();
        Cookie.set("cartItems",JSON.stringify(cartItems));

    } catch (error) {
        console.log(error)
    }
}


export const removeFromCart=(id)=>async(dispatch,getState)=>{
    try {
      dispatch({type: REMOVE_CART , payload : id});
      const {cart:{cartItems}} = getState();
      Cookie.set("cartItems",JSON.stringify(cartItems));
    } catch (error) {
        console.log(error)
    }
  }