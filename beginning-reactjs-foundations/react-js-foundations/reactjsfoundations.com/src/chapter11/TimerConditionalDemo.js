import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function TimerConditionalFun(props) {
  const [count, setCount] = useState(0);
  const [gameNumber, setGameNumber] = useState(0);

  useEffect(() => {
    let time = 0;
    const interval = setInterval(() => {
      console.log(time++);
      if (time === 10) {
        console.log(`time's up!`);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [gameNumber]);

  return (
    <>
      <h1>Game Number {gameNumber}</h1>
      <p>
        Click as fast as you can!
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      </p>
      <p>
        <button onClick={() => setGameNumber((prev) => prev + 1)}>
          New Game
        </button>
      </p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useEffect,useState} from 'react';

function TimerConditionalFun(props){

  const [count,setCount] = useState(0);
  const [gameNumber,setGameNumber] = useState(0);

  useEffect(() => {
    let time = 0;
    const interval = setInterval(() => {
      console.log(time++);
      if(time===10){
        console.log(\`time's up!\`);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  },[gameNumber]);

  return (
    <>
      <h1>Game Number {gameNumber}</h1>
      <p>Click as fast as you can! 
        <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
      </p>
      <p>
        <button onClick={()=>setGameNumber((prev)=>prev+1)}>New Game</button>
      </p>
    </>
  );
}

export default TimerConditionalFun;`}
      </SyntaxHighlighter>
    </>
  );
}

export default TimerConditionalFun;
