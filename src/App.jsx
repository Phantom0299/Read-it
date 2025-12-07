import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Categories from './pages/Categories'
import Account from './pages/Account'
import './styles/App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<Product />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
