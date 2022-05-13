import { useState, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function WordCount(props) {
  const textAreaRef = useRef();
  const [wordCount, setWordCount] = useState(0);

  const countWords = (e) => {
    const text = textAreaRef.current.value;
    setWordCount(text.split(' ').length);
  };

  return (
    <>
      <textarea ref={textAreaRef} />
      <br />
      <button onClick={countWords}>Count Words</button>
      <p>{wordCount} words.</p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState,useRef} from 'react';

function WordCount(props){

    const textAreaRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    const countWords = (e) => {
      const text = textAreaRef.current.value;
      setWordCount(text.split(" ").length);
    }

    return (
        <>
          <textarea ref={textAreaRef} /><br />
          <button onClick={countWords}>Count Words</button>
          <p>{wordCount} words.</p>
        </>
    )
}

export default WordCount;`}
      </SyntaxHighlighter>
    </>
  );
}

export default WordCount;
