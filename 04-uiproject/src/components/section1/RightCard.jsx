import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden rounded-4xl relative flex shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <div className='absolute top-0 left-0 h-full w-full flex p-8 flex-col justify-between font-semibold'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center '>{props.id +1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta eaque dolor fugit voluptatem! Ratione, recusandae?
                </p>
            </div>
            <div className='flex justify-between'>
                <button className='bg-blue-600 font-sm px-7 py-3 rounded-full text-lg text-white'>{props.tag}</button>
                <button className='bg-blue-600 font-sm px-4 py-2 rounded-full text-lg text-white'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCard