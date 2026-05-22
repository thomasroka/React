import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link,Navigate,Outlet} from "react-router-dom"
import Home from './Components/Home'
import UseRef from './Components/UseRef'

function App() {
  const [count, setCount] = useState(0)

  return (<><div>
  <BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>}>
<Route path="/" element={<Class11Program/>}/>
<Route path="/neb/online-coaching-class-11" element={<Class11Program/>}/>
<Route path="/neb/online-coaching-class12" element={<Class12Program/>}/>
<Route path="/neb/online-coaching-class-10" element={<Class10Program/>}/>
{/** this is for if the path doesnt exist */}
<Route path="*" element={<ErrorPage/>}/>
</Route>

</Routes>
</BrowserRouter>
  </div>
  <div>
    <h3>Section of Use Ref example</h3>
    <UseRef/>
  </div>
  </>
  )
}
// List of  Components Below
function Class11Program(){
  return(<div>
    <h3>Class 11 Programs for NEB</h3>
  </div>
  )
}
function Class10Program(){
  return(<div>
    <h3>Class 10 Programs for NEB</h3>
  </div>
  )
}
function Class12Program(){
  return(<div>
    <h3>Class 12 Programs for NEB</h3>
  </div>
  )
}
function ErrorPage(){
  return(<div>
    <h3>Page Not Found</h3>
  </div>
  )
}
function Layout(){
return(
  <div style={{height:"10vh", background:"blue"}}>
    <Header/>
    <div style={{height:"80vh",background:"yellow"}}>
    <Outlet/> {/** content of navlinks */}
  </div>
  <div style={{height:"10vh",background:"pink"}}>
    Footer
  </div>
  </div>
)}
function Header(){
  return(<div>
     <Link to="/neb/online-coaching-class-11">Class11</Link> |
    <Link to="/neb/online-coaching-class12">Class12</Link> |
    <Link to="/neb/online-coaching-class-10">Class1o</Link>
  </div>)
}

export default App
// Link allows us to switch between tabs  in nav, Link are used inside BrowserRouter
// there is no loader  a tag doesnt allow Link allows
// It can be achieved by another UseNavigate() hook - if u want user to navigate to other page after certain time
/* syntax for navigate
function Class12Program(){
const navigate=useNavigate();
function redirectUser(){
navigate("/")
}
return(<div>
<h1> Program for Class 12</h1>
<button onclick={redirectUser}GO To Landing Pages</button>
here u can use link as well
<Link to=""><button>GO To Landing Pages</button></Link>

</div>)
}
*/

// New Concept  of React  Layout combining numbers of routes in single route , it uses Outlet  imported
// Layout is clearner way of writing routing

