import React, { Component } from "react";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mainStoryBegin: () => dispatch({ type: "MAIN_STORY_BEGIN" }),
    mainStoryBeginTour: (id) =>
      dispatch({ type: "MAIN_STORY_BEGIN_TOUR", payload: id }),
    storyMapUpdate: (mapData) =>
      dispatch({ type: "STORY_MAP_UPDATE", payload: mapData }),
  };
}

class StartBtnMap extends Component {
  mainStoryStart = () => {
    let id = this.props.state.app.activeTourId;
    let mapData = {
      activeRegion: this.props.state.tours[0].story.slides[0].activeRegion,
      mapPosition: this.props.state.tours[0].story.slides[0].mapPosition,
    };
    this.props.storyMapUpdate(mapData);
    this.props.mainStoryBegin();
    this.props.mainStoryBeginTour(id);
    this.props.storyMapUpdate(mapData);
  };
  render() {
    const activeTour = this.props.state.tours.filter(
      (tour) => tour.isActive == true
    )[0];

    return (
      <button className="tour-begin-btn" onClick={() => this.mainStoryStart()}>
        Tour {activeTour.story.displayName}
      </button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartBtnMap);
