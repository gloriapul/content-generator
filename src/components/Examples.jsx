import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'

function Examples({setInput, setKeywords}) {

  const handle1stChange = (e) => {
    setInput(e.target.value);
    setKeywords("july, toyota, family, bankrupt, fight");
  };

  const handle2ndChange = (e) => {
    setInput(e.target.value);
    setKeywords("celebrate, aging, birthday");
  };

  const handle3rdChange = (e) => {
    setInput(e.target.value);
    setKeywords("italy, pandemic");
  };

  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className="flex flex-col items-center">
      <button className="text-white text-md m-2 p-2 rounded-full border-dark-brown border-2 p-2 bg-bold-pink shadow-sm"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Collapse -' : 'Sample Prompts + '}
      </button>
      <section{...getCollapseProps()}>
      
        <div className=" max-w-3xl rounded-md shadow-md box-border p-4 bg-white font-poppins">
        <h1 className="flex items-center flex-col">Select a sample prompt with keywords if you would like!</h1>
        <br/>
        <div className="gap-x-6 flex flex-row items-center">
        <div className="flex items-center ps-4 w-1/3 border-2 bg-light-grey border-dark-brown rounded-md">
            <input onClick={handle1stChange} value="A car dealership wants to tell people that live nearby that they need to sell as many cars as possible this weekend or else it will go out of business" id="o1" type="radio" name="preset" className="mr-[-20px] accent-bold-pink w-4 h-4 focus:ring-bold-pink focus:ring-2 "/>
            <label htmlFor="o1" className="w-full p-4 ml-10">
              <p className="font-bold"> Prompt:</p> A car dealership wants to tell people that live nearby that they need to sell as many cars as possible this weekend or else it will go out of business
              <br/><br/>
              <p className="font-bold"> Keywords:</p> July, Toyota, Family, Bankrupt, Fight</label>
        </div>
        <div className="flex items-center ps-4 w-1/3 border-2 bg-light-grey border-dark-brown rounded-md">
            <input onClick={handle2ndChange} value="A greeting card company wants to tell its existing and potential customers to think about their loved ones and purchase cards for them" id="o2" type="radio" name="preset" className="mr-[-20px] accent-bold-pink w-4 h-4  focus:ring-bold-pink focus:ring-2"/>
            <label htmlFor="o2" className="w-full p-4 ml-10">
              <p className="font-bold"> Prompt:</p> A greeting card company wants to tell its existing and potential customers to think about their loved ones and purchase cards for them
              <br/><br/>
              <p className="font-bold"> Keywords:</p> Celebrate, aging, birthday</label>
        </div>
        <div className="flex items-center ps-4 w-1/3 border-2 bg-light-grey border-dark-brown rounded-md">
            <input onClick={handle3rdChange} value="A singer wants to thank their fans for attending one of their concerts after 5 years of not being on tour" id="o3" type="radio" name="preset" className="mr-[-20px] accent-bold-pink w-4 h-4 focus:ring-bold-pink focus:ring-2"/>
            <label htmlFor="o3" className="w-full p-4 ml-10">
              <p className="font-bold"> Prompt:</p> A singer wants to thank their fans for attending one of their concerts after 5 years of not being on tour
              <br/><br/>
              <p className="font-bold"> Keywords:</p> Italy, pandemic
            </label>
        </div>
        </div>
    </div>
      </section>
    </div>
  );
};

export default Examples;