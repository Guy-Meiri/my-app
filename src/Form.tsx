import React from 'react'
import './index.css'

export default function Form() {
    return (
        <div className='flex form'>
            <h3>Beautiful form</h3>
            <div>
                <label>first </label>
                <input />
            </div>
            <div>
                <label> last </label>
                <input />
            </div>
        </div>
    )
}
