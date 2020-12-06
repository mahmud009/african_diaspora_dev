import MapButton from "../components/MapButton";
import global from "./state";

function transformSurface({ fields, names, ignore }) {
  if (names === "all") {
    fields.map((field) => {
      field.active = true;
      if (ignore) {
        for (let area of ignore) {
          if (area === field.name) {
            field.active = false;
          }
        }
      }
    });
  } else {
    fields.map((field) => {
      for (let name of names) {
        if (field.name === name) field.active = true;
      }
    });
  }
}
global.transformMap = function (properties) {
  let { map } = this;
  Object.assign(map, properties);
};

function activateAllSurface({ locations, popups, funfacts }) {
  locations.map((location) => (location.active = true));
  popups.map((popup) => (popup.active = true));
  funfacts.map((fact) => (fact.active = true));
}

function deactivateAllSurface({ locations, popups, funfacts }) {
  locations.map((location) => (location.active = false));
  locations.map((location) => (location.clickable = false));
  popups.map((popup) => (popup.active = false));
  funfacts.map((fact) => (fact.active = false));
}

function resetMap(map) {
  map.darkness = 0.8;
  map.zoomLevel = 1;
  map.blurLevel = 4;
  map.position.x = -420;
  map.position.y = -150;
  map.freezed = true;
}

const mainReducer = (state = global, action) => {
  let {
    locations,
    popups,
    funfacts,
    tourstart,
    menu,
    map,
    slides,
    mapbutton,
  } = state;

  switch (action.type) {
    case "ACTIVATE_TOUR_START":
      menu.active = false;
      tourstart.map((tour) => {
        if (tour.name === action.payload) {
          tour.active = true;
        }
      });
      return { ...state };
    case "ACTIVATE_SLIDES":
      tourstart.map((item) => (item.active = false));
      slides[0].active = true;
      return { ...state };
    case "CHANGE_SLIDE":
      let currentIndex = slides.indexOf(slides.find((slide) => slide.active));
      slides.map((slide, index) => {
        slide.active = false;
        let nextIndex = currentIndex + 1;
        let prevIndex = currentIndex - 1;
        if (action.payload === "next" && nextIndex === index) {
          slide.active = true;
        }
        if (action.payload === "prev" && prevIndex === index) {
          slide.active = true;
        }
      });

    case "ENABLE_ACTIVE_SLIDE":
      deactivateAllSurface({ locations, popups, funfacts });
      let activeSlide = slides.find((slide) => slide.active);
      if (activeSlide) {
        state.transformMap(activeSlide.map);
        transformSurface({
          fields: locations,
          names: activeSlide.locations,
          ignore: activeSlide.ignoreLocation,
        });
        transformSurface({ fields: popups, names: activeSlide.popups });
        transformSurface({ fields: funfacts, names: activeSlide.funfacts });
        Object.assign(mapbutton, activeSlide.mapbutton);
        if (activeSlide.type === "stop") {
          let activeLocations = activeSlide.locations;
          locations.map((location) => {
            for (let area of activeLocations) {
              if (location.name === area) {
                location.clickable = true;
              }
            }
          });
        }
      }

      return { ...state };
    case "CLOSE_POPUP":
      const popup = state.popup;
      popup.active = false;
      return { ...state };
    case "TRIGGER_FUN_POPUP":
      const funpopup = state.popup;
      funpopup.type = "fun";
      funpopup.description = action.payload;
      funpopup.active = true;
      return { ...state };
    case "TRIGGER_BLACK_POPUP":
      const blackpopup = state.popup;
      blackpopup.type = "black";
      blackpopup.description = action.payload;
      blackpopup.active = true;
      return { ...state };
    default:
      return { ...state };
  }
};

export default mainReducer;
