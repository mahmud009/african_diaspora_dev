import React, { Component, createRef } from "react";
import TourStartImage from "../img/tour-start.png";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deactiveView: (id) => dispatch({ type: "DEACTIVE_VIEW", payload: id }),
    activateBegin: (id) => dispatch({ type: "ACTIVATE_BEGIN", payload: id }),
    storyMapUpdate: (mapData) =>
      dispatch({ type: "STORY_MAP_UPDATE", payload: mapData }),
  };
}

class TourStart extends Component {
  constructor() {
    super();
    this.panel = createRef();
    this.state = {
      isHide: false,
    };
  }

  startTour = (id) => {
    this.setState({ isHide: true });
    this.props.activateBegin(id);

    // let mapData = {
    //   activeRegion: this.props.state.tours[0].story.slides[0].activeRegion,
    //   mapPosition: this.props.state.tours[0].story.slides[0].mapPosition,
    // };
    // this.props.storyMapUpdate(mapData);
  };
  render() {
    const activeTour = this.props.state.tours.filter(
      (tour) => tour.isActive === true
    )[0];
    return (
      <div
        className={this.state.isHide ? "ad-tour-start hide" : "ad-tour-start"}
        ref={this.panel}
      >
        <div className="ad-tour-img-wrap">
          <img src={TourStartImage} alt="tour start" />
        </div>
        <div className="ad-tour-start-content">
          <h1 className="tour-start-title">{activeTour.title}</h1>
          {activeTour.description}
          <button
            className="tour-start-btn"
            onClick={() => this.startTour(activeTour.id)}
          >
            Start Tour
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourStart);
