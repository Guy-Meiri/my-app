import React, { createRef, useEffect, useState } from 'react';
import { KeywordList } from './KeywordList';

function ScrollExample() {
  const divRef = createRef<HTMLDivElement>();
  const [inputText, setInputText] = useState('');
  const [shouldShowMore, setShouldShowMore] = useState(true);

  useEffect(() => {
    if (divRef.current) {
      const newIsShowMore = divRef.current.scrollHeight > divRef.current.clientHeight;
      if (newIsShowMore !== shouldShowMore) {
        setShouldShowMore(newIsShowMore);
      }
    }
  }, [divRef, shouldShowMore]);

  return (
    <div className='flex border'>
      <input value={inputText} placeholder="enter text here" onChange={(e) => setInputText(e.target.value)} />
      <h6 className='father'>Father component</h6>
      {shouldShowMore && <div>SHOW MORE!</div>}
      <KeywordList ref={divRef} type='div prop type'>
        <div>{inputText}</div>
      </KeywordList>
    </div>
  );
}

export default ScrollExample;
