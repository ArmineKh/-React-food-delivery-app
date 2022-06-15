import React from 'react'
import { Header, Footer, Cart } from '../index'
import Routes from '../../routes/Routers'
import { useSelector } from 'react-redux'

const Layout = () => {

  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div>
      <Header />
      { showCart && <Cart /> }
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default Layout