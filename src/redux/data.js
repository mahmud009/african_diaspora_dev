// Importing nigeria slide story images
import ImageNigeria1 from "../img/slide-nigeria/slide-nigeria-1.png";
import ImageNigeria2 from "../img/slide-nigeria/slide-nigeria-2.png";
import ImageNigeria3 from "../img/slide-nigeria/slide-nigeria-3.png";
import ImageNigeria4 from "../img/slide-nigeria/slide-nigeria-4.png";
import ImageNigeria5 from "../img/slide-nigeria/slide-nigeria-5.png";
import ImageNigeria6 from "../img/slide-nigeria/slide-nigeria-6.png";

// Importing south america story images
import ImageSouthamerica1 from "../img/slide-southamerica/slide-southamerica-1.png";
import ImageSouthamerica2 from "../img/slide-southamerica/slide-southamerica-2.png";
import ImageSouthamerica3 from "../img/slide-southamerica/slide-southamerica-3.png";
import ImageSouthamerica4 from "../img/slide-southamerica/slide-southamerica-4.png";
import ImageSouthamerica5 from "../img/slide-southamerica/slide-southamerica-5.png";

export const tourDescription = [
  {
    name: "westafrica",
    title: "The West African Slave Trade",
    description: (
      <p className="tour-start-desc">
        The West African slave trade formed one of the most pivotal experiences
        in Africa's history. With the scramble and partition of Africa by the
        Portuguese and other European superpowers in the early 15th century,
        this commenced a dark period of slave trade in the history of West
        Africa.
        <br />
        <br />
        After discovery the coast of West Africa in one of its voyages,
        Portuguese soldiers started to capture Africans and hold them as slaves
        from the coast. Due to its proximity to the water, it was easy for the
        Portuguese to capture Africans and easily ship them to their home
        country.
        <br />
        <br />
        On this journey, we will take you through an in-depth interactive
        experience on the history of slave trade in West Africa, and you will
        attempt to experience some of the harsh realities that have left many
        Africans in the diaspora.
      </p>
    ),
  },
];

