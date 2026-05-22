import React from "react";
import { useState } from "react";
 export const ColorPicker=()=>{
    const [color, Setcolor]=useState("#FFFF");
    function handleColorChange(event){
        Setcolor(event.target.value)
    }
    return(<div className="Class-Picker-contaitne">
        <h1>Color Picker</h1>
        <div className="color-display bg-color-color" style={{backgroundColor:color}}>
            <p>Selected Color:{color}</p>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    </div>)
}

 export function Dummy(){
    const [colour, setColour]=useState("#FFFF");
    function onBG(e){
        setColour(e.target.value)
    }
    return(<>
    <div>
        <h2>Choose a color</h2>
        <div  style={{backgroundColor:colour}}>
            <p>Selected Color:{colour}</p>
            <input type="color" name="" value={colour} id=""onChange={onBG} />
        </div>
    </div>
    </>)
}