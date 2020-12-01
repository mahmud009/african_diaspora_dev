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
    deactiveMenu: () => dispatch({ type: "DEACTIVE_MENU" }),
    activateTour: (id) => dispatch({ type: "ACTIVATE_TOUR", payload: id }),
    updateTourId: (id) => dispatch({ type: "UPDATE_ACTIVE_TOUR", payload: id }),
  };
}

class Menu extends Component {
  renderMenuItems = (items) => {
    return items.map((item, index) => {
      return (
        <li key={index + 1}>
          <button
            className={item.available ? "available" : ""}
            onClick={() => {
              if (item.available) {
                this.props.deactiveMenu();
                this.props.activateTour(item.tourId);
                this.props.updateTourId(item.tourId);
              }
            }}
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

  renderMenu = () => {
    const menu = this.props.state.menu;
    if (menu.isActive) {
      return (
        <div className="ad-menu">
          <div className="ad-menu-wrapper" ref={this.menuWrapper}>
            <Scrollbars>
              <ul>{this.renderMenuItems(menu.items)}</ul>
            </Scrollbars>
          </div>
        </div>
      );
    } else {
      return <TourStart />;
    }
  };

  render() {
    return this.renderMenu();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
