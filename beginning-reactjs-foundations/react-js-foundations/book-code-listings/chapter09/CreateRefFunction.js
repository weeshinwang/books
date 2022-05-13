import { useRef } from "react";

function TextReader(props) {
  const textView = useRef(null);

  return (
    <>
      <textarea ref={textView} value={props.bookText} />
      
    </>
  );
}

export default TextReader;
