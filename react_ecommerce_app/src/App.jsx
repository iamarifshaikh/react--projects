import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext'
import { Navbar } from './components/navbar';
import './App.css'
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';

const App = () => {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop /> } />
            <Route path='/cart' element={<Cart /> }/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App;