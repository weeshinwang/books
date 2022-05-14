import React, { Component } from 'react';
import BestSong from '../music/thebestsongever.mp3';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.mediaFile = React.createRef();
    this.playToggle = this.playToggle.bind(this);
  }

  playToggle() {
    if (this.mediaFile.current.paused) {
      this.mediaFile.current.play();
    } else {
      this.mediaFile.current.pause();
    }
  }

  render() {
    return (
      <>
        <audio ref={this.mediaFile}>
          <source src={BestSong} type='audio/mpeg' />
        </audio>
        <br />
        <button onClick={this.playToggle}>Play/Pause</button>
      </>
    );
  }
}

export default AudioPlayer;
