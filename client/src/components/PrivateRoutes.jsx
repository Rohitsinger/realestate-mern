import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {

    const {currentUser} = useSelector(state=>state.user)
  return currentUser ? <Outlet/> :<h1>Signup for this page</h1>
}
