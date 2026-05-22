import React from 'react'

const Keys = () => {
    const todos=[{title:"GO to gym",
    done:false,
    
    },{title:"Drink Tea",
    done:true,
    
    }];
  return (
    // component is a function that retuns a jsx inside map also we can use it to pass abject as a props to components
    <div>{todos.map((items,index)=>{return <Todo title={items.title}/>})}</div>
  )
}
 const styles={color:"red", backgroundColor:"lightgreen"}
function Todo({title,done}){
    // u can do it this way as well
    //style={styles}
   
    return(
        //styling a div with the help of inline style 
    <div style={{color:"red", backgroundColor:"lightgreen"}}>
        {title}-{done? "Done":"Please do it"}
    </div>)
}

export default Keys