import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Hero from './component/Hero'
import SdgData from './component/sdgdata'



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
            <SdgData />
            
          </>
        } 
      />
      
    </Routes>


    </>
  )
}

export default App