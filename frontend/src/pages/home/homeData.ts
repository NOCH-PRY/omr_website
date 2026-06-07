import svgPaths from "../../assets/svgPaths";

import imgFrame905 from "../../assets/Food/Breakfast/pork-blood-porridge.png";
import imgFrame906 from "../../assets/Food/Breakfast/khmer-noodle-soup.png";
import imgFrame907 from "../../assets/Food/Breakfast/pork-bone-soup.png";
import imgFrame908 from "../../assets/Food/Breakfast/pork-rice.png";

import imgFrame904 from "../../assets/Food/Lunch and Dinner/fish-amok-coconut.png";
import imgFrame903 from "../../assets/Food/Lunch and Dinner/britian-loklak.png";
import imgFrame902 from "../../assets/Food/Lunch and Dinner/curry-lobster.png";
import imgFrame901 from "../../assets/Food/Lunch and Dinner/samlor-korko-catfish.png";

import imgFrame42847 from "../../assets/1382982e510b269b331ab664ebed0c6f1fdffd58.png";
import imgFrame42848 from "../../assets/0bf56424fd443f823cf6e6d40a85c12bbd63e53e.png";
import imgFrame42849 from "../../assets/6b62a1c39d232224d0fe8322561dd262531a43d5.png";
import imgFrame42850 from "../../assets/7f10c112b819fbdd9a31f8cf2b96961edc6e5f76.png";

import imgEllipse5 from "../../assets/1743dc3434c2a7d6758fdcbc45ff231e0ea7fa0a.png";
import imgEllipse6 from "../../assets/6bd4eba8f4bd2d16b0333d061e671ce7be9fb7fe.png";
import imgEllipse7 from "../../assets/fecd21b10e26be937df7d137f5ee133ee3bf4f8d.png";

import imgNvcLogo from "../../assets/09c4ff5b4e527c2f90eea67dc79ee6a47fb5294b.png";
import imgRectangle46 from "../../assets/a0e7a89e07d599a37faf03d0bfb75d8beb7bda61.png";
import imgRectangle47 from "../../assets/782a2ace6ffe872ae1f0e58607aa4758f93186da.png";
import imgRectangle from "../../assets/b4dd6effdcbf9d2981240e128cf4d9269777a55c.png";
import imgRectangle49 from "../../assets/94e76c146c68f49691e716d94f602c46371d95d5.png";
import imgRectangle50 from "../../assets/a8ff8dce3655231aa504ab5441899319bcd9bf3a.png";

export const menuData = {
  breakfast: [
    {
      img: imgFrame905,
      name: "Pork Blood Porridge",
      desc: "A beloved traditional morning dish, slow-cooked with tender pork and aromatic spices.",
      price: "$2.00",
    },
    {
      img: imgFrame908,
      name: "Bai Sach Chrouk",
      desc: "Sweet marinated sliced pork grilled over charcoal, served with broken rice, pickled cucumber and daikon.",
      price: "$2.50",
    },
    {
      img: imgFrame907,
      name: "Kuy Teav (Noodle Soup)",
      desc: "A fragrant rice noodle soup with savory pork broth, minced pork, and fresh herbs.",
      price: "$3.00",
    },
    {
      img: imgFrame906,
      name: "Num Banh Chok",
      desc: "Traditional Cambodian rice noodles topped with a rich green fish gravy and fresh garden herbs.",
      price: "$2.50",
    },
  ],

  lunch: [
    {
      img: imgFrame904,
      name: "Fish Amok",
      desc: "Cambodia's national dish — steamed fish in a rich, savory coconut curry paste wrapped in banana leaf.",
      price: "$8.00",
    },
    {
      img: imgFrame903,
      name: "Beef Lok Lak",
      desc: "Wok-tossed tender beef in a savory brown sauce, served with a lime-pepper dipping sauce.",
      price: "$9.00",
    },
    {
      img: imgFrame902,
      name: "Khmer Lobster Curry",
      desc: "A mild, sweet red curry made with coconut milk, lemongrass, sweet potatoes, and tender Lobster.",
      price: "$7.50",
    },
    {
      img: imgFrame901,
      name: "Somlor Kako",
      desc: "A highly nutritious traditional Khmer soup packed with diverse green vegetables and toasted ground rice.",
      price: "$6.50",
    },
  ],

  dinner: [
    {
      img: imgFrame906,
      name: "Khmer BBQ Platter",
      desc: "Grilled marinated pork ribs, beef skewers, and local vegetables served with authentic dipping sauces.",
      price: "$12.00",
    },
    {
      img: imgFrame907,
      name: "Kampot Pepper Crab",
      desc: "Fresh blue crab stir-fried with fragrant green Kampot peppercorns, garlic, and sweet soy sauce.",
      price: "$15.00",
    },
    {
      img: imgFrame905,
      name: "Grilled River Prawns",
      desc: "Large local river prawns grilled over hot coals, brushed with garlic butter and served with lime juice.",
      price: "$14.00",
    },
    {
      img: imgFrame908,
      name: "Somlor Machu Kroeung",
      desc: "A classic sour soup made with beef, water spinach, and a yellow-green lemongrass paste (Kroeung).",
      price: "$8.00",
    },
  ],

  sets: [
    {
      img: imgFrame907,
      name: "Royal Khmer Tasting Menu",
      desc: "A complete multi-course menu featuring Fish Amok, Lok Lak, Mango Salad, and traditional desserts.",
      price: "$25.00",
    },
    {
      img: imgFrame906,
      name: "Family Gathering Feast",
      desc: "A generous platter of BBQ meats, grilled seafood, fresh vegetables, and large soup bowls for 4-6 people.",
      price: "$45.00",
    },
    {
      img: imgFrame908,
      name: "Samanea Special Set",
      desc: "Our chef's selected sustainable dishes highlighting seasonal local ingredients and herbs.",
      price: "$30.00",
    },
    {
      img: imgFrame905,
      name: "Khmer Street Food Medley",
      desc: "A platter of popular local street eats including spring rolls, chive cakes, and beef skewers.",
      price: "$12.50",
    },
  ],
};

