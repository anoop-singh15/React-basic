
import './App.css';

import Navbar from './6_components/Navbar'
import TextForm from './6_components/TextForm';
import About from './6_components/About';

// let a = "REACT";
function App() {
  return (
    <>
     <Navbar title="TextUtils" About="About Us"/>
     {/* <Navbar /> */}

     {/* Changes in 7-state and event handling */}
     <div className="container">
     <TextForm heading="Text to Analyze"/>
     <About/>

     </div>

    </>
  );
}

export default App;
