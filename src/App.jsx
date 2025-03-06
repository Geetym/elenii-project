import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Data from './component/Data'




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
            <Data />
            
          </>
        } 
      />
      
    </Routes>


    </>
  )
}

export default App