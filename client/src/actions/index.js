import * as api from '../api/index.js';
import Cookie from 'js-cookie';
import {CART_ADD_ITEM, PRODUCT_DETAILS_FAIL, 
        PRODUCT_DETAILS_REQ, 
        PRODUCT_DETAILS_SUCCESS, 
        PRODUCT_LIST_FAIL, 
        PRODUCT_LIST_REQUEST, 
        PRODUCT_LIST_SUCCESS,
        REMOVE_CART ,
        USER_SIGN_IN_SUCCESS,
        USER_SIGN_IN_REQ,
        USER_SIGN_IN_FAIL,
        USER_REGISTER_SUCCESS,
        USER_REGISTER_REQ,
        USER_REGISTER_FAIL,
        USER_LOGOUT,
        PRODUCT_SAVE_REQUEST,
        PRODUCT_SAVE_SUCCESS,
        PRODUCT_SAVE_FAIL
        } from '../constance/productConstance.js';

export const listProducts = (
            category = '',
            searchKeyword = '',
            sortOrder = ''
          ) => async (dispatch) => {
            try {
              dispatch({ type: PRODUCT_LIST_REQUEST });
              const { data } = await api.fetchProducts(category, searchKeyword, sortOrder);
              dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
            } catch (error) {
              dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
            }
};

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
  const GET_CART = "GET_CART"
  export const getCart=()=>async(dispatch,getState)=>{
    try {
    const {cart:{cartItems}} = getState();
      dispatch({type: GET_CART , payload : cartItems});
    //   Cookie.set("cartItems",JSON.stringify(cartItems));
    } catch (error) {
        console.log(error)
    }
  }

export const signIn=(email, password) => async(dispatch) =>{
        
        dispatch({type : USER_SIGN_IN_REQ , payload:{email, password}});

    try {
        const {data} = await api.getUserSignIn(email ,password);
        dispatch({type : USER_SIGN_IN_SUCCESS, payload:data });
       
        Cookie.set('userInfo',JSON.stringify(data));
    } catch (error) {
        dispatch({type : USER_SIGN_IN_FAIL, payload:error.message }); 
    }
}

export const register=(username, email, password ) => async(dispatch) =>{
        
        dispatch({type : USER_REGISTER_REQ , payload:{username, email, password}});

    try {
        const {data} = await api.getUserRegister(username, email ,password);
        dispatch({type : USER_REGISTER_SUCCESS, payload:data });
       
        Cookie.set('userInfo',JSON.stringify(data));
    } catch (error) {
        dispatch({type : USER_REGISTER_FAIL, payload:error.message }); 
    }
}

export const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
  }

export const saveProduct = (product) => async (dispatch, getState) => {
    
    try {
      dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    
      const {
        userSignIn: { userInfo },
      } = getState();

      if (!product.id) {
        const { data } = await api.createProduct(userInfo, product)
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    
      } else {
        const { data } = await api.updateProduct(userInfo, product)
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
   
      }
    } catch (error) {
      const {
        userSignIn: { userInfo },
      } = getState();

      dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    
    }
  };
