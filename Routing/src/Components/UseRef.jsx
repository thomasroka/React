import React from 'react'
import { useRef } from 'react';
const UseRef = () => {
    const inputRef =useRef();
    function focusOnInput(){
        // u can use this or u can use  ref
        // we are avoviding document method to get acess to dom element
        //document.getElementById("name").focus()
        inputRef.current.focus();
    }
  return (
    <div><input id='name' type="text" ref={inputRef} /><input type="text" />
    <button type="button" onClick={focusOnInput}>submit</button>
    </div>
  )
}

export default UseRef