import React from 'react'

export default function SliderAlt(props) {
  return (
    <div className="slider-container">
      <input 
        type="range" 
        className="slider"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handleChange}
      >  
      </input>
      <input 
        type="range" 
        className="slider"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handleChange}
      >  
      </input>
      <input 
        type="range" 
        className="slider"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handleChange}
      >  
      </input>
      <input 
        type="range" 
        className="slider"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handleChange}
      >  
      </input>
      <input 
        type="range" 
        className="slider"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handleChange}
      >  
      </input>
    </div>
  )
}
