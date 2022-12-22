import React from 'react'
import { IRequireAuthProps } from '../models/interface/require-auth';
import { useLocation, Navigate } from 'react-router-dom';


const RequireAuth: React.FC<IRequireAuthProps> = ({ auth, children }) => {

    const location = useLocation()
    if (!auth) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children

}

export default RequireAuth