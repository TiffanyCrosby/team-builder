import React from 'react'
import '../App.css';

function Form() {
    return (
        <form>
            <span className='label'>
                <label>Member Name: </label>
                <input />
            </span>
            <span className='label'>
                <label>Member Email: </label>
                <input />
            </span>
            <span className='label'>
                <label>Member Job Role: </label>
                <input />
            </span>
            <button>Submit</button>
        </form>
    )
}

export default Form