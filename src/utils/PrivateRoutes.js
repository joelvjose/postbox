import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate ,Outlet} from 'react-router-dom'



const PrivateRoutes = () => {
    
    const { user } = useSelector(state=>state.user);

    return  user ? <Outlet/>:<Navigate to='/'></Navigate>

}

export default PrivateRoutes