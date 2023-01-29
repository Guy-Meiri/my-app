import React, { createRef, useEffect, useState } from 'react';
import { FancyDiv } from './FancyDiv';

function ScrollExample() {
  const divRef = createRef<HTMLDivElement>();
  const [inputText, setInputText] = useState('');
  const [isScroll, setIsScroll] = useState(true);

  useEffect(() => {
    if (divRef.current) {
      const isCurrentlyScroll = divRef.current.scrollHeight > divRef.current.clientHeight;
      if (isCurrentlyScroll != isScroll) {
        setIsScroll(isCurrentlyScroll);
      }
    }
  }, [divRef, isScroll]);

  return (
    <div className='flex'>
      <input value={inputText} placeholder="enter text here" onChange={(e) => setInputText(e.target.value)} />
      <FancyDiv ref={divRef} type='div prop type'>
        <div>{inputText}</div>
      </FancyDiv>
      <div className="border">
        <h5>other component</h5>
        {isScroll && <div>scroll visible!</div>}
      </div>
    </div>
  );
}

export default ScrollExample;
