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

// Importing slide story images
import SlideGuinea1 from "../img/slide-guinea-1.png";

const menu = [
  {
    name: "North African Tour",
    available: false,
  },
  {
    name: "West African Tour",
    available: true,
  },
  {
    name: "East African Tour",
    available: false,
  },
  {
    name: "South African Tour",
    available: false,
  },
];

// Map information
const map = {
  dimension: { x: 2500, y: 1355 },
  darkness: 0.8,
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
    sound: EuropeSound,
    active: false,
  },
  {
    name: "usa",
    coords: { x: 117, y: 162 },
    image: Usa,
    sound: UsaSound,
    active: false,
  },

  {
    name: "guinea",
    coords: { x: 1031, y: 542 },
    image: Guinea,
    active: false,
  },
  {
    name: "nigeria",
    coords: { x: 1190, y: 530 },
    image: Nigeria,
    active: false,
  },
  {
    name: "westafrica",
    coords: { x: 1008, y: 387 },
    image: Westafrica,
    active: false,
    sound: WestafricaSound,
  },
  {
    name: "carribean",
    coords: { x: 408, y: 431 },
    image: Carribean,
    sound: CarribeanSound,
    active: false,
  },

  {
    name: "canada",
    coords: { x: 149, y: -2 },
    image: Canada,
    sound: CanadaSound,
    active: false,
  },
  {
    name: "southamerica",
    coords: { x: 420, y: 542 },
    image: Southamerica,
    sound: SouthamericaSound,
    active: false,
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

const slides = [
  {
    type: "introduction",
    description: "This is a introduction",
    map: { darkness: 0.6, zoomLevel: 1.6 },
    locations: ["nigeria"],
  },
  {
    type: "story",
    image: SlideGuinea1,
    description: "This is a introduction",
    map: {
      darkness: 0.6,
      zoomLevel: 1.3,
      isScrolling: false,
      position: { x: -350, y: 350 },
    },
    locations: ["europe", "usa"],
    popups: ["spain", "portugal", "france"],
    funfacts: ["westafrica", "europe"],
  },
];

const state = {
  map,
  locations,
  popups,
  funfacts,
  slides,
  menu,
};

export default state;
