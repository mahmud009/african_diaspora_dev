import React, { Component } from "react";
import SlideNigeria1 from "../img/slide-nigeria-1.png";
import { MdPlayArrow } from "react-icons/md";

class Slide extends Component {
  state = {};
  render() {
    return (
      <div className="story-slide">
        <img src={SlideNigeria1} />
        <p>
          An interesting fact is that the name 'Nigeria' was not given to the
          Nigerians themselves. However, by the European colonizers.\n\n Prior
          to this, the four main kingdoms that made up the country were Borno,
          Hausa in the north, Benin and Oyo in the south.\n\nEach had its own
          unique and artistic identity.
        </p>

        <div className="slide-btn-wrap">
          <div className="slide-btn-prev">
            <MdPlayArrow />
            Previous
          </div>

          <div className="slide-pagination">1 of 6</div>

          <div className="slide-btn-next">
            Next
            <MdPlayArrow />
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
