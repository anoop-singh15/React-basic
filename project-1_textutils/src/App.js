
import './App.css';

import Navbar from './6_components/Navbar'
import TextForm from './6_components/TextForm';
import About from './6_components/About';
import { useState } from 'react';

// let a = "REACT";
function App() {
  const [mode,setMode]=useState('light');

  const  toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor=('#042743');
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor=('white');
    } 
  }
  
  return (
    <>
     <Navbar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode}/>
     {/* <Navbar /> */}

     {/* Changes in 7-state and event handling */}
     <div className="container">
     <TextForm heading="Text to Analyze" mode={mode}/>
     <About/>

     </div>

    </>
  );
}

export default App;
