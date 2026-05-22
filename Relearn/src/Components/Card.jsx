import React from 'react'

const Card = ({head,image,rating, content}) => {
  return (<div className='card h-102 w-84 overflow-hidden'>
    <div className='h-50 w-full'><img src={image} alt="" className='h-full w-full object-cover rounded-t-xl' /></div>
    <div className=' w-full mt-2 px-4 flex justify-between  font-bold text-xl'> <p>{head} </p>
    <p>{rating} </p></div>
    <div className='content text-sm px-4  w-full mt-2 overflow-hidden'><p className='font-normal text-sm'>{content}</p></div>
    <div className="h-16 rounded-xl w-auto mt-4 px-4 bg-black text-white flex items-center justify-center hover:bg-gray-400"> Explore Now </div>
  </div>
    
  )
}
export default Card
