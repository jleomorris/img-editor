import React, { useState } from 'react';
import './App.css';
import Slider from './Slider';
import SidebarItem from './SidebarItem';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
]

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionSelectedIndex] = useState(0);
  const selectedOption = options[selectedOptionIndex];
  const [backgroundUrl, setBackgroundUrl] = useState("https://source.unsplash.com/EwKXn5CapA4");

  function handleSliderChange({ target }) {
    
    // Look through options and change the value of the selected option
    setOptions(prevOptions => {
      return prevOptions.map((option) => {
        if (option.name !== target.name) return option;
        return { ...option, value: target.value };
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`;
    })

    return { filter: filters.join(' '), backgroundImage: `url(${backgroundUrl})` };
  }

  function handleAlternativeImgClick(e) {
    setBackgroundUrl(e.target.src);
    resetFilters();
  }

  function resetFilters() {
    setOptions(DEFAULT_OPTIONS);
  }

  function handleResetButtonClick() {
    resetFilters();
  }

  return (
    <div className="container">
      {/* <div className="sidebar">
      </div> */}
      <div className="main-image-container">
        <div className="main-image" style={getImageStyle()}></div>
      </div>
      <div className="image-gallery">
        <img className="alternative-image" src="https://source.unsplash.com/EwKXn5CapA4" onClick={handleAlternativeImgClick}></img>
        <img className="alternative-image" src="https://images.unsplash.com/photo-1604202400173-051d875ae26a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" onClick={handleAlternativeImgClick}></img>
        <img className="alternative-image" src="https://images.unsplash.com/photo-1604169152293-f28c94d08a82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" onClick={handleAlternativeImgClick}></img>
        <img className="alternative-image" src="https://images.unsplash.com/photo-1604333141071-a9156446d984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3892&q=80" onClick={handleAlternativeImgClick}></img>
        <img className="alternative-image" src="https://images.unsplash.com/photo-1604342567568-0a59b6e4da11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" onClick={handleAlternativeImgClick}></img>
        <img className="alternative-image" src="https://images.unsplash.com/photo-1604236029100-809ebc46ef75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" onClick={handleAlternativeImgClick}></img>
        <img className="alternative-image" src="https://images.unsplash.com/photo-1604208073678-2753d0da599f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" onClick={handleAlternativeImgClick}></img>
        <img className="alternative-image" src="https://images.unsplash.com/photo-1601758065893-25c11bfa69b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1279&q=80" onClick={handleAlternativeImgClick}></img>
      </div>
      <div className="slider-container">
        {options.map((option, index) => {
          return(
            <Slider 
              key={option.name}
              name={option.name}
              min={option.range.min}
              max={option.range.max}
              value={option.value}
              handleChange={handleSliderChange}  
            />
          )
        })}
        <button className="reset-button" onClick={handleResetButtonClick}>Reset</button>
      </div>
    </div>
  );
}

export default App;
