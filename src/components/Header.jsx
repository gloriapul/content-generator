import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

var statement = "";
const day = new Date();
var hour = day.getHours();
  if (hour < 12) {
    statement = 'Good morning!';
  } else if (hour < 18) {
  statement = 'Good afternoon!';
  } else {
  statement = 'Good evening!';
  }

const TEXTS = [statement, '#1 Social Media Content Generator','Expand your brand!', 'Shout us out on social media!','Recommend us to friends and family!'];

const Header = () => {
  const [index, setIndex] = React.useState(0);
  

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      6000, // every 6 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <header className="bg-regal-blue w-full p-2 shadow-sm">
      
    <h1>
      <TextTransition className="flex flex-col items-center text-white text-poppins text-xl font-bold" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
    </header>
  );
};

export default Header;
