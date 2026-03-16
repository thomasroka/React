import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1 className='text-red-600 bg-white p-4 rounded-2xl'>Hello Its me thomas with tailwind Css</h1>
     </div>
    <Card/>
    </>
  )
}

export default App
