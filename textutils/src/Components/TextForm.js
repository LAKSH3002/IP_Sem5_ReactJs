import React from 'react'
import { useState } from 'react'

// Hooks - useState, useRef, useEffect.

export default function TextForm(props) 
{
    const handleUppercase = () =>
    {
        console.log("Uppercase was clicked "+ Text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerCase = () =>
    {
        console.log("Uppercase was clicked "+ Text);
        let newText = text.toLowerCase();
        setText(newText) 
    }

    const Cleartext = () =>
    {
        console.log("Uppercase was clicked "+ Text);
        let newText = '';
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

    <button type="btn btn-primary" className="btn btn-primary" onClick={handleUppercase}>Convert To UpperCase</button>

    <button type="btn btn-primary" className="btn btn-primary mx-3" onClick={handleLowerCase}>Convert To LowerCase</button>

    <button type="btn btn-primary" className="btn btn-primary mx-2" onClick={Cleartext}>Clear Text</button>

    <br></br>
    <br></br>
    <div className="container">
        <h1>YOUR TEXT SUMMARY</h1>
        <p>{text.split(" ").length-1} word and {text.length} characters</p>
    </div>

    </div>
  )
}
