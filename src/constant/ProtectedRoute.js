import React from 'react'
import { Route,Redirect } from 'react-router'
import { AuthContext } from '../context/authcontext'

export const ProtectedRoute = ({...props}) =>{
        const {IsLoggedIn} = React.useContext(AuthContext)

    if(IsLoggedIn){
        return(
            <Route {...props}/>
        )
    }else{
        return(
            <Redirect to='/'/>
            )
       
    }
}