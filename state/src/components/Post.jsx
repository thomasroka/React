import React from 'react'

const Post = ({subtitle,time,image, description,name}) => {
 
  return (
    <>
    
    <div className='border-[1px] pl-4 h-36 w-80 rounded-2xl ml-4 bg-white mb-4'>
   <div className='w-50 h-20  rounded-xl border-gray-400 flex items-center'>
    <div>
        <img  className="h-12 w-12 rounded-3xl"src={image} alt="" />
    </div>
    <div className='flex-col leading-5 ml-2'>
    <div><p>{name}</p></div>
        <div><p>{subtitle}</p></div>
        {time!==undefined && <div><p className='flex text-xs'>{time}</p></div>}
   </div>
   </div>
   <div className='Postinfo'>
    {description}
   </div>
   </div>
   </>
  )
}

export default Post