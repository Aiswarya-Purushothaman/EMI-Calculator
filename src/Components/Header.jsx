import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
   <div className= ' flex  justify-between w-full bg-blue-400'>
<p className='text-lg font-bold text-white p-3 ml-3'>
  XYZ Finanace
</p>
<div>
  {location.pathname!=='/about' ? (
    <button className=' mt-3 font-semibold text-blue-600 bg-white p-1 rounded-md transition-transform duration-300 hover:scale-110 mr-20' >
  <Link to={"/about"}>
  About
  </Link>

</button>
  ):(
    <button className=' mt-3 font-semibold text-blue-600 bg-white p-1 rounded-md transition-transform duration-300 hover:scale-110 mr-20' >
    <Link to={"/"}>
    Home
    </Link>
  
  </button>
  )}

</div>

   </div>
  )
}

export default Header