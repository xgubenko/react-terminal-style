import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

const MainLayouts = () => {
  return (
    <>
    <Menu />
    <Outlet />
    </>
  )
}

export default MainLayouts