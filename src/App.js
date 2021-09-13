import "./App.css";
// import About from "./Components/About";
import Formtext from "./Components/Formtext";
import Navbar from "./Components/Navbar";
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState('light')
  const toggleMode = ()=>{
    if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor = "#434362";
    }
    else{

      setmode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="My first app" aboutText="about text" mode= {mode} //variable mode pass karvaya hai so don't use backticks
       toggleMode={toggleMode} />
      {/* <Navbar  /> */}
      <div className="container">
        <Formtext Heading="Enter the text to analyse below" mode={mode} />
      </div>
      <div className="container">
      {/* <About mode={mode}/> */}
      </div>
    </>
  );
}

export default App;
