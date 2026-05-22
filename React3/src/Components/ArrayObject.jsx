import React from 'react'
import { useState } from 'react'
const ArrayObject = () => {
  const[car,setCars]=useState([]);
  const[carYear,setCarYear]=useState(new Date().getFullYear())
  const[carMake,setCarMake]=useState("");
  const [carModel, setCarModel]=useState("");
  function handleAddCar(){
    const newCar={
      year:carYear,
      make:carMake,
      model:carModel};
      setCars([...car,newCar])
      setCarYear( new Date().getFullYear());
      setCarModel('');
      setCarMake('');
    }
    
    function handleRemoveCar(i){
      setCars(c=>c.filter((ele,index)=>i !==index)
      )
    }
    function handleYearChange(event){
      setCarYear(event.target.value);
    }
    function handleMakeChange(e){
      setCarMake(event.target.value);
    }
    function handleModelChange(e){
      setCarModel(event.target.value);
    } 
  return (
    
    <div><h2 className=''> CarsObject Array</h2>
      <ul>
        {car.map((item,index)=>{
          return <li key={index} onClick={()=>handleRemoveCar(index)}>
            {item.year} {item.make}{item.model}
          </li>
        })} </ul>
        <input  className=" border-2 border-black/20"type="number" value={carYear}  onChange={handleYearChange}/>
        <br/>
        <input  className=" border-2 border-black/20" type="text" value={carMake}  onChange={handleMakeChange} placeholeder="Enter Car Make"/>
        <br/>
         <input className=" border-2 border-black/20" type="text" value={carModel}  onChange={handleModelChange} placeholder='Enter Your Car Model' />
      <button onClick={handleAddCar}>AddCar</button>
      </div>
  )
}

export default ArrayObject