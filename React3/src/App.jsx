import { useState } from 'react'
import UpdateObject from './Components/UpdateObject'
import ArrayUpdate from './Components/ArrayUpdate'
import ArrayObject from './Components/ArrayObject'
function App() {
  return (
    <>
    <div className='flex content-center items-center flex-col mt-10'>
      <UpdateObject/>
    <ArrayUpdate/>
    <ArrayObject/>
    </div>
    </>
     
  )
}

export default App
