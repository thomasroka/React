
import { useState } from 'react'
import './App.css'
import Post from './components/Post'
import State from './components/State'
import Message from './components/Message'
function App() {
  const [Posts,setpost]=useState([]);
const post_components = Posts.map((post, index) => (
  <Post
    key={index}
    subtitle={post.subtitle}
    image={post.image}
    time={post.time}
    description={post.description}
    name={post.name}
  />
));
  function addPost(){
    setpost([...Posts,  {
    name:"Thomas Roka",
    subtitle:"Hello",
    time:"30 mins",
    description:"Ahh haha humm",
    image:"https://images.unsplash.com/photo-1774331510646-a1781c4a9713?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  }])

    }
  return (
    <>
    <div className='h-screen w-screen bg-green-200'>
      <div className='p-1.5 pb-2.5'>hi there</div>
       
       <Post subtitle={"Promoted"} image={"https://images.unsplash.com/photo-1774331510646-a1781c4a9713?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"} time={"12 min"} description={"This is my first post"} name={"Tom"}/>
       <State />
       {post_components}
     
       <button className='h-20 w-40 bg-white rounded-xl' onClick={addPost}>Add Post</button>
         <Message size="20"/>
      </div>
    </>
  )
}
export default App
