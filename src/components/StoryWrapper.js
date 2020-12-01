import Intro from "./Intro";
import Slide from "./Slide";
import React, { Component } from "react";
import { connect } from "react-redux";
import { MdPlayArrow } from "react-icons/md";

function mapStateToProps(state) {
  return {
    state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    storyActivePrevious: (id) =>
      dispatch({ type: "STORY_ACTIVE_PREV", payload: id }),
    storyActiveNext: (id) =>
      dispatch({ type: "STORY_ACTIVE_NEXT", payload: id }),
    storyMapUpdate: (mapData) =>
      dispatch({ type: "STORY_MAP_UPDATE", payload: mapData }),
  };
}

class StoryWrapper extends Component {
  state = {};

  togglePrevious = (id, mapData) => {
    this.props.storyActivePrevious(id);
    this.props.storyMapUpdate(mapData);
  };
  toggleNext = (id, mapData) => {
    this.props.storyActiveNext(id);
    this.props.storyMapUpdate(mapData);
  };

  renderStories = () => {
    let activeTourId = this.props.state.app.activeTourId;
    let activeStoryId = this.props.state.app.activeStoryId;
    let [activeTour] = this.props.state.tours.filter(
      (tour) => tour.id === activeTourId
    );
    let lastId = activeTour.story.slides[activeTour.story.slides.length - 1].id;
    let [activeStory] = activeTour
      ? activeTour.story.slides.filter((s) => s.id === activeStoryId)
      : "";
    let [nextStory] = activeTour
      ? activeTour.story.slides.filter((s) => s.id === activeStoryId + 1)
      : "";
    let [prevStory] = activeTour
      ? activeTour.story.slides.filter((s) => s.id === activeStoryId - 1)
      : "";
    let prevMapData = {
      activeRegion: prevStory ? prevStory.activeRegion : "",
      mapPosition: prevStory ? prevStory.mapPosition : "",
    };

    let nextMapData = {
      activeRegion: nextStory ? nextStory.activeRegion : "",
      mapPosition: nextStory ? nextStory.mapPosition : "",
    };

    if (activeStory.type === "introduction") {
      return (
        <div className="story-intro">
          {activeStory.description}
          {activeStory.id === lastId ? (
            <div
              className="intro-icon-wrap"
              style={{ opacity: 0, pointerEvents: "none" }}
              onClick={() => {
                this.toggleNext(activeStory.id, nextMapData);
              }}
            >
              Go <MdPlayArrow />
            </div>
          ) : (
            <div
              className="intro-icon-wrap"
              onClick={() => {
                this.toggleNext(activeStory.id, nextMapData);
              }}
            >
              Go <MdPlayArrow />
            </div>
          )}
        </div>
      );
    } else if (activeStory.type === "story") {
      return (
        <div className="story-slide">
          <img src={activeStory.image} />
          {activeStory.description}

          <div className="slide-btn-wrap">
            {activeStory.page <= 1 ? (
              <div
                className="slide-btn-prev"
                style={{ opacity: 0, pointerEvents: "none" }}
                onClick={() => this.togglePrevious(activeStory.id, prevMapData)}
              >
                <MdPlayArrow />
                Previous
              </div>
            ) : (
              <div
                className="slide-btn-prev"
                onClick={() => this.togglePrevious(activeStory.id, prevMapData)}
              >
                <MdPlayArrow />
                Previous
              </div>
            )}

            <div className="slide-pagination">{activeStory.page} of 6</div>

            <div
              className="slide-btn-next"
              onClick={() => this.toggleNext(activeStory.id, nextMapData)}
            >
              Next
              <MdPlayArrow />
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return this.renderStories();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryWrapper);