export type MenuCategory = keyof typeof menuData;

export const testimonials = [
  {
    text: "The Fish Amok here is absolute perfection! Steamed in a banana leaf with rich coconut cream and lemongrass paste. The garden terrace setting in Toul Kork makes you forget you are in the city.",
    date: "2 Mar. 2026",
    name: "Anthony Bruff",
    avatar: imgEllipse5,
    bg: "#304625",
    ratingPaths: [
      svgPaths.p3605cc00,
      svgPaths.p17a51700,
      svgPaths.pd101500,
      svgPaths.p2e9774f0,
      svgPaths.pc7b8e80,
    ],
  },
  {
    text: "We ordered the Khmer BBQ Platter and Beef Lok Lak. The beef was incredibly tender and flavorful, and the pepper sauce was fantastic. The staff are so attentive and welcoming.",
    date: "25 Mar. 2026",
    name: "Regina Gella",
    avatar: imgEllipse6,
    bg: "#1e4d26",
    ratingPaths: [
      svgPaths.p50bd872,
      svgPaths.p28ec8000,
      svgPaths.p193f1580,
      svgPaths.p2a34700,
      svgPaths.p1adb8100,
    ],
  },
  {
    text: "A beautiful restaurant serving authentic Khmer cuisine. The Pork Blood Porridge is our favorite morning breakfast, and their commitment to employing local staff and supporting the community is inspiring.",
    date: "5 Apr. 2026",
    name: "Jamiyu Aliyu",
    avatar: imgEllipse7,
    bg: "#426232",
    ratingPaths: [
      svgPaths.p50bd872,
      svgPaths.p38d84700,
      svgPaths.p315d5500,
      svgPaths.p3e938700,
      svgPaths.p3ac1c700,
    ],
  },
];

export const companies = [
  { img: imgRectangle50, bg: "#0B4EA2", label: "Company 1" },
  { img: imgRectangle, bg: "#7F742F", label: "Company 2" },
  { img: imgRectangle49, bg: "#4F4F00", label: "Company 3" },
  { img: imgRectangle47, bg: "#6C8C56", label: "Company 4" },
  { img: imgRectangle46, bg: "#8B3030", label: "Company 5" },
  { img: imgNvcLogo, bg: "#2B89CA", label: "NVC" },
];

export const venues = [
  {
    title: "Indoor View",
    img: imgFrame42847,
    desc: "Our elegant indoor dining room features warm lighting and traditional Khmer décor for an intimate atmosphere.",
    side: "right",
  },
  {
    title: "Outdoor View",
    img: imgFrame42848,
    desc: "Enjoy al-fresco dining surrounded by lush tropical greenery in our beautiful garden terrace.",
    side: "left",
  },
  {
    title: "Room Service",
    img: imgFrame42849,
    desc: "Premium in-room dining experience delivered with care and attention to detail.",
    side: "right",
  },
  {
    title: "Event Service",
    img: imgFrame42850,
    desc: "Host your special occasions in our dedicated event spaces with tailored menus and attentive staff.",
    side: "left",
  },
] as const;

export const stats = [
  { value: "20,000+", label: "Trees Planted" },
  { value: "100%", label: "Local Staff Employed" },
  { value: "5", label: "Programs Supported" },
];