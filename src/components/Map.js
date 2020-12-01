import React, { Component } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import WorldMap from "../img/world-map.png";
import { connect } from "react-redux";
import StartBtnMap from "./StartBtnMap";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

// Main map component
class Map extends Component {
  // Rendering pins from the pins state
  renderPins = (map) => {
    return map.pins.map((pin, index) => {
      let style = {
        left: pin.coords.x,
        top: pin.coords.y,
      };

      return (
        <div
          key={index + 1}
          className="map-pin"
          style={style}
          id={pin.location}
        >
          <img
            className={pin.active ? "active" : ""}
            src={pin.image}
            alt={pin.location}
          />
          {pin.startBtnDisplayed ? <StartBtnMap /> : ""}
        </div>
      );
    });
  };

  // Main render method
  render() {
    let { map } = this.props.state;
    const pinWrapperStyle = {
      width: `${map.width}px`,
      height: `${map.height}px`,
      backgroundColor: `rgba(0,0,0, ${map.dark})`,
    };
    const mapZoomState = {
      transform: `scale(${map.zoomLevel}) translate(${map.mapPosition.x}px, ${map.mapPosition.y}px)`,
    };
    return (
      <div className="ad-map-wrapper">
        <div className="ad-map-img-wrapper">
          <ScrollContainer
            className="map-scroll-container"
            hideScrollbars={true}
            vertical={true}
            horizontal={true}
            ignoreElements={map.freezed ? ".ad-map-img" : ""}
          >
            <div
              className={
                map.isScrolling ? `ad-map-img` : `ad-map-img scroll-active`
              }
              style={mapZoomState}
            >
              <img
                src={WorldMap}
                style={{ filter: `blur(${map.blur}px)` }}
                id="ad-map-main-img"
                alt="map"
              />

              <div className="ad-map-pin-wrapper" style={pinWrapperStyle}>
                {this.renderPins(map)}
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
