
import './App.css';

import Navbar from './6_components/Navbar'
import TextForm from './6_components/TextForm';
import About from './6_components/About';
import { useState } from 'react';
import Alert from './6_components/Alert';

// let a = "REACT";
function App() {
  const [mode,setMode]=useState('light');
  
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 999);

  }

  const  toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor=('#042743');
      showAlert("Dark mode Enabled","success");
      document.title="TextUtils - Dark Mode";

        // Pop ups in website
        // setInterval(() => {
        //   document.title="TextUtils is Amazing";
        //   }, 2000);
        // setInterval(() => {
        //   document.title="Install TextUtils Now";
        //   }, 1500);

    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor=('white');
      showAlert("light mode Enabled","success");
       document.title="TextUtils - Light Mode";
    } 
  }


  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })

  // }
  
  return (
    <>
     <Navbar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     {/* <Navbar /> */}

     {/* Changes in 7-state and event handling */}
     <div className="container">
     <TextForm heading="Text to Analyze" mode={mode} showAlert={showAlert}/>
     <About/>

     </div>

    </>
  );
}

export default App;
