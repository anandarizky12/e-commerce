import {USER_SIGN_IN_FAIL,
        USER_SIGN_IN_REQ, 
        USER_SIGN_IN_SUCCESS,
        USER_REGISTER_SUCCESS,
        USER_REGISTER_REQ,
        USER_REGISTER_FAIL,
        USER_LOGOUT, } from "../constance/productConstance";


function userSignInReducers(state={},action){
    switch(action.type){
        case  USER_SIGN_IN_REQ:
            return {loading : true};
        case USER_SIGN_IN_SUCCESS:
            return {loading : false ,userInfo:action.payload};
        case USER_SIGN_IN_FAIL:
            return {loading : false ,error : action.payload};
        case USER_LOGOUT:
                return {};
        default:
            return state;
    }
}
function userRegisterReducers(state={},action){
    switch(action.type){
        case  USER_REGISTER_REQ:
            return {loading : true};
        case USER_REGISTER_SUCCESS:
            return {loading : false ,userInfo:action.payload};
        case USER_REGISTER_FAIL:
            return {loading : false ,error : action.payload};
        default:
            return state;
    }
}
export {userSignInReducers ,  userRegisterReducers};