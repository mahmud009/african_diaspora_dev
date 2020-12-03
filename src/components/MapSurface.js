import React from "react";
import { connect } from "react-redux";
import FunfactIcon from "../img/funfact-icon.png";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const MapSurface = (props) => {
  const locations = props.state.locations;
  const popups = props.state.popups;
  const funfacts = props.state.funfacts;
  const map = props.state.map;

  const renderLocations = () => {
    return locations.map((location, index) => {
      // Creating some inline styles to change dynamically according to state
      let position = {
        left: location.coords.x,
        top: location.coords.y,
      };

      let audio = new Audio(location.sound);
      function playSound() {
        audio.play();
      }
      function stopSound() {
        audio.pause();
        audio.currentTime = 0;
      }

      if (location.active) {
        return (
          <div
            key={index + 1}
            className={`map-location ${location.active ? "active" : ""}`}
            style={position}
            onMouseOver={() => playSound()}
            onMouseLeave={() => stopSound()}
          >
            <img src={location.image} alt={location.name} />
          </div>
        );
      } else {
        return;
      }
    });
  };

  const renderPopups = () => {
    return popups.map((popup, index) => {
      // Creating some inline styles to change dynamically according to state
      let position = {
        left: popup.coords.x,
        top: popup.coords.y,
      };

      if (popup.active) {
        return (
          <div
            className={`map-popup ${popup.isVisible ? "active" : ""}`}
            style={position}
            key={index + 1}
          >
            <div className="popup-ripple"></div>
            <div className="popup-pointer"></div>
          </div>
        );
      } else {
        return;
      }
    });
  };

  const renderFunfacts = () => {
    // Creating some inline styles to change dynamically according to state
    return funfacts.map((fact, index) => {
      const position = {
        left: fact.coords.x,
        top: fact.coords.y,
      };
      if (fact.active) {
        return (
          <div className="map-funfact" style={position} key={index + 1}>
            <img src={FunfactIcon} alt="funfact" />
          </div>
        );
      } else {
        return;
      }
    });
  };

  // Creating some inline styles to change dynamically according to state
  const locationBg = {
    width: `${map.dimension.x}px`,
    height: `${map.dimension.y}px`,
    backgroundColor: `rgba(0,0,0, ${map.darkness})`,
  };

  return (
    <div className="ad-map-surface" style={locationBg}>
      {renderLocations()}
      {renderPopups()}
      {renderFunfacts()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MapSurface);
