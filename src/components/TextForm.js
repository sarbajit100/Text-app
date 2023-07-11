import React, {useState} from 'react'

export default function TextForm(props) {
    const UpClick = ()=>{
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }
    const LoClick = ()=>{
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }
    const Clear = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text is cleared", "success");
    }
    const handleonchange = (event)=>{
        setText(event.target.value)
    }

    const [Text, setText] = useState('');
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={Text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} id="TextForm" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-3" onClick={UpClick}>Convert To Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={LoClick}>Convert To Lowercase</button>
    <button className="btn btn-primary" onClick={Clear}>Clear</button>
    </div>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{Text.split(" ").length} Words & {Text.length} Letters</p>
        <p>{0.008*Text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
    </div>
    </>
  )
}
