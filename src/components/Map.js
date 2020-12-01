import React from "react";
import { connect } from "react-redux";
import ScrollContainer from "react-indiana-drag-scroll";
import WorldMap from "../img/world-map.png";
import MapSurface from "./MapSurface";
// import StartBtnMap from "./StartBtnMap";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const Map = (props) => {
  const map = props.state.map;

  const zoomState = {
    transform: `scale(${map.zoomLevel}) translate(${map.position.x}px, ${map.position.y}px)`,
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
            style={zoomState}
          >
            <img
              src={WorldMap}
              style={{ filter: `blur(${map.blurLevel}px)` }}
              id="ad-map-main-img"
              alt="map"
            />
            <MapSurface />
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Map);
