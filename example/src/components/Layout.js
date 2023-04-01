import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'

const Layout = () => {
  return (
    <>
    
    <div className='header'>
            <Header/>
        </div>
        <div className='menu'>
            <Menu/>
        </div>
        <div className='content mx-4'>
        <Outlet/>
        </div>
        <div className='Footer'> 
        <Footer/>
        </div>
   
    </>
  )
}

export default Layout