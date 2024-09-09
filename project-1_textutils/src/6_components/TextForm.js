import React,{useState} from 'react'

export default function
(props) {
        // use of state 
        // text will  be updated using setText function
        const [text,setText]=useState("Enter text here");
        // text="sdasd";    wrong way to update text
        // setText("new");  correct way to update text state     
       
        const handleUppercase=()=>{
            console.log("uppercase clicked "+text)
            setText(text.toUpperCase()  );
           
        }

        const handleOnChange=(event)=>{
            console.log("On change");
            // console.log(event.target.value);
            setText(event.target.value);
        }


    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading} </h1>

                <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="9"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUppercase}>Uppercase</button>
        </div>


    )
}
