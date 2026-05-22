import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [show, setShow]=useState(false)
  const[edit, setEdit]=useState(false);// are we in edit mode
  const[persons, setPersons]=useState([]);
  const[person, setPerson]=useState({name:"",age:"",size:""})
  const{update, setUpdate}=useState(false); // did user change any thing
function handleChange(field, value){
 setPerson({...person,[field]:value});
}
function handleSubmit(){
  if(edit){
  setEdit(false);
  setUpdate(false);
} else{
setPersons([...persons, person]);
setPerson({name:"",age:"",size:""});}
}
function handleEdit(){
  setPerson(persons[0]);
  setShow(false);
  setEdit(true);
  setUpdate(false);
}
  return (
    <>
    {edit && <div><h3> Entered into Editing Mode || Edit Your dataS</h3>
    </div>}
     <div>
      <input type="text" name='name' value={person.name} placeholder='name' onChange={(e)=>{handleChange("name",e.target.value)}}/>
      <input type="number" name='age' value={person.age} placeholder='age' onChange={(e)=>{handleChange("age",e.target.value)}} />
      <input type="number" name="size" placeholder='size' onChange={(e)=>{handleChange("size",e.target.value)}} value={person.size}/>
      <button onClick={handleEdit}>Edit</button>
      {show && <div>
        {persons.map((items,id)=>{
          return(<div> 
            <p>{items.name}</p>
            <p>{items.age}</p>
            <p>{items.size}</p>
          </div>)
        })}
      </div>}
      <button onClick={handleSubmit}>Submit</button>
     </div>
    </>
  )
}

export default App
