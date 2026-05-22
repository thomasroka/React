import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const btnClicked=()=>{
    console.log("Wrote Something");
  }
  return (
    <>
    <div>
      <h1>
        Hello, Thomas
      </h1>
      <button >Change User</button>
      <input onChange={(e)=>{
        console.log(e.target);
       }} type="text" placeholder="Enter your username" />
       <button className='h-10  bg-red-200 w-30 ' onCLick={(e)=>{
        console.log(e.target);
       }}>Display</button>
    </div>
    </>
  )
}

export default App
