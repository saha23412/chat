import React from 'react'
import { Navigate } from 'react-router-dom'
import { ICheckUserProps } from '../models/interface/require-auth'

const CheckUser: React.FC<ICheckUserProps> = ({ children, auth, path }) => {
    return auth ? <Navigate to={path} /> : children
}

export default CheckUser