
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import RangeSlider from './RangeSlider';
import Dropdown from './Dropdown';
import PostAmount from './PostAmount';
import Examples from './Examples';
import Socials from './Socials';
import './loader.css';

const gemini_api_key = ''
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};
 
const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-pro",
  geminiConfig,
});
 
const Form_Response = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [tone, setTone] = useState('');
  const [includeEmojis, setIncludeEmojis] = useState(''); 
  const [includeHashtags, setIncludeHashtags] = useState(''); 
  const [keywords, setKeywords] = useState(''); 
  const [sliderValue, setSliderValue] = useState(3);
  const [postAmount, setPostAmount] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [editPresent, setEditButton] = useState(false);
  const [areYouSet, setYouAreAllSet] = useState(false);
  const [furtherEdit, setFurtherEdit] = useState(false);
  const [postInfo, setPostInfo] = useState(false);

  var clearButton = false;
  var tempEmojis = '';
  var tempHashtags = '';
  var wordCount= keywords.split(',').filter(Boolean).length; 
  var wordCountExtraAlert = '';
  if (wordCount > 5){
    wordCountExtraAlert = "Please remove keywords."
  }

  const handleClear = () => {
    setKeywords('');
    setInput('');
  }

  if (input.length > 0){
    clearButton = true;
  }
  else{clearButton = false;}

  const handleEmojis = () => {
    setIncludeEmojis(!includeEmojis);
  };

  const handleHashtags = () => {
    setIncludeHashtags(!includeHashtags);
  };

  const handleEditPost = () => {
    setFurtherEdit(true);
    setEditButton(false);
  };

  const handleSavePost = () => {
    setFurtherEdit(false);
    setYouAreAllSet(true);
    setEditButton(false);
  };


  const generate = async (inputPrompt) => {
    try {
      const prompt = inputPrompt;
      const result = await geminiModel.generateContent(prompt);
      const response = result.response.text();
      console.log(prompt);
      console.log(response);
      return response;
    } catch (error) {
      console.log("response error", error);
      throw new Error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input == '') {
      alert("You have not entered anything in the Post Prompt section. Type something and try again.");
      return;
    }
    if (includeEmojis == true){
      tempEmojis = "YES!"
    }
    else{
      tempEmojis = "NO!"
    }
    if (includeHashtags == true){
      tempHashtags = "Include hashtags!"
    }
    else{
      tempHashtags = "Do NOT Include hashtags!"
    }
    var contentPrompt = "Create EXACTLY " + postAmount + " example social media text post(s) that MUST BE " + sliderValue + " words for: " + input  + ". Use tone: " + tone + "." +" Use emojis? " + tempEmojis +
    " Post MUST include the words: " + keywords + ". Also, " + tempHashtags;
    setLoading(true);
    try{
    const aiResponse = await generate(contentPrompt);
    setLoading(false);
    setPostInfo(true);
    setResponse(aiResponse);
    setEditButton(true);
    setYouAreAllSet(false);
    } catch (error) {
      setLoading(false);
      alert('Please address any potential privacy and security concerns in prompt and try again.');
    } 
  };

  return (
    <div>
    <Examples setInput={setInput} setSliderValue={setSliderValue} setKeywords={setKeywords}/>
    <br/>
    <section className="rounded-md shadow-md p-4 bg-white font-poppins text-dark-brown">
      <div className='flex flex-col items-center'>
          <h2 className='max-w-xl text-2xl font-bold m-2 p-2'>Get Started
          </h2>
      </div>
      <br/>
      <p>Post Prompt:</p>

      <form onSubmit={handleSubmit}>
        <textarea
          className = "rounded-md border-dark-brown border-2 bg-light-grey p-2 focus:ring-bold-pink focus:ring-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="8"
          cols="120"
          placeholder="Type your prompt here..."
        />

      <br/><br/>
      <div> 
          <p>Keywords to Guide Prompt (separate each word with a comma):</p>
            <textarea 
                className = "rounded-md border-dark-brown border-2 bg-light-grey p-2 focus:ring-bold-pink focus:ring-2"
                placeholder= "Type up to five keywords here..."
                onChange={(e) => setKeywords(e.target.value)}
                value={keywords} 
                rows={1} 
                cols={50} 
            /> 
          <p>You have {5-wordCount} keywords left. {wordCountExtraAlert}</p>
      </div> 
      <br/>
      <RangeSlider setSliderValue={setSliderValue}/>
      <p>{sliderValue} words</p>
      <br/>
      <Dropdown setTone={setTone}/>
      <br/>
      <PostAmount setPostAmount={setPostAmount}/>
      <br/>
      <div className="flex flex-row items-center gap-10">
        <p>Include Emojis:</p>
        <div className="flex">
        <input type="checkbox" onClick={handleEmojis} className=" h-[30px] w-[30px] accent-bold-pink"/>
        <div className= {`toggle-button ${includeEmojis ? 'Yes' : 'No'}`}></div>
          <span className="ml-2 text-xl font-poppins text-dark-brown">{includeEmojis ? 'Yes' : 'No'}</span>
        </div>  

        <p>Include Hashtags:</p>
        <div className="flex">
        <input type="checkbox" onClick={handleHashtags} className=" h-[30px] w-[30px] accent-bold-pink"/>
        <div className= {`toggle-button ${includeHashtags ? 'Yes' : 'No'}`}></div>
          <span className="ml-2 text-xl font-poppins text-dark-brown">{includeHashtags ? 'Yes' : 'No'}</span>
        </div>  
      </div>
      <br/>
      <br/>
      <div className="flex flex-col items-center justify-center">
        <button onClick={handleSubmit} type="submit" className="text-white text-md m-1 p-4 shadow-md 
        rounded-full transition-all font-bold duration-500 bg-gradient-to-t from-regal-blue to-bold-pink bg-size-200 bg-pos-0 hover:bg-pos-100 group relative inline-flex items-center justify-center overflow-hidden transition hover:scale-110">
        <span>{isLoading ? (<span className="loader"></span>) : (<span>Generate Content </span>)}</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"/>
        </div>
        </button>
        <br/>
      </div>
      </form>
      {clearButton ? (
        <div className="flex flex-col items-center justify-center">
          <button onClick={handleClear} type="submit" className="text-white text-sm m-2 p-2 shadow-md 
          rounded-full transition-all font-bold duration-500 bg-gradient-to-t from-regal-blue to-bold-pink bg-size-200 bg-pos-0 hover:bg-pos-100 ">
          <span>Clear Prompt & Keywords</span>
          </button>
          <br/>
        </div>) : (<p></p>)}
    </section> 

    <br/><br/>
    {postInfo ? (
      <div><section className="rounded-md shadow-md p-4 bg-white font-poppins dark-brown">
          <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center'>
                <h2 className='max-w-xl text-2xl font-bold m-2 p-2'>Generated Text Post
                </h2>
            </div>
            <br/>
    
      {editPresent ? (<div className="flex flex-row items-center justify-center m-4 mt-[-20px]">
                      <button onClick={handleEditPost} type="submit" className="text-white text-sm m-2 p-2 shadow-md 
                      rounded-full transition-all font-bold duration-500 bg-gradient-to-t from-regal-blue to-bold-pink bg-size-200 bg-pos-0 hover:bg-pos-100 ">
                      <span>Edit Post</span>
                      </button>
                      <br/>
                      <button onClick={handleSavePost} type="submit" className="text-white text-sm m-2 p-2 shadow-md 
                      rounded-full transition-all font-bold duration-500 bg-gradient-to-t from-regal-blue to-bold-pink bg-size-200 bg-pos-0 hover:bg-pos-100 ">
                      <span>Keep Post As Is</span>
                      </button>
                      <br/>
                      <br/>
                    </div>) : (<p></p>)}

        {furtherEdit ? (
          <div className="flex flex-col items-center justify-center">
              <p>Let's edit! Please note once you click Save Post, you will be unable to edit again.</p><br/> 
              <textarea
                className="rounded-md max-w-4xl w-2xl p-2 bg-light-grey border-dark-brown border-2 focus:ring-bold-pink focus:ring-2"
                value={response}
                cols="120"
                rows="4"
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Edit your generated content here..."/>
              <div>
                <button onClick={handleSavePost} type="submit" className="text-white text-sm m-4 p-2 shadow-md 
                rounded-full transition-all font-bold duration-500 bg-gradient-to-t from-regal-blue to-bold-pink bg-size-200 bg-pos-0 hover:bg-pos-100 ">
                <span>Save Post</span>
                </button>
                <br/>
              </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-md max-w-4xl p-2 bg-light-grey border-dark-brown border-2 inline-block">
                <p>{response}</p>
              </div>
            {areYouSet ? (<p className="mt-4 mb-[-5px] p-2">You are all set!</p>) : (<p></p>) }
            </div>
          </div>)}
        <br/>
        </div>
        </section>
        <br/><br/>
        <div className="flex flex-col items-center justify-center">
        {areYouSet ? (<Socials/>) : (<p></p>)}
          </div></div>) : (<p></p>)}

    </div>
  );
};

export default Form_Response;

