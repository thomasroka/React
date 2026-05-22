import React from 'react'
import { useState } from 'react'
const Education = ({name,email,phonenumber,editid, handleedit, handleSubmit,focusInput,handleEditStatus, statusid}) => {
  const [editing, setEditing]=useState(false);
function handleClick(){
if(editing){
handleedit(editid);
setEditing(false);
}
else{
  handleEditStatus(statusid);
focusInput();
setEditing(true);
}
}
  return (
    <div className=' flex flex-row text-xl'>
       <div>
         
        <p>Name: {name}</p>
        <p>Phone: {phonenumber}</p>
        <p>Email: {email}</p>
         <button onClick={handleClick}>{editing ? "Update":"Edit"}</button>
       {/** <button onClick={()=>{handleedit(editid), focusInput()}}>{editing? "Update":"Edit"}</button>**/} </div>
    </div>
  )
}

export default Education