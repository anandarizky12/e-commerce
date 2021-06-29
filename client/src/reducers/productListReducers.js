import {PRODUCT_LIST_FAIL,
        PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCCESS,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_REQ,
        PRODUCT_DETAILS_FAIL,

} from '../constance/productConstance';

function productListReducers(state = {products : []} , action){
    
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading : true};
        case PRODUCT_LIST_SUCCESS:
            return {loading:false , products : action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading : false , error : action.payload};
        default:
            return state;
    }
}

function productDetailsReducers(state = {product : {} } , action){
    switch(action.type){
        case PRODUCT_DETAILS_REQ:
            return {loading : true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false , product : action.payload};
        case  PRODUCT_DETAILS_FAIL:
            return {loading : false , error : action.payload};
        default:
            return state;
    }
}

export  {productListReducers, productDetailsReducers}; 