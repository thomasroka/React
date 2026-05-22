import React from 'react'
import{useState} from 'react'

const Display = () => {
    const [show, setShow]= useState(false);
    const [value, setValue]=useState('');
  return (
    <div>
        <input type="text" placeholder='Enter what u want to display'onChange={(e)=>{
           setValue( e.target.value);
        }} />
        {show && <p>{value}</p>}
        <button className='h-20 w-24'onClick={()=>{setShow(!show)}}>Show </button>
        <button className='h-20 w-24' onClick={()=>{setShow(false)}}>Hide</button>
    </div>
  )
}

export default Display