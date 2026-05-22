import { useState } from 'react'

import Index from './Components/Index'
import Card from './Components/Card'
import Headline from './Components/Headline'
import Label from './Components/Label'
import Card2 from './Components/Card2'
import Index2 from './Components/Index2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='ml-4 mb-16 min-h-screen'>
    <div className='pt-8'>
       <Index/>  
    </div>
     <Headline/>
     <div className='mt-8'><Label/></div>
     <div className=' mt-20'>
      <Index2/>
     </div>

    </div>
    
    
    
  )
}

export default App
