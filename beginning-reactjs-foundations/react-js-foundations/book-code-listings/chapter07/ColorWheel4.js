import { Component } from "react";

class ColorWheel extends Component {
  state = { currentColor: "#ff0000" };

  changeColor = (e) => {
    this.setState({ currentColor: e.target.value });
  };

  render() {
    const wheelStyle = {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      backgroundColor: this.state.currentColor,
    };

    return (
      <>
        <div style={wheelStyle}></div>
        <input onChange={this.changeColor} value={this.state.currentColor} />
        
      </>
    );
  }
}

export default ColorWheel;
