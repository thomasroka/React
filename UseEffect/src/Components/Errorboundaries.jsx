import React from 'react'

const Errorboundaries = () => {
  return (
   <div>
    {/** u use Error boundary in the card that has the problem */}
    <ErrorBoundary>
         <Card/>
    </ErrorBoundary>
    <Card/>
   </div>
  )
}
function Card(){
    throw new Error("Error while Rendering")
    return(<div style={{background:"red",height:"90px"}}>
        <h1>I am aCard</h1>
    </div>)
}
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false};
    }
    static getDerivedStateFromError(error){
        return{hasError:true};
    }
    componentDidCatch(error,info){
        console.error("Error caught:",error,info);
    }
    render(){
        if(this.state.hasError){
            return <h1>Somethinf Went Wrong</h1>
        }
        return this.props.children;
    }
    
}

export default Errorboundaries