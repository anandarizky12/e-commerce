import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoutes({component : Component, ...rest}) {

    const userSignin = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignin;
        
    if(!userInfo) return "Not Found";
    
    return (
        <Route
        {...rest}
        render={()=>{
            if(userInfo.isAdmin){
                return <Component/>;
            }else {
                return "Not Found";
            }
        }} />
    )
}

export default ProtectedRoutes
