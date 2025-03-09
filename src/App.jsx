import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Empower from './component/Empower'
// import Data from './component/Data'
import Product from './component/Product'




const App = () => {
  return (
    <>
     <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Nav />
            <Hero />
            {/* <Data /> */}
            <Product/>
            <Empower />
            
          </>
        } 
      />
      
    </Routes>


    </>
  )
}

export default App