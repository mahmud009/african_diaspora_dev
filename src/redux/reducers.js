import global from "./state";

function transformSurface({ fields, names }) {
  fields.map((field) => {
    for (let name of names) {
      if (field.name === name) field.active = true;
    }
  });
}
global.transformMap = function (properties) {
  let { map } = this;
  Object.assign(map, properties);
};

const mainReducer = (state = global, action) => {
  let { locations, popups, funfacts } = state;

  switch (action.type) {
    case "ACTIVATE_SLIDES":
      state.transformMap(state.slides[1].map);
      transformSurface({ fields: locations, names: state.slides[1].locations });
      transformSurface({ fields: popups, names: state.slides[1].popups });
      transformSurface({ fields: funfacts, names: state.slides[1].funfacts });
      return { ...state };
    default:
      return { ...state };
  }
};

export default mainReducer;
