import React, { useState } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
const Message = () => {
    const[count, setcount]=useState(0);
    (()=>{
        setInterval(()=>{
            setcount(pre => pre+1);
            
            
        },2000)
    })
    console.log(count);
  return (
    <><div className='h-20 w-20'>
    
    <div className='m-8 relative'>
        <div className='bg-red-600 h-8 w-8 absolute rounded-full flex  items-center justify-center left-8 top-0.5  '>
             {count}

    </div>
        <IoIosNotificationsOutline size={64} />
    </div>
    </div>
   
    </>
  )
}

export default Message