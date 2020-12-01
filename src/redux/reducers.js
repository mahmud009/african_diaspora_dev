import { combineReducers } from "redux";
import global from "./globalstate";

// creating reducer
const mapReducer = (state = global.map, action) => {
  switch (action.type) {
    case "ACTIVATE_BEGIN":
      let activePin = state.pins.filter(
        (pin) => pin.tourId === action.payload
      )[0];
      state.freezed = false;
      state.mapPosition = { x: 0, y: 0 };
      activePin.active = true;
      activePin.startBtnDisplayed = true;
      state.pins[3].active = true;
      state.pins[4].active = true;
      state.pins[5].active = true;
      return { ...state };

    case "MAIN_STORY_BEGIN":
      state.pins[0].active = false;
      state.pins[0].startBtnDisplayed = false;
      state.pins[3].active = false;
      state.pins[4].active = false;
      state.pins[5].active = false;
      return { ...state };
    case "ZOOM_IN":
      state.zoomLevel += 0.3;
      return { ...state };
    case "ZOOM_OUT":
      state.zoomLevel -= 0.3;
      return { ...state };
    case "IS_SCROLLING":
      state.isScrolling = !state.isScrolling;
    case "STORY_MAP_UPDATE":
      let mapData = action.payload;
      let allPins = state.pins;
      allPins.map((m) => {
        m.active = false;
      });
      for (let region of mapData.activeRegion) {
        for (let pin of allPins) {
          if (pin.location === region) {
            pin.active = true;
          }
        }
      }
      state.mapPosition = mapData.mapPosition;
      state.blur = 4;
      return { ...state };
    default:
      return { ...state };
  }
};

const menuReducer = (state = global.menu, action) => {
  switch (action.type) {
    case "DEACTIVE_MENU":
      state.isActive = false;
      return { ...state };
    default:
      return { ...state };
  }
};

const tourReducer = (state = global.tours, action) => {
  switch (action.type) {
    case "ACTIVATE_TOUR":
      let activeTour = state.filter((tour) => tour.id === action.payload);
      activeTour[0].isActive = true;
      return [...state];
    case "MAIN_STORY_BEGIN_TOUR":
      let stories = state.filter((tour) => tour.id === action.payload)[0].story
        .slides;

      stories[0].active = true;
      return [...state];
    case "DEACTIVE_VIEW":
      let tour = state.filter((tour) => tour.id === action.payload);
      tour[0].isActive = false;
      return [...state];
    case "STORY_ACTIVE_PREV":
      let allStories = state[0].story.slides;
      let [active] = allStories.filter((story) => story.id === action.payload);
      let index = allStories.indexOf(active);
      let prevIndex = index - 1;
      active.active = false;
      allStories[prevIndex].active = true;
      return [...state];
    case "STORY_ACTIVE_NEXT":
      let allStories2 = state[0].story.slides;
      let [active2] = allStories2.filter(
        (story) => story.id === action.payload
      );
      let index2 = allStories2.indexOf(active2);
      let nextIndex = index2 + 1;
      active2.active = false;
      allStories2[nextIndex].active = true;
      return [...state];
    default:
      return [...state];
  }
};

const appReducer = (state = global.app, action) => {
  switch (action.type) {
    case "UPDATE_ACTIVE_TOUR":
      state.activeTourId = action.payload;
      return { ...state };
    case "MAIN_STORY_BEGIN_TOUR":
      state.activeStoryId = 1;
      return { ...state };
    case "UPDATE_ACTIVE_STORY":
      state.activeStoryId = action.payload;
      return { ...state };
    case "STORY_ACTIVE_PREV":
      state.activeStoryId = action.payload - 1;
      return { ...state };
    case "STORY_ACTIVE_NEXT":
      state.activeStoryId = action.payload + 1;
      return { ...state };
    default:
      return { ...state };
  }
};

const allReducer = combineReducers({
  map: mapReducer,
  menu: menuReducer,
  tours: tourReducer,
  app: appReducer,
});

export default allReducer;
