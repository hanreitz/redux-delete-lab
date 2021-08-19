import React from 'react'

const Band = props => {
  const handleClick = () => props.deleteBand(props.id)
  return (
    <div>
      <li>{props.name} </li>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Band
