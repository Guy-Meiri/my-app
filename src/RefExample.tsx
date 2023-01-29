import React, { useRef } from 'react'
import Form from './Form';
import "./index.css"

export default function RefExample() {

    const inputRef = useRef<HTMLInputElement>(null);

    const focusOnInput = () => {
        inputRef?.current?.focus();
    }

    return (
        <div className='flex'>
            <Form />
            <button onClick={focusOnInput}>focus on next input</button>
            <input ref={inputRef} />
        </div>
    )
}
