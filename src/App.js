import "./App.css";
// import About from "./Components/About";
import Formtext from "./Components/Formtext";
import Navbar from "./Components/Navbar";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
        })
          setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode = ()=>{
    if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor = "#434362";
      showAlert('dark mode has been enabled ','Success' )
    }
    else{

      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert('light mode has been enabled ','Success' )

    }
  }
  return (
    <> 
    
    {/* <Router> */}
      <Navbar title="My first app" aboutText="about text" mode= {mode} //variable mode pass karvaya hai so don't use backticks
       toggleMode={toggleMode} />
      {/* <Navbar  /> */}
     <div className="container" style={{height:"50px"}} >
       <Alert alert={alert} />  {/* ye alert setalert wala alert hai jiski initial valua is null jo aage props me pass hoga */}
      
       </div> 
      {/* <div className="container">  */}

      {/* <Switch>
          <Route path="/about">
            <About  mode= {mode} />
          </Route>
        
          <Route path="/">
          
          </Route>
        </Switch> */}
      {/* </div> */}
      <div className="container">
        <Formtext showAlert={showAlert} Heading="Enter the text to analyse below" mode={mode} />
      
      </div>
        {/* </Router> */}
  
    </>
  )
}

export default App;
