import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const users=[
  { img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D',
    intro:'',
    tag:'Satisfied'
  },
  { img:'https://images.unsplash.com/photo-1757406005026-990a2b022e49?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'UnderSubed'
  },
  { img:'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww',
    intro:'',
    tag:'Satisfied'
  },
  { img:'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Unsubbed'
  }

]
function App() {
  return (
    <>
    <Section1   users={ users}/>
    <Section2 />
    </>
  )
}

export default App
