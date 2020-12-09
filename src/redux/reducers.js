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

function backToMenu(state) {
  function mapToDeactive(object) {
    object.map((property) => {
      if (property.active) {
        property.active = false;
      }
    });
  }

  let mapProperty = {
    dimension: { x: 2500, y: 1355 },
    darkness: 0.8,
    zoomLevel: 1,
    blurLevel: 2,
    position: { x: -360, y: -100 },
    freezed: true,
    isScrolling: true,
    blinking: false,
  };

  mapToDeactive(state.locations);
  mapToDeactive(state.popups);
  mapToDeactive(state.funfacts);
  mapToDeactive(state.slides);
  mapToDeactive(state.tourstart);
  state.popup.active = false;
  state.mapbutton.active = false;
  state.triangle.active = false;
  state.flag.active = false;
  state.tourEnd.active = false;
  Object.assign(state.map, mapProperty);
  state.menu.active = true;
}

function backToTourStart(state) {
  function mapToDeactive(object) {
    object.map((property) => {
      if (property.active) {
        property.active = false;
      }
    });
  }

  let mapProperty = {
    dimension: { x: 2500, y: 1355 },
    darkness: 0.8,
    zoomLevel: 1,
    blurLevel: 2,
    position: { x: -360, y: -100 },
    freezed: true,
    isScrolling: true,
    blinking: false,
  };

  mapToDeactive(state.locations);
  mapToDeactive(state.popups);
  mapToDeactive(state.funfacts);
  mapToDeactive(state.slides);
  mapToDeactive(state.tourstart);
  state.popup.active = false;
  state.mapbutton.active = false;
  Object.assign(state.map, mapProperty);
  state.triangle.active = false;
  state.flag.active = false;
  state.menu.active = false;
  state.tourEnd.active = false;
  state.slides[0].active = true;
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
    triangle,
    flag,
    tourEnd,
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

        if (nextIndex + 1 > slides.length) {
          tourEnd.active = true;
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
        Object.assign(triangle, activeSlide.triangle);
        Object.assign(flag, activeSlide.flag);
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

    case "BACK_TO_MENU":
      backToMenu(state);
      return { ...state };
    case "BACK_TO_TOUR_START":
      backToTourStart(state);
      return { ...state };
    default:
      return { ...state };
  }
};

export default mainReducer;
