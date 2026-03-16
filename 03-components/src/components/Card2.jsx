import React from 'react'
const Card2 =(props)=>{
    console.log(props)
    return(<>
    <div className='h-80 w-80 bg-green-300 text-white border-2 border-white rounded-xl overflow-hidden  '>
        {/* Making image dynamic with props*/}
        <div className='img h-40 w-full overflow-hidden'><img className='h-full w-full object-cover' src={props.img} alt="" /></div>
        <div><h2>Tree without leaves</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, minima.</p></div>
        <button className="bg-blue-500 text-white p-2 m-4 rounded-md"type="button">View Image</button>
    </div>

    </>)
}
export default Card2