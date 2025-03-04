import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'


const App = () => {
  return (
    <>
     <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Nav />
            
          </>
        } 
      />
      
    </Routes>


    </>
  )
}

export default App