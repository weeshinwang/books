function WarningMessage(props) {
  return (
    <>
      <p style={{ color: "red", padding: "6px", backgroundColor: "#000000" }}>
        {props.warningMessage}
      </p>
      
    </>
  );
}

export default WarningMessage;
