import React from 'react'

const UseEffecth = () => {
     const [count, setCount] = useState(1)
  function increaseCount(){
    //setCount(count+1); here count works as a constant
    setCount(c=>c+1);
  } 

  
  //setInterval(increaseCount,1000);
  // if u will do this there will be numbers of rerendures and will  cause problem so useState was introduced
  //useEffect(function(){},[])
  // useEffect(function(){
  //   console.log("above setInterval" +count)
  //   setInterval(increaseCount,1000)
  // },[])// this is without dependencie array and  the function or clock runs when a  component is first time rendered 
    useEffect(function(){
    console.log("above setInterval" +count)
    console.log("interval created");
    setInterval(increaseCount,1000)
  },[count])// this is with dependecies array and the sideeffect which is inside function depends on change of value of count.
  return (
    <>
    {count}
      <Greeting name={"Thomas Roka"} countt={count}/>
    </>
  )
}
function Greeting({name,countt}){
  return(<div>
    <p>The name is { name}</p>
    {countt}
  </div>)
}

export default UseEffecth