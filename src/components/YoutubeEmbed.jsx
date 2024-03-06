import React from "react";
import YouTube from 'react-youtube';
import PropTypes from "prop-types";


class YoutubeEmbed extends React.Component {
  render() {
    const options = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return <YouTube videoId="_uUcMwsR5hg?si=mFLSbCX4C5J4qvzG" options={options} onReady={this._onReady} id="video"/>;
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default YoutubeEmbed;