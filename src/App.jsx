import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Cart from './Cart'
import Header from './components/Header'
import Contact from './Contact'
import Errorpage from './Errorpage'
import Footer from './Footer'
import { GlobalStyle } from './GlobalStyle'
import Home from './Home'
import MyProduct from './MyProduct'

import Singleproduct from './Singleproduct'

export default function App() {
  return (
    <>

      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/myproduct' element={<MyProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products/:id' element={<Singleproduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Errorpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}
