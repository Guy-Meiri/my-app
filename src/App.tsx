import React, { createRef, useEffect, useState } from 'react';
import { isCallChain } from 'typescript';

import './App.css';
import { FancyDiv } from './FancyDiv';

function App() {
  const divRef = createRef<HTMLDivElement>();
  const [inputText, setInputText] = useState('');
  const [isScroll, setIsScroll] = useState(true);

  useEffect(() => {
    if (divRef.current) {
      console.log(`is scroll: ${divRef.current.scrollHeight > divRef.current.clientHeight}`);
      const isCurrentlyScroll = divRef.current.scrollHeight > divRef.current.clientHeight;
      if (isCurrentlyScroll != isScroll) {
        setIsScroll(isCurrentlyScroll);
      }
    }
  }, [divRef]);

  return (
    <>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
      <FancyDiv ref={divRef} type='div prop type'>
        <div>{inputText}</div>
      </FancyDiv>
      {isScroll && <div>scroll visible!</div>}
    </>
  );
}

export default App;
