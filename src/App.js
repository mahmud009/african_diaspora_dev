import Map from "./components/Map";
import Menu from "./components/Menu";
import { connect } from "react-redux";
import StoryWrapper from "./components/StoryWrapper";

function mapStateToProps(state) {
  return {
    state,
  };
}

function App(props) {
  return (
    <div className="ad-main">
      <Map />
      <Menu />
      {props.state.app.activeStoryId > 0 ? <StoryWrapper /> : ""}
    </div>
  );
}

export default connect(mapStateToProps)(App);
