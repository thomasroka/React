import { useState } from 'react'
import Display from './Components/Basic/Display'
import './App.css'
import Basic from './Components/Basic/Basic'
import ArrayState from './Components/Basic/ArrayState'
import {Content} from './Components/Basic/Content'
import { StudentsMain } from './Components/Basic/StudentsMain'
import MyComponent from './Components/Basic/MyComponents'
import { ColorPicker ,Dummy} from './Components/Basic/ColorPicker'
import Todo from './Todo'
function App() {
 let [something, setsomething]=useState(100)
  function Increment(){
    setsomething(something+1)
  }
  function Decrement(){
    setsomething(something-1)
  }
  return (
    <>
     <div>
      <h1>{something}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
     </div>
     <div className='mt-20'>

    <Display/>
     </div>
     <div>
<StudentsMain/>
<MyComponent/>
<ColorPicker/>
<Dummy/>
     </div>
     <div>
    <Todo/>
     </div>
    </>
  )
}

export default App
