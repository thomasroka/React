import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import General from './General'
const GeneralForm = () => {
    const inputRef=useRef();
    function focusInput(){
    inputRef.current.focus();
    }
    const [generalinfo, setGeneralinfo]=useState([]);
    const [generaldata,setGeneraldata]= useState({name:"", email:"", phonenumber:""});
    const [updateddata, setUpdateddata]=useState([]);
    const user={
    name:"", email:"", phonenumber:""
    }
    const handleChanges =(e,name)=>{
      setGeneraldata({...generaldata,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
      setGeneralinfo([...generalinfo,{...generaldata, id: Date.now()}])
      setGeneraldata(user);
      console.log(generalinfo);
    }
    const handleEditStatus=(id)=>{
      const itemToEdit = generalinfo.find((item)=> item.id === id);
      setGeneraldata({name:itemToEdit.name,
        email: itemToEdit.email,
        phonenumber:itemToEdit.phonenumber
      })
    }
    const handledit=(id)=>{
      const editedContent=  generalinfo.map((items)=>{
        {/**  if true returns array with items and replacing with  matching general data  **/}
      return(items.id===id ?{...items,...generaldata}: items)
      })
        setGeneralinfo(editedContent);
        console.log(editedContent)
        console.log(generalinfo);
    
      }       
  return (
    <div> 
    <div className='flex flex-row'>
      <div className='flex flex-col h-full w-140 border-2 border-black/30 mr-8' >
      <p>Fill the Form to Create Your CV</p>  
      <form  className='flex flex-col focus:border-white' action="">
        <label htmlFor=""> Name:
          <input className="w-1/2 h-8 mb-2" type="text" name="name"  ref= {inputRef} placeholder='Enter your name' value={generaldata.name} onChange={handleChanges}/>
        </label>
        <label htmlFor="" className='pr-4'> Email
           <input className="w-1/2 h-8 mb-2 ml-4" type="email"  name='email' placeholder='Enter Your email' value={generaldata.email}  onChange={(e)=>(handleChanges(e))} />
        </label>
       <label htmlFor=""> Phonenumber:
         <input  className="w-1/2 h-8 mb-2" type="number"  name='phonenumber' placeholder='Enter your phonenumber' value={generaldata.phonenumber} onChange={(e)=>(handleChanges(e))}/>
       </label>
       
    </form>
     <button onClick={handleSubmit}>Submit</button>
    </div>
    <div className='w-80'>
    {generalinfo.map((items,index)=>{
        return( <div key={ items.id}><General   name={items.name} email={items.email} phonenumber={items.phonenumber } editid={items.id} handleedit={handledit} handleSubmit={handleSubmit} focusInput={focusInput} statusid={items.id} handleEditStatus={handleEditStatus}/>
        {/** Passed id and  function to another using props */}
    </div>
    )
    })}
    </div>
    
   
    </div>
    </div>
  )
}
export default GeneralForm