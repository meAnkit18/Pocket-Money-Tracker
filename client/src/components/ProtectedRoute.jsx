import React,{useEffect,useState} from "react";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children })=>{
    const [isAuthenticated,setIsAuthenticated] = useState(null)
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            setIsAuthenticated(false)

        }

    })

    if(isAuthenticated === null) return <div>Loading...</div>
    return isAuthenticated?children:<Navigate to="/login"/>
}

export default ProtectedRoute;