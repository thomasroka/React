import React from 'react'
import Card from './Card'
const content=[
    {
    Head: 'Mount Everest',
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aut?",
    rating: 4,
    image:"https://images.unsplash.com/photo-1776451591680-d8ceafca123e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
  },{Head: 'Mount K2',
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aut? ",
    rating: 4,
    image:"https://images.unsplash.com/photo-1776334745897-02b3d577bac8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ]
const Index = (props) => {
  
  return (
    <>
    <div className='m-4 flex gap-8'>
       {content.map((items, index)=>
       
       (
       <Card  key={index} head={items.Head} image={items.image} rating={items.rating} content={items.content}/>
      
    ))}
    </div>
   

    </>
  )
}

export default Index