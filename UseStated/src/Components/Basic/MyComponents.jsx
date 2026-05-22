import React from'react'
import { useState } from 'react'
const MyComponent=()=>{
    const [name, setname]=useState('Guest');
    const [Quantity, setQuantity]=useState(0);
    const [comment,setComment]=useState(" ");
    const [payment, setPayment]=useState("");

    const handelNameChange=(e)=>{
        setname(e.target.value)
    }
    const quantityChange=(e)=>{
        setQuantity(e.target.value)
    }
    const commentChange=(e)=>{
        setComment(e.target.value);
    }
    const paymentChange=(e)=>{
        setPayment(e.target.value)
    }
    return(<div>
    <input type="text" value={name} onChange={handelNameChange}/>
    <p>Name: {name}</p>
    <input type="text" value={Quantity} onChange={quantityChange} type="number"/>
    <p>Qunatity: {Quantity}</p>
    <textarea name="" value={comment} id="" onChange={commentChange}></textarea>
    <p>{comment}</p>
    
    </div>
    
    );
}
export default MyComponent