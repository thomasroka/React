import React from 'react'
import { useState } from 'react'
// Basic state
const Basic = () => {
 const [value, set]=useState(0);
 const [name, setName] = useState('')
const [content, setContent]=useState(false)
 const increment=()=>{
    set(value+1);
 }
 const decrement=()=>{
    set(value-1);
 }
 
  return (
    <div>
        <p>{value}</p>
        <button className='h-8 w-12' onClick={increment}>Add</button>
        <button className='h-8 w-12' onClick={decrement}>Decrease</button>
        <input onChange={(e) => setName(e.target.value)} />
        {content  && <p>{name}</p>}
        <button  className='h-8 w-12'onClick={ ()=>{setContent(!content)}}> Show</button>
        <button  className='h-8 w-12'onClick={()=>{setContent(false)}}> Remove</button>
    </div>
  )
}
export default Basic