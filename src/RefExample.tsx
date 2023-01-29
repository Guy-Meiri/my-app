import React, { useRef } from 'react'
import "./index.css"

export default function RefExample() {

    const inputRef = useRef<HTMLInputElement>(null);

    const focusOnInput = () => {
        inputRef?.current?.focus();
    }

    return (
        <div className='flex'>
            <input />
            <button onClick={focusOnInput}>focus on next input</button>
            <input ref={inputRef} />
        </div>
    )
}
