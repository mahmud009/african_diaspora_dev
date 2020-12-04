import React, { Component, createRef } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import TourStart from "./TourStart";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    activateTourStart: (name) =>
      dispatch({ type: "ACTIVATE_TOUR_START", payload: name }),
  };
}

const Menu = (props) => {
  const active = props.state.menu.active;
  const items = props.state.menu.items;

  const activateTourStart = (name) => {
    props.activateTourStart(name);
  };

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <li key={index + 1}>
          <button
            className={item.available ? "available" : ""}
            onClick={() => activateTourStart(item.target)}
          >
            <span className="ad-tour-name">{item.name}</span>
            {item.available ? (
              ""
            ) : (
              <span className="ad-tour-status">(Not yet available)</span>
            )}
          </button>
        </li>
      );
    });
  };

  if (active) {
    return (
      <div className="ad-menu">
        <div className="ad-menu-wrapper">
          <Scrollbars>
            <ul>{renderItems()}</ul>
          </Scrollbars>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
