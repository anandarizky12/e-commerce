import { USER_SIGN_IN_FAIL, USER_SIGN_IN_REQ, USER_SIGN_IN_SUCCESS } from "../constance/productConstance";


function userSignInReducers(state={},action){
    switch(action.type){
        case  USER_SIGN_IN_REQ:
            return {loading : true};
        case USER_SIGN_IN_SUCCESS:
            return {loading : false ,userInfo:action.payload};
        case USER_SIGN_IN_FAIL:
            return {loading : false ,error : action.payload};
        default:
            return state;
    }
}
export {userSignInReducers};