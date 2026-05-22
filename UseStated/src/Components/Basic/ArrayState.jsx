import React from 'react'
import { useState } from 'react';
const ArrayState = () => {
    const [data, setData]=useState([]);
    let elements=[
        {
            Name:"Thomas Roka",
            age:25,
            clz:"NCMT",
            Location:"Kathmandu"
        }
    ]
  return (
    <div className=''>
        {setData(elements)}
        {setData(data.map((items,id)=>{
             <p>{items}</p>
        }))}
       

    </div>
  )
}

export default ArrayState