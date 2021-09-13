import React, {useState} from 'react'

export default function Formtext(props) {
 const handleupClick= ()=>{
  //  console.log('uppercase was clicked'+text )
   let newText = text.toUpperCase();
  //  jab koi button par click karega to newtext jo hoga wo uppercase hoga
   setText(newText)
 }
 const handleLoClick= ()=>{
   let newText = text.toLowerCase();
   setText(newText)
 }
 const handleclearClick= ()=>{
   let newText = '';
   setText(newText)
 }
 const handleTitleClick= ()=>{
   let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()  ;
   setText(newText)
 }
//  without event we cant write in the text area
//  hum event ke bina setText means jo hamari value ko update karta ha wo update nhi kar pata means ki hum (hum likh nhi pate means ki    setText(event.target.value) yah hamari write ki value ko sath sath update karta hai which is display us means onchange hame dikhta hai   )
 const handleOnChange= (event)=>{
   console.log('on change' )
 
   setText(event.target.value)
 }
// here set text is define to update to the value and text is for the defualt value
 const [text, setText] = useState('default text value');

    return (
       <>
       <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
         
       <div className='my-4'   >

      <h1>{props.Heading} </h1>
<div className="mb-3 my-3 ">
  <textarea className="form-control  "  style={{background:props.mode==='dark'?'#54546e':'white' , color:props.mode==='dark'?'white':'black' }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupClick} >switch to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >switch to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleTitleClick} >switch to Title</button>
<button className="btn btn-primary mx-2" onClick={handleclearClick} >Clear</button>
       </div>

<h2>Your text summery</h2>
<p>{text.split(" ").length} words and {text.length} characters </p>
<p> {0.008*text.split(" ").length} Minutes to read the text </p>
<h2>Preview</h2>
<p>{text} </p>
       </div>
       </>
    )
}
