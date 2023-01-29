import { useRef } from 'react';
import Form from './Form';

export default function RefExampleBefore() {

    const inputRef = useRef<HTMLInputElement>(null);

    const focusOnInput = () => {
        if (inputRef.current) {
            inputRef.current?.focus();
        }
    }
    return (
        <div className='flex'>
            <div className=' form flex'>
                <Form />
                <button onClick={focusOnInput}> Submit</button>
            </div>
            <input ref={inputRef} placeholder='next' />
        </div>
    )
}
