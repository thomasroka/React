import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = (Props) => {
  return (
    
    <div className='card h-80  w-80 p-8 bg-white  rounded-3xl'>
      <div className='top flex justify-between w-full'>
        <img className='h-8 w-8 rounded-[50%] p-2border-2  border-amber-100'src={Props.brandLogo} alt="Logo" />
        <button className='flex px-2 py-1 border-2 border-gray-200 rounded-sm items-center text-sm'>Save  <Bookmark size={20}/></button>
      </div>
      <div className='center mt-4'><h3 className='text-xl font-semibold'>{Props.name} <span className='text-xs font-normal'>{}</span></h3>
        <h2 className='text-2xl font-bold bg-white'>{Props.Post}</h2>
      </div>
      <div className=' mt-2 flex w-44 justify-between'>
        <h4 className='bg-gray-200 h-8 w-20  text-sm flex items-center justify-center rounded-sm'>{Props.tag1}</h4>
        <h4  className='bg-gray-200 h-8 w-20  text-sm flex items-center justify-center rounded-sm '>{Props.tag2}</h4>
      </div>
      <div className=' mt-8 line h-1 w-full bg-gray-400 rounded-xl' ></div>
      <div className='bottom mt-4 flex justify-between'>
      <div className='bottom-info '>
        <h4 className='font-bold'>$120/hr</h4>
        <p className='text-xs text-gray-400'>Kathmandu,Nepal</p>
      </div>
      <div className='bg-black w-32 h-8 flex items-center justify-center rounded-sm'>
      <p className='text-white'>Apply Now</p>
      </div>
      </div>
    </div>
  )
}

export default Card