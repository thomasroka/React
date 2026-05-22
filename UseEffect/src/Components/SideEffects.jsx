import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react';
const SideEffects = () => {
    const [counter, setCounter]=useState(0);
//    setInterval(() => {
//     setCounter(count => count + 1)
//   }, 1000); // it causes more frequent state update n goes out of control to contol it useEffect is introduced
useEffect(()=>{
    setInterval(()=>{setCounter(count=>count+1

    )
    },1000);
},[])
// this is good but there is a problem it keeps on incrementing, still we left the page we can stop it by using a clearing function eg
useEffect(()=>{
   const close= setInterval(()=>{setCounter(count=>count+1

    )
    },1000);
    return ()=>{
        clearInterval(close);
    };
},[])

  return (
    <div><p>{counter} seconds has passed </p></div>
  )
}

export default SideEffects