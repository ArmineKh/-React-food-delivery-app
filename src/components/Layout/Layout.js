import React from 'react'
import { Header, Footer } from '../index'
import Routes from '../../routes/Routers'


const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default Layout