import React,{useState} from 'react'
// import translate from 'translate';
// const translate=require('translate');
export default function
(props) {
    // use of state 
    // text will  be updated using setText function
    const [text,setText]=useState('');
    // text="sdasd";    wrong way to update text
    // setText("new");  correct way to update text state     
    
        
        const handleUppercase=()=>{
            console.log("uppercase clicked "+text)
            setText(text.toUpperCase()  );
           
        }
        const handleLowercase=()=>{
            console.log("uppercase clicked "+text)
            setText(text.toLowerCase() );
           
        }

        const handleOnChange=(event)=>{
            console.log("On change");
            // console.log(event.target.value);
            setText(event.target.value);
        }
        const Text_To_Speech=(event)=>{
            const voice=speechSynthesis.getVoices();
            const word=new SpeechSynthesisUtterance(text);
            word.voice =voice[21];
            speechSynthesis.speak(word);
        }

     

    return (
        <>
         <div>
            <div className="mb-3">
                <h1>{props.heading} </h1>

                <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="9"></textarea>
            </div>
           
            <button className="btn btn-primary" onClick={handleUppercase}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowercase}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={Text_To_Speech}>Text-to-Speech</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleLanguageChange}>Translate</button> */}
        </div>
        
        <div className="container my-2">
            <h2>
                Text Summary
            </h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{text.split(' ').length * (0.008)} Minutes to read</p>
            <h2>
                Preview
            </h2>
            <p>{text}</p>
        </div>

        </>
       

    )
}
