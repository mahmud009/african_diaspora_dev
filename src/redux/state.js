import { tourDescription, nigeriaSlides, southamericaSlides } from "./data";

// Importing location's indivudual images
import Europe from "../img/europe.png";
import Guinea from "../img/guinea.png";
import Usa from "../img/usa.png";
import Nigeria from "../img/nigeria.png";
import Westafrica from "../img/westafrica.png";
import Carribean from "../img/carribean.png";
import Canada from "../img/canada.png";
import Southamerica from "../img/southamerica.png";

// Importing location's sound track
import EuropeSound from "../sounds/europe.mp3";
import WestafricaSound from "../sounds/africa.mp3";
import CanadaSound from "../sounds/canada.mp3";
import CarribeanSound from "../sounds/carribean.mp3";
import SouthamericaSound from "../sounds/southamerica.mp3";
import UsaSound from "../sounds/usa.mp3";

const menu = {
  active: true,
  items: [
    {
      name: "North African Tour",
      target: "northafrica",
      available: false,
    },
    {
      name: "West African Tour",
      target: "westafrica",
      available: true,
    },
    {
      name: "East African Tour",
      target: "eastafrica",
      available: false,
    },
    {
      name: "South African Tour",
      target: "southafrica",
      available: false,
    },
  ],
};

const tourstart = [
  {
    name: "westafrica",
    title: tourDescription.find((tour) => tour.name === "westafrica").title,
    description: tourDescription.find((tour) => tour.name === "westafrica")
      .description,
    active: false,
  },
];

// Map information
const map = {
  dimension: { x: 2500, y: 1355 },
  darkness: 0.8,
  zoomLevel: 1,
  blurLevel: 4,
  position: { x: -420, y: -150 },
  freezed: true,
  isScrolling: true,
  blinking: false,
};

// location structure to create map
const locations = [
  {
    name: "europe",
    coords: { x: 1091, y: 71 },
    image: Europe,
    sound: EuropeSound,
    active: false,
    clickable: false,
  },
  {
    name: "usa",
    coords: { x: 117, y: 162 },
    image: Usa,
    sound: UsaSound,
    active: false,
    clickable: false,
  },

  {
    name: "guinea",
    coords: { x: 1031, y: 542 },
    image: Guinea,
    active: false,
    clickable: false,
  },
  {
    name: "nigeria",
    coords: { x: 1190, y: 530 },
    image: Nigeria,
    active: false,
    clickable: false,
  },
  {
    name: "westafrica",
    coords: { x: 1008, y: 387 },
    image: Westafrica,
    active: false,
    sound: WestafricaSound,
    clickable: false,
  },
  {
    name: "carribean",
    coords: { x: 408, y: 431 },
    image: Carribean,
    sound: CarribeanSound,
    active: false,
    clickable: false,
  },

  {
    name: "canada",
    coords: { x: 149, y: -1 },
    image: Canada,
    sound: CanadaSound,
    active: false,
    clickable: false,
  },
  {
    name: "southamerica",
    coords: { x: 420, y: 542 },
    image: Southamerica,
    sound: SouthamericaSound,
    active: false,
    clickable: false,
  },
];

const popups = [
  {
    name: "canada",
    coords: { x: 460, y: 120 },
    active: false,
  },
  {
    name: "southamerica",
    coords: { x: 600, y: 1000 },
    active: false,
  },
  {
    name: "uk",
    coords: { x: 1150, y: 120 },
    active: false,
  },
  {
    name: "usa",
    coords: { x: 300, y: 300 },
    active: false,
  },
  {
    name: "carribean",
    coords: { x: 440, y: 450 },
    active: false,
  },

  {
    name: "spain",
    coords: { x: 1130, y: 260 },
    active: false,
  },
  {
    name: "portugal",
    coords: { x: 1080, y: 233 },
    active: false,
  },

  {
    name: "france",
    coords: { x: 1190, y: 180 },
    active: false,
  },
  {
    name: "denmark",
    coords: { x: 1240, y: 70 },
    active: false,
  },
  {
    name: "netherland",
    coords: { x: 1210, y: 110 },
    active: false,
  },
];

const funfacts = [
  {
    name: "canada",
    coords: { x: 270, y: 50 },
    active: false,
  },
  {
    name: "usa",
    coords: { x: 230, y: 230 },
    active: false,
  },
  {
    name: "southamerica",
    coords: { x: 740, y: 800 },
    active: false,
  },
  {
    name: "carribean",
    coords: { x: 480, y: 430 },
    active: false,
  },
  {
    name: "europe",
    coords: { x: 1050, y: 200 },
    active: false,
  },
  {
    name: "westafrica",
    coords: { x: 1090, y: 450 },
    active: false,
  },
];

const mapbutton = {
  type: "",
  coords: { x: 0, y: 0 },
  dimension: { x: 0, y: 0 },
  active: false,
  text: "",
};

const slides = [
  {
    type: "init",
    active: false,
    map: { darkness: 0.5, freezed: false, position: { x: 0, y: 0 } },
    locations: "all",
    ignoreLocation: ["nigeria", "guinea"],
    popups: "all",
    funfacts: "all",
    mapbutton: {
      active: true,
      type: "visible",
      coords: { x: 1200, y: 540 },
      text: "Tour West Africa",
    },
  },
  ...nigeriaSlides,
  ...southamericaSlides,
];

const state = {
  map,
  locations,
  popups,
  funfacts,
  slides,
  menu,
  tourstart,
  mapbutton,
};

export default state;
