import React from 'react';
import Form_Response from './components/Form_Response';
import Header from './components/Header';
import Footer from './components/Footer';
import Instructions from './components/Instructions';
import Notice from './components/Notice';

function App() {
  
  return (
    <div className="min-h-screen bg-light-b">
    <section className="font-poppins text-dark-brown">
    <main className='flex flex-col items-center'>
    
      <Header/>

      <img src={'http://localhost:5173/logo.png'} width="250" height="250"/>
      <title> Social Media Content Generator</title>
      <h1 className='text-5xl transition-all duration-500 font-staatliches text-white font-thin my-[-5px] mt-2 p-4 bg-regal-blue rounded-md shadow-md hover:bg-white hover:text-regal-blue'>
            What will you generate today? 
      </h1>
      <br/>
      <h1 className='flex flex-row items-center max-w-2xl rounded-md shadow-md p-4 bg-white'>
            Witty Wordsmith provides users a simple way to generate text posts for your social media pages, guaranteed to excite existing followers and attract new ones!
      </h1>

      <div className="mt-4 flex flex-row items-center gap-x-4 gap-y-4 my-1">
        <Instructions className="flex flex-row items-center"/>
        <Notice className="flex flex-row items-center"/>
      </div>

      <Form_Response/>
      <br/>
      <br/>
      <Footer/>
    </main>
    </section>
    </div>
  )
}

export default App

