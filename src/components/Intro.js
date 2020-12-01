import React, { Component } from "react";
import { MdPlayArrow } from "react-icons/md";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div className="story-intro">
        <p>
          On this tour, you will explore the historical events of the slave
          trade in Nigeria.\n\n\nYou will explore tales of how the colonialists
          invaded Africa, and led its people into the diaspora.
        </p>
        <div className="intro-icon-wrap">
          Go <MdPlayArrow />
        </div>
      </div>
    );
  }
}

export default Intro;
