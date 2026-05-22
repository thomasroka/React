import React from 'react'
import { FaEllipsis } from "react-icons/fa6";
const Headline = () => {
  return (
    <div className='h-21 flex justify-between items-center w-88 text-sm rounded-xl bg-white shadow-sm shadow-[0px_3px_-1px rgb(12,26,74,0.24)] px-4'>
        <div className='left-content flex gap-2 items-center font-semibold'> <span className='text-2xl'>😀</span>Headline</div>
        <div className='left-content'>
            <FaEllipsis size={24} />
        </div>
    </div>
  )
}

export default Headline