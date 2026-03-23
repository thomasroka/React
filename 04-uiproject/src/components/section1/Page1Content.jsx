import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Page1Content = (props) => {
  return (
    <div className='py-3 px-18 h-[90vh] flex justify-between gap-10'>
        <LeftContent />
        <RightContent users={props.users} id={props.id} />
    </div>
  )
}

export default Page1Content