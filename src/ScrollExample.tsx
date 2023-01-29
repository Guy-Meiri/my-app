import React, { createRef, useEffect, useState } from 'react';
import { KeywordList } from './KeywordList';

function ScrollExample() {
  const divRef = createRef<HTMLDivElement>();
  const [inputText, setInputText] = useState('');
  const [shouldShowMore, setShouldShowMore] = useState(true);

  useEffect(() => {
    if (divRef.current) {
      const isCurrentlyScroll = divRef.current.scrollHeight > divRef.current.clientHeight;
      if (isCurrentlyScroll != shouldShowMore) {
        setShouldShowMore(isCurrentlyScroll);
      }
    }
  }, [divRef, shouldShowMore]);

  return (
    <div className='flex'>
      <input value={inputText} placeholder="enter text here" onChange={(e) => setInputText(e.target.value)} />
      <KeywordList ref={divRef} type='div prop type'>
        <div>{inputText}</div>
      </KeywordList>
      <div className="border">
        <h6>Other component</h6>
        {shouldShowMore && <div>SHOW MORE!</div>}
      </div>
    </div>
  );
}

export default ScrollExample;
