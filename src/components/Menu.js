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
  return {};
}

const Menu = (props) => {
  const items = props.state.menu;
  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <li key={index + 1}>
          <button className={item.available ? "available" : ""}>
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

  return (
    <div className="ad-menu">
      <div className="ad-menu-wrapper">
        <Scrollbars>
          <ul>{renderItems()}</ul>
        </Scrollbars>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
