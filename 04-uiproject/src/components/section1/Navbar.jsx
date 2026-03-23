import React from 'react'

const Navbar = () => {
  return (
    <div className='nav flex items-center justify-between px-10 py-4'>
        <h3 className='bg-black text-white px-6 py-2 rounded-full uppercase '> Target Audience</h3>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm '>Digital Banking Platforms</button>
    </div>
  )
}

export default Navbar