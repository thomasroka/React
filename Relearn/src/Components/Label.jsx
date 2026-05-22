import React from 'react'

const Label = () => {
  return (
    <div
    className='h-40 w-87.5 bg-gray-100 flex-coln gap-6 p-4 rounded-2xl'>
      <div className='w-78.5 h-12 mb-6'>
        <p className='text-xl font-semibold'>Headline label</p>
        <p className='text-black/60'>Paste Your text here and use it</p>
    </div>
    <div className='relative'>
        <input  className='pl-4 w-79.5 h-11.5 focus:outline-none bg-blue-200/20 rounded-xl 'type="text" name="" id=""placeholder='Input' />
        <button type="button" className='bg-blue-500 text-white font-bold text-xs h-9 w-20 absolute top-1 right-2 rounded-md'>Post</button>
    </div>
    
    </div>
  )
}

export default Label