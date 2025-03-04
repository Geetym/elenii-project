import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div>
{/* logo */}
            <div>
                <img 
                src="https://www.elenii.xyz/_next/image?url=%2Fimages%2Feleni%2F1.webp&w=640&q=75" 
                alt="elenii" 
                className='w-15 h-15'
                />
            </div>
{/* navlinks */}
            <div>
                <a href="/">About</a>
                <a href="/">Service</a>
                <a href="/">Contact </a>
            </div>
        </div>
    </nav>
  )
}

export default Nav