import * as api from '../api/index.js';
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constance/productConstance.js';

export const  listProducts =()=> async (dispatch)=>{
    try {

        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await api.fetchProducts();
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({type:PRODUCT_LIST_FAIL, payload :error.message});
    }
}