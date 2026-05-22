import React from 'react'

const  Card2= ({content,headline,image}) => {
  return (
    <div className='h-100 w-87.5 px-2 py-6  flex flex-col bg-white/80 shadow-[0px_0px_1px_0px_rgba(12,26,75,0.24),0px_3px_8px_-1px_rgba(50,50,71,0.5)] rounded-2xl'>
        
        <div className='w-[334] h-50 rounded-l-md'>
            <img className='h-full w-full object-cover rounded-md'src={image}  alt="" />
        </div>
        <div className='mt-4 flex flex-col gap-6 px-4'>
            <div>
                <p className='text-xl'>{headline}</p>
                <p className='text-xs'>{content}</p>
            </div>
            <button type="button" className='w-24 h-9 bg-blue-400 rounded-sm text-sm'>See More </button>
        </div>
    </div>
  )
} 

export default Card2