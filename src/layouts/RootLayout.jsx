import React from 'react'
import { Outlet } from 'react-router'
import {NavBar,Footer} from '../components'

function RootLayout() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default RootLayout