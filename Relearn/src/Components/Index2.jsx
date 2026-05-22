import React from 'react'
import Card2 from './Card2'
const Index2 = () => {
    const content=[
    {
      HeadLine: 'Art and Culture',
      content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum molestiae repellendus repellat in quia! Doloribus excepturi reiciendis assumenda nulla similique.',
      image:'https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
     {
      HeadLine: 'Lets Have Fun',
      content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum molestiae repellendus repellat in quia! Doloribus excepturi reiciendis assumenda nulla similique.',
      image:'https://images.unsplash.com/photo-1612476879790-5cb47fac308c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  ]
  return (
    <div className='flex flex-col gap-8'>
        {content.map((items,index)=>{
            return <Card2 image={items.image} content={items.content} headline={items.HeadLine}/>
        })}
    </div>
  )
}

export default Index2