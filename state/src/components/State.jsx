import React from 'react'
import { useState } from 'react';
const State = () => {
    let [ isvisible,setVisible]=useState(true);// it returns [true, function]
    function toggle(){
       // isvisible= !isvisible; while using it cant be done like this
       setVisible(!isvisible);
       // rerenduring means that the functions is being called by react
    }
    let [count, setcount]=useState(0);
    function notify(){
        setcount(count + 1);
    }
  return (
    <>
    <div className='text-red-300 h-50'> <button  className='h-20 w-20 bg-amber-100'onClick={toggle}> Toogle</button>
    { isvisible && <p> The toggle of the button is visible</p>}</div>
    <div className=' mt-8 text-green-300 h-50 '> <button  className='h-20 w-20 bg-amber-100'onClick={notify}> Count</button>
    <p className='text-4xl'>{count}</p></div>
    </>
  )
}

export default State