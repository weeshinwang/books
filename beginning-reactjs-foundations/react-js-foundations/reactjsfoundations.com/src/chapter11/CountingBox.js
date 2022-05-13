import { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const CountingBox = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(
    ref,
    () => {
      return { count: text.split(' ').length };
    },
    [text]
  );

  return (
    <>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState,useRef,useImperativeHandle,forwardRef} from 'react';

const CountingBox = forwardRef((props, ref) => {

    const [text,setText] = useState('');

    useImperativeHandle(ref, () => {
        return {count: text.split(" ").length}
    },[text]);

    return (
    <>
      <textarea value={text} onChange={(e)=>setText(e.target.value)} />
    </>);
});

function TextEdit(props){

    const countingBoxRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    const handleClick = (count) => {
      setWordCount(count)
    }

    return (
        <>
          <CountingBox ref={countingBoxRef} /><br />
          <button onClick={()=>handleClick(countingBoxRef.current.count)}>count words</button><br />
          current count: {wordCount}<br />
        </>
    )
}

export default TextEdit;
`}
      </SyntaxHighlighter>
    </>
  );
});

function TextEdit(props) {
  const countingBoxRef = useRef();
  const [wordCount, setWordCount] = useState(0);

  const handleClick = (count) => {
    setWordCount(count);
  };

  return (
    <>
      <CountingBox ref={countingBoxRef} />
      <br />
      <button onClick={() => handleClick(countingBoxRef.current.count)}>
        count words
      </button>
      <br />
      current count: {wordCount}
      <br />
    </>
  );
}

export default TextEdit;
