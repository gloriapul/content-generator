import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'

function Notice() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className="flex flex-col items-center">
      <button className="text-white text-md m-2 p-2 rounded-full border-dark-brown border-2 p-2 bg-bold-pink shadow-sm"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Collapse -' : 'Notice +'}
      </button>
      <section{...getCollapseProps()}>
        <div className='max-w-md rounded-md shadow-md box-border p-4 bg-white font-poppins'>
          Witty Wordsmith may add or reduce your desired word count by up to 8 words to provide the best content possible!
        </div>
      </section>
    </div>
  );
};

export default Notice;