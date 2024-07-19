import React, { useState } from 'react';

function Dropdown({setTone, tone}) {
    const handleChange = (e) => {
      setTone(e.target.value)
    };

    return (
      <div>
        <h1>Post Tone: </h1>
        <select className="bg-light-grey border-2 border-dark-brown text-dark-brown mb-4 text-md text-poppins rounded-md block w-1/4 p-2.5 focus:ring-bold-pink focus:ring-2"
        value={tone} onChange={handleChange}>
          <option defaultValue>Select a Tone</option>
          <option value="Funny">Funny</option>
          <option value="Serious">Serious</option>
          <option value="Aggressive">Aggressive</option>
          <option value="Friendly">Friendly</option>
          <option value="Nostalgic">Nostalgic</option>
          <option value="Respectful">Respectful</option>
          <option value="Educational">Educational</option>
          <option value="Mysterious">Mysterious</option>
          <option value="Bitter">Bitter</option>
        </select>
      </div>
    );
}
export default Dropdown;