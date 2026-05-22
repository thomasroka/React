import React from 'react'

const Education = ({school,title,year}) => {
  return (
    <div>
        <p>School: {school}</p>
        <p>Title: {title}</p>
        <p>Year: {year}</p>
    </div>
  )
}

export default Education