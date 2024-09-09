
import './App.css';

import Navbar from './6_components/Navbar'
import TextForm from './6_components/TextForm';

// let a = "REACT";
function App() {
  return (
    <>
     <Navbar title="TextUtils" About="About Us"/>
     {/* <Navbar /> */}

     {/* Changes in 7-state and event handling */}
     <div className="container">
     <TextForm heading="Text to Analyze"/>

     </div>

    </>
  );
}

export default App;
