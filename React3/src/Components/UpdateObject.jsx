import React from 'react'
import { useState } from 'react';
const UpdateObject = () => {
    const [car ,setCar]=useState({ year:2024,make: "Ford", model:"Mustang"});
    function handleYearChange(event){
        // you handle changes in particular properties of an object like this
        setCar(c=>({...c,year:event.target.value}))
    //setCar(year:2025)} if you will do this it will update whole initial object with other properites to have only year
    }
    function handleMakeChange(event){
        setCar(c=>({...c,make:event.target.value}))
    }
    function handleModelChange(event){
        setCar(c=>({...c,model:event.target.value}))
    }
  return (
    <div>
        <p>Your fav car is:{car.year} {car.make} {car.model}</p>
        <input className='border-2 border-b-black' type="number" value={car.year}  onChange={handleYearChange}/><br/>
        <input className='border-2 border-b-black'type="text" value={car.name} onChange={handleMakeChange}/><br/>
        <input  className='border-2 border-b-black'type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>
  )
}

export default UpdateObject