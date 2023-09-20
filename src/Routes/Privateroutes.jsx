import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

const Privateroutes = ({children}) => {
let {isAuth}=useContext(AuthContext);
if(!isAuth){
    return <Navigate to="/login"/>
}else{
    return children
}
  
}

export default Privateroutes
