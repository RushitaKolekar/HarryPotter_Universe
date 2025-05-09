import { NavLink } from 'react-router-dom'
import React from 'react'

function Facts() {
  return (
    <div className='min-h-screen bg-gray-900'>

      <div className='flex flex-col justify-center pt-10 text-3xl text-white leading-25 items-center'>

     
     <p>under working</p> 
     <button className='border-1 border-amber-400 px-3'><NavLink to="/">Return to Home</NavLink></button>
    </div>

    </div>
  )
}

export default Facts