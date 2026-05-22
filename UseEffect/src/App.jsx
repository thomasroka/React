import { useState } from 'react'
import {useEffect} from 'react'
import SideEffects from './Components/SideEffects'
import Errorboundaries from './Components/Errorboundaries'
import Keys from './Components/Keys'
function App() {
  return(<>
  <SideEffects/>
  <Keys/>
  <Errorboundaries/>
  
  </>)
}

export default App
