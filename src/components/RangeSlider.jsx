import React, { useState } from 'react';
function RangeSlider({sliderValue, setSliderValue}) {

  const handleChange = (e) => {
    setSliderValue(e.target.value)
  };

    return (
      <>
      <p>
        Desired Word Count:
      </p>
      <div className="space-x-2">
        <input
          className="accent-bold-pink w-1/4 h-2"
          type="range"
          value={sliderValue}
          defaultValue="3"
          min="3"
          step="1"
          max="30"
          onChange={handleChange}
        ></input>
        <br/>
      </div>
      </>    
    );
  }

  export default RangeSlider;