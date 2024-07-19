import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Visit us again!','Hope to see you again soon!', 'Until next time!'];

const Footer = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <footer className="flex flex-col items-center text-white text-poppins bg-regal-blue w-full p-6 shadow-sm">
    <h1>
      <TextTransition className="text-xl font-bold" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
    <br/>
    <a className="rounded-full border-white border-2 p-2"href="#top">Back To Top </a>
    </footer>
  );
};

export default Footer;
