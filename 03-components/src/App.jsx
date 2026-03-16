import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Card2 from './components/Card2'
function App() {
let user_name="thomas roka"
let age=20;
  return (
    <>
    <h1>Hello, My age is {age}</h1>
    <h1>Hello, My name is {user_name}</h1>
      <div className='card bg-red-600 rounded-xl m-4'>Thomas Roka</div>
       <div className='card bg-red-600 rounded-xl m-4'>Thomas Roka</div>
       <Card/>
       <Navbar/>
       <div className="h-140 w-full mt-10 pt-20 bg-white flex flex-wrap">
        <Card2 username="Thomas" age={20} img={"https://plus.unsplash.com/premium_photo-1773277369068-8488542c42ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/> 
        <Card2 username="Thomas" age={20} img={"https://images.unsplash.com/photo-1772977411645-92bb63a02f1e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/> 
        </div>
      
    </>
  )
}
export default App
