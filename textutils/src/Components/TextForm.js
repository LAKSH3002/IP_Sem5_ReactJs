import React from 'react'
import { useState } from 'react'

// Hooks - useState, useRef, useEffect.

export default function TextForm(props) 
{
    const handleUpCLick = () =>
    {
        console.log("Uppercase was clicked "+ Text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>
    {
        console.log("on change")
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');
    // text = 'new text' // wrong way to change the state
    // setText("new text"); // Correct way to change the state 

    return (
    <div>
    

    <div className="mb-3">
    <label for="myBox" className="form-label"><b>{props.heading}</b></label>
    <textarea className="form-control" id="mybox" value = {text} onChange={handleOnChange} rows="8"></textarea>
    </div>

    <button type="btn btn-primary" className="btn btn-primary" onClick={handleUpCLick}>Convert To UpperCase</button>
    </div>
  )
}
