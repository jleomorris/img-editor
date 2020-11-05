import React from 'react'

export default function Slider(props) {
  return (
      <div className="slider-container-item">
        <p>{props.name}</p>
        <input 
          type="range" 
          className="slider"
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={props.handleChange}
          name={props.name}
          uniqueindex={props.uniqueindex}
        >  
        </input>
      </div>
  )
}
