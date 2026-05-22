import React from 'react'
import { useState } from 'react'
const ArrayUpdate = () => {
    const [students, setStudents]=useState(["thomas","Jonas"]);
    const [input, setInput]=useState('');
    
   
   function studentAddition(name){
    setStudents([...students,name]);

   }
  function replaceStudent(id){
  setStudents(students.filter((_, i) => i !== id));
}
  return (
    <div>
    <h1>The Array of Students</h1>
      <ol>
        {students.map((items,id)=>{
          return(<li key={id} onClick={()=>{replaceStudent(id)}}><p> {items} item id is {id}</p></li>)
        })}
        </ol>
        <input type="text" placeholder='Enter student name to add to array'
        onChange={(e) => { setInput(e.target.value); }}/>
        <button className='h-20 w-40 m-4 bg-amber-300'onClick={()=>{studentAddition(input)}}> Add Students</button>
    </div>
  )
}

export default ArrayUpdate