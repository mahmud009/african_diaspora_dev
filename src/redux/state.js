import Europe from "../img/europe.png";
import Guinea from "../img/guinea.png";
import Usa from "../img/usa.png";
import Nigeria from "../img/nigeria.png";
import Westafrica from "../img/westafrica.png";
import Cuba from "../img/cuba.png";

// Map information
const map = {
  dimension: { x: 2500, y: 1355 },
  darkness: 0.5,
  zoomLevel: 1,
  blurLevel: 0,
  position: { x: 0, y: 0 },
  freezed: false,
  isScrolling: true,
};

// location structure to create map
const locations = [
  {
    name: "europe",
    coords: { x: 1091, y: 71 },
    image: Europe,
    isVisible: true,
  },
  {
    name: "usa",
    coords: { x: 117, y: 162 },
    image: Usa,
    isVisible: true,
  },

  {
    name: "guinea",
    coords: { x: 1031, y: 542 },
    image: Guinea,
    isVisible: false,
  },
  {
    name: "nigeria",
    coords: { x: 1190, y: 530 },
    image: Nigeria,
    isVisible: false,
  },
  {
    name: "westafrica",
    coords: { x: 1008, y: 387 },
    image: Westafrica,
    isVisible: true,
  },
  {
    name: "carribean",
    coords: { x: 408, y: 431 },
    image: Cuba,
    isVisible: true,
  },
];

const popups = [
  {
    name: "canada",
    coords: { x: 460, y: 120 },
  },
  {
    name: "southamerica",
    coords: { x: 600, y: 1000 },
  },
  {
    name: "uk",
    coords: { x: 1150, y: 120 },
  },
  {
    name: "usa",
    coords: { x: 300, y: 300 },
  },
  {
    name: "carribean",
    coords: { x: 440, y: 450 },
  },

  {
    name: "spain",
    coords: { x: 1130, y: 260 },
  },
  {
    name: "portugal",
    coords: { x: 1080, y: 233 },
  },

  {
    name: "france",
    coords: { x: 1190, y: 180 },
  },
  {
    name: "denmark",
    coords: { x: 1240, y: 70 },
  },
  {
    name: "netherland",
    coords: { x: 1210, y: 110 },
  },
];

const funfacts = [
  {
    name: "canada",
    coords: { x: 270, y: 50 },
  },
  {
    name: "usa",
    coords: { x: 230, y: 230 },
  },
  {
    name: "southamerica",
    coords: { x: 740, y: 800 },
  },
  {
    name: "carribean",
    coords: { x: 480, y: 430 },
  },
  {
    name: "europe",
    coords: { x: 1050, y: 200 },
  },
];

const state = {
  map,
  locations,
  popups,
  funfacts,
};

export default state;
