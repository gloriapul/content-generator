import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';

function Instructions() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className="flex flex-col items-center">
      <button className="text-white text-md m-2 p-2 rounded-full border-dark-brown border-2 p-2 bg-bold-pink shadow-sm"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Collapse -' : 'Instructions +'}
      </button>
      <section{...getCollapseProps()}>
        <div className='max-w-md rounded-md shadow-md box-border border-white p-4 bg-white font-poppins text-dark-brown'>
          Ready to expand your social media brand? Witty Wordsmith will take your content to the next level!
          <br/>
          <br/>
          All you need to do is fill out the form below! Witty Wordsmith will take into account your prompt, keywords, word count, tone, and emoji and hashtag usage to create the perfect post for you.
        </div>
      </section>
    </div>
  )
};

export default Instructions;