export const nigeriaSlides = [
  {
    type: "intro",
    active: false,
    description: (
      <p>
        On this tour, you will explore the historical events of the slave trade
        in Nigeria.
        <br />
        <br />
        You will explore tales of how the colonialists invaded Africa, and led
        its people into the diaspora.
      </p>
    ),
    map: {
      darkness: 0.8,
      zoomLevel: 1.6,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        The West African territory now known as Nigeria was first discovered in
        1472 by researchers from Portugal who were seeking a sea route to Asia.
        <br />
        <br />
        Their names were Joao de Santarem, Lopo Goncalves, Pero Escobar and
        Fernao do Po.
        <br />
        <br />
        The Portuguese were shocked to see established civilizations that
        rivalled those in Europe.
      </p>
    ),
    image: ImageNigeria1,
    map: {
      darkness: 0.8,
      zoomLevel: 1.5,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        An interesting fact is that the name 'Nigeria' was not given to the
        Nigerians themselves. However, by the European colonizers.
        <br />
        <br />
        Prior to this, the four main kingdoms that made up the country were
        Borno, Hausa in the north, Benin and Oyo in the south.
        <br />
        <br />
        Each had its own unique and artistic identity.
      </p>
    ),
    image: ImageNigeria2,
    map: {
      darkness: 0.8,
      zoomLevel: 1.4,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        Mainly driven by the goal of finding a suitable trade route with Asia,
        the Portuguese sailors actually discovered Nigeria by mistake.
        <br />
        <br />
        <br />
        The Portuguese wanted a shipping route that would make more economic
        sense and would be more cost-effective. However, when they arrived, they
        discovered that the land was very similar to theirs.
      </p>
    ),
    image: ImageNigeria3,
    map: {
      darkness: 0.8,
      zoomLevel: 1.3,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        As at 1471, Portuguese ships had ventured into the Niger Delta, although
        they did not know what it was at the time, they quickly encountered the
        Benin Kingdom, and were shocked at the opulence and level of wealth the
        land displayed.
        <br />
        <br />
        In 1481, emissaries from the King of Portugal visited the court of the
        Oba of Benin. This sparked the beginning of a long relationship between
        the Portuguese and people from Benin.
      </p>
    ),
    image: ImageNigeria4,
    map: {
      darkness: 0.8,
      zoomLevel: 1.2,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        The people of Benin welcomed the Portuguese with open arms, but that
        would become the downfall of the people.
        <br />
        <br />
        They maintained a good relationship, and the Portuguese even received
        payments for joining the people of Benin in wars. At a point, Portuguese
        even came to be spoken at the palace of the Oba of Benin.
        <br />
        <br />
        Gwatto, the port of Benin, became the depot for handling peppers, ivory
        and increasing numbers of slaves offered by the Oba in exchange for
        beads, textiles, tools and weapons.
      </p>
    ),
    image: ImageNigeria5,
    map: {
      darkness: 0.8,
      zoomLevel: 1.1,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        Despite the flourishing trade relationship, one state in the Benin
        Kingdom, 'Edo', was reluctant to be a part of the transatlantic slave
        trade. The Edo people believed that selling their brothers would have
        consequences on their land.
        <br />
        <br />
        The Portuguese took what they could get, and began to trade slaves on
        the Gold Coast. The port of Benin and the Gold Coast of Benin became
        famous for its trade in slaves, and this marked start of the movement of
        West Africans into the diaspora. This activity led to majority of Black
        people being disenfranchised and unware of their origins.
      </p>
    ),
    image: ImageNigeria6,
    map: {
      darkness: 0.8,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
];

export const southamericaSlides = [
  {
    type: "stop",
    active: false,
    title: "1ST STOP",
    description: (
      <p>
        <span className="highlighted"> Transatlantic slave trade,</span> segment
        of the global slave trade that transported between 10 million and 12
        million enslaved Africans across the Atlantic Ocean to the Americas from
        the 16th to the 19th aka the african diaspora.
        <br />
        <br />
        The Triangular Trade routes covered Europe, Africa, the Americas and the
        West Indies. Our first stop on this african diaspora tour is{" "}
        <span className="highlighted">
          {" "}
          South America. Click on the map of South America.
        </span>
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 0.8,
      freezed: true,
      blurLevel: 4,
      position: { x: -300, y: -250 },
      blinking: true,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica1,
    active: false,
    description: (
      <p>
        The history of Africans in Latin America is multifaceted and complex.
        Not all Africans were slaves, and for those who were, conditions were
        diverse depending on a number of factors, such as economics, politics,
        ecology and demographics.
        <br />
        <br />
        Europeans in Latin America used African labour in every conceivable form
        in every place they settled during the colonial period and beyond.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: -150, y: -350 },
      blinking: false,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica2,
    active: false,
    description: (
      <p>
        Colombia was a major destination for slave ships, with the town of
        Cartagena de Indias one of the most important ports through which which
        enslaved Africans entered Nueva Granada.
        <br />
        <br />
        Cartagena also or intra-Latin American slave trade, where slaves were
        sold on to various destinations in the Andes and beyond.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 0.9,
      freezed: true,
      blurLevel: 4,
      position: { x: -150, y: -350 },
      blinking: false,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica3,
    active: false,
    description: (
      <p>
        Slaves carried out a wide range of tasks. They were squires, muleteers,
        cowboys, blacksmiths, domestic servants, gold miners, pearl divers,
        sugar cane cultivators etc. As in other parts of South America, the
        indigenous population decreased dramatically as a result of the arrival
        of the Spaniards.
        <br />
        <br />
        To compensate for the loss of indigenous labour, African slaves were
        transported in great numbers to certain south american regions.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 0.8,
      freezed: true,
      blurLevel: 4,
      position: { x: -300, y: -280 },
      blinking: false,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica4,
    active: false,
    description: (
      <p>
        In spite of the authorities efforts, slaves continued to rise up, revolt
        and abscond throughout the colonial period and beyond. The vast
        territories were impossible for slave owners and authorities to fully
        monitor. More importantly, perhaps, was the influence of the indigenous
        peoples means of resistance.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 0.9,
      freezed: true,
      blurLevel: 4,
      position: { x: -150, y: -350 },
      blinking: false,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica5,
    active: false,
    description: (
      <p>
        The role of descendants of slaves in the building of the Panama Canal
        was enforced by the French who had previously built a railroad through
        Panama, linking the Atlantic to the Pacific, an undertaking that relied
        heavily on slave labour.
        <br />
        <br />
        However, the French never finished the canal, due to high death toll of
        workers. It is estimated that a total 22 K people died, a large number
        of whom were descendants of Africans.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: -150, y: -350 },
      blinking: false,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },
];
