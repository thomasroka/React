import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
  return (
    <div className='h-full  w-2/3 p-6 flex flex-nowrap gap-10  overflow-x-auto'>
     {props.users.map((elem,index)=>{
        return <RightCard  key={index} img= {elem.img} tag={elem.tag} id={index}/>
     })
     }
    </div>
  )
}

export default RightContent