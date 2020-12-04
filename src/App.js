import { useEffect } from "react";
import Map from "./components/Map";
import Menu from "./components/Menu";
import { connect } from "react-redux";
import TourStart from "./components/TourStart";
import Slides from "./components/Slides";

function mapStateToProps(state) {
  return {
    state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    activateSlides: () => dispatch({ type: "ACTIVATE_SLIDES" }),
  };
}

function App(props) {
  const handleStart = () => {
    props.activateSlides();
  };

  return (
    <div className="ad-main">
      <Menu />
      <TourStart />
      <Map />
      <Slides />

      {/* {props.state.app.activeStoryId > 0 ? <StoryWrapper /> : ""} */}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
