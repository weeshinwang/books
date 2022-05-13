import { useEffect, useState, useRef, useCallback } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function CallMe(props) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [currentNumber, setCurrentNumber] = useState();

  const phoneInputRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    setPhoneNumber(currentNumber);
  };

  const placeCall = useCallback(() => {
    if (phoneNumber) {
      console.log(`dialing ${phoneNumber}`);
    }
  }, [phoneNumber]);

  useEffect(() => {
    placeCall(phoneNumber);
  }, [phoneNumber, placeCall]);

  return (
    <>
      <form>
        <label>Enter the number to call:</label>
        <input
          type="phone"
          ref={phoneInputRef}
          onChange={() => {
            setCurrentNumber(phoneInputRef.current.value);
          }}
        />
        <button onClick={handleClick}>Place Call</button>
        <h1>{currentNumber}</h1>
      </form>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useEffect,useState,useRef,useCallback} from 'react';

function CallMe(props){

  const [phoneNumber,setPhoneNumber] = useState();
  const [currentNumber,setCurrentNumber] = useState();

  const phoneInputRef = useRef();

  const handleClick = (e)=>{
      setPhoneNumber(currentNumber);
  }

  const placeCall = useCallback(() => {
    if(phoneNumber){
      console.log(\`dialing ${phoneNumber}\`);
    }
  },[phoneNumber]);
  
  
  useEffect(() => {
    placeCall(phoneNumber);
  },[phoneNumber,placeCall]);

  return(
    <>
      <label>Enter the number to call:</label>
      <input type="phone" 
             ref={phoneInputRef}
             onChange={()=>{setCurrentNumber(phoneInputRef.current.value)}}
      />
      <button onClick={handleClick}>
        Place Call
      </button>
      <h1>{currentNumber}</h1>
    </>
  );
}

export default CallMe;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default CallMe;
