import * as React from "react";
import svgPaths from "../assets/svgPaths";
import imgHeader30 from "../assets/omr_bk_night.jpg";
import imgLogo from "../assets/logo_white_color.png";
const placeholderImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";

const imgSignatureDish = placeholderImage;
const imgImg = placeholderImage;
const imgImg1 = placeholderImage;
const imgImg2 = placeholderImage;
const imgGlossImg = placeholderImage;
const imgOneMoreTk = placeholderImage;
const imgMenu = placeholderImage;
const imgFrame909 = placeholderImage;
const imgFrame905 = placeholderImage;
const imgFrame906 = placeholderImage;
const imgFrame907 = placeholderImage;
const imgFrame908 = placeholderImage;
const imgRectangle36 = placeholderImage;
const imgFrame42847 = placeholderImage;
const imgFrame42848 = placeholderImage;
const imgFrame42849 = placeholderImage;
const imgFrame42850 = placeholderImage;
const imgTestimonial12 = placeholderImage;
const imgTestImg = placeholderImage;
const imgEllipse5 = placeholderImage;
const imgEllipse6 = placeholderImage;
const imgEllipse7 = placeholderImage;
const imgNvcLogo = placeholderImage;
const imgRectangle46 = placeholderImage;
const imgRectangle47 = placeholderImage;
const imgRectangle = placeholderImage;
const imgRectangle49 = placeholderImage;
const imgRectangle50 = placeholderImage;
const imgQrCode = placeholderImage;
const imgQrCode1 = placeholderImage;

// Real Khmer Food Menu Data
const menuData = {
  breakfast: [
    { img: imgFrame905, name: "Pork Blood Porridge", desc: "A beloved traditional morning dish, slow-cooked with tender pork and aromatic spices.", price: "$2.00" },
    { img: imgFrame908, name: "Bai Sach Chrouk", desc: "Sweet marinated sliced pork grilled over charcoal, served with broken rice, pickled cucumber and daikon.", price: "$2.50" },
    { img: imgFrame907, name: "Kuy Teav (Noodle Soup)", desc: "A fragrant rice noodle soup with savory pork broth, minced pork, and fresh herbs.", price: "$3.00" },
    { img: imgFrame906, name: "Num Banh Chok", desc: "Traditional Cambodian rice noodles topped with a rich green fish gravy and fresh garden herbs.", price: "$2.50" },
  ],
  lunch: [
    { img: imgFrame907, name: "Fish Amok", desc: "Cambodia's national dish — steamed fish in a rich, savory coconut curry paste wrapped in banana leaf.", price: "$8.00" },
    { img: imgFrame908, name: "Beef Lok Lak", desc: "Wok-tossed tender beef in a savory brown sauce, served with a lime-pepper dipping sauce.", price: "$9.00" },
    { img: imgFrame905, name: "Khmer Chicken Curry", desc: "A mild, sweet red curry made with coconut milk, lemongrass, sweet potatoes, and tender chicken.", price: "$7.50" },
    { img: imgFrame906, name: "Somlor Kako", desc: "A highly nutritious traditional Khmer soup packed with diverse green vegetables and toasted ground rice.", price: "$6.50" },
  ],
  dinner: [
    { img: imgFrame906, name: "Khmer BBQ Platter", desc: "Grilled marinated pork ribs, beef skewers, and local vegetables served with authentic dipping sauces.", price: "$12.00" },
    { img: imgFrame907, name: "Kampot Pepper Crab", desc: "Fresh blue crab stir-fried with fragrant green Kampot peppercorns, garlic, and sweet soy sauce.", price: "$15.00" },
    { img: imgFrame905, name: "Grilled River Prawns", desc: "Large local river prawns grilled over hot coals, brushed with garlic butter and served with lime juice.", price: "$14.00" },
    { img: imgFrame908, name: "Somlor Machu Kroeung", desc: "A classic sour soup made with beef, water spinach, and a yellow-green lemongrass paste (Kroeung).", price: "$8.00" },
  ],
  sets: [
    { img: imgFrame907, name: "Royal Khmer Tasting Menu", desc: "A complete multi-course menu featuring Fish Amok, Lok Lak, Mango Salad, and traditional desserts.", price: "$25.00" },
    { img: imgFrame906, name: "Family Gathering Feast", desc: "A generous platter of BBQ meats, grilled seafood, fresh vegetables, and large soup bowls for 4-6 people.", price: "$45.00" },
    { img: imgFrame908, name: "Samanea Special Set", desc: "Our chef's selected sustainable dishes highlighting seasonal local ingredients and herbs.", price: "$30.00" },
    { img: imgFrame905, name: "Khmer Street Food Medley", desc: "A platter of popular local street eats including spring rolls, chive cakes, and beef skewers.", price: "$12.50" },
  ],
};

const testimonials = [
  {
    text: "The Fish Amok here is absolute perfection! Steamed in a banana leaf with rich coconut cream and lemongrass paste. The garden terrace setting in Toul Kork makes you forget you are in the city.",
    date: "2 Mar. 2026",
    name: "Anthony Bruff",
    avatar: imgEllipse5,
    bg: "#304625",
    ratingPaths: [svgPaths.p3605cc00, svgPaths.p17a51700, svgPaths.pd101500, svgPaths.p2e9774f0, svgPaths.pc7b8e80],
  },
  {
    text: "We ordered the Khmer BBQ Platter and Beef Lok Lak. The beef was incredibly tender and flavorful, and the pepper sauce was fantastic. The staff are so attentive and welcoming.",
    date: "25 Mar. 2026",
    name: "Regina Gella",
    avatar: imgEllipse6,
    bg: "#1e4d26",
    ratingPaths: [svgPaths.p50bd872, svgPaths.p28ec8000, svgPaths.p193f1580, svgPaths.p2a34700, svgPaths.p1adb8100],
  },
  {
    text: "A beautiful restaurant serving authentic Khmer cuisine. The Pork Blood Porridge is our favorite morning breakfast, and their commitment to employing local staff and supporting the community is inspiring.",
    date: "5 Apr. 2026",
    name: "Jamiyu Aliyu",
    avatar: imgEllipse7,
    bg: "#426232",
    ratingPaths: [svgPaths.p50bd872, svgPaths.p38d84700, svgPaths.p315d5500, svgPaths.p3e938700, svgPaths.p3ac1c700],
  },
];

const companies = [
  { img: imgRectangle50, bg: "#0B4EA2", label: "Company 1" },
  { img: imgRectangle, bg: "#7F742F", label: "Company 2" },
  { img: imgRectangle49, bg: "#4F4F00", label: "Company 3" },
  { img: imgRectangle47, bg: "#6C8C56", label: "Company 4" },
  { img: imgRectangle46, bg: "#8B3030", label: "Company 5" },
  { img: imgNvcLogo, bg: "#2B89CA", label: "NVC" },
];

function StarRating({ paths }: { paths: string[] }) {
  return (
    <svg className="block" fill="none" viewBox="0 0 107.414 15.57" width="107" height="16">
      {paths.map((d, i) => (
        <path key={i} d={d} fill="#E3A56B" />
      ))}
    </svg>
  );
}

function QuoteIcon({ d }: { d: string }) {
  return (
    <svg fill="none" viewBox="0 0 19.9111 14.2222" width="20" height="15">
      <path d={d} fill="#E3A56B" />
    </svg>
  );
}

function Header() {
  return (
    <header className="relative w-full overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" style={{ minHeight: "100vh" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img alt="" className="absolute w-full h-[106%] top-[-3%] left-0 object-cover" src={imgHeader30} />
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(102,102,102,0.14)] from-45% to-[rgba(48,70,37,0.55)]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-5 sm:px-10 pt-6 pb-4">
        <img alt="One More Restaurant" className="h-10 sm:h-14 w-auto object-contain shrink-0" src={imgLogo} />
        <div className="hidden md:flex items-center gap-7 text-[#fafaf9] text-sm font-light" style={{ fontFamily: "'Geologica', sans-serif" }}>
          <a href="#menu" className="hover:text-[#8bb974] transition-colors">Menu</a>
          <a href="#events" className="hover:text-[#8bb974] transition-colors">Event</a>
          <a href="#about" className="hover:text-[#8bb974] transition-colors">About us</a>
          <a href="#gallery" className="hover:text-[#8bb974] transition-colors">Gallery</a>
        </div>
        <button className="border border-[#6b9158] text-[#8bb974] text-xs px-4 py-2 rounded-full hover:bg-[#6b9158] hover:text-white transition-colors cursor-pointer" style={{ fontFamily: "'Geologica', sans-serif" }}>
          Reservation
        </button>
      </nav>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-start px-5 sm:px-16 pt-16 sm:pt-24 pb-20 sm:pb-32">
        <h1 className="text-[#fafaf9] text-4xl sm:text-5xl lg:text-[71px] leading-none text-left mb-6" style={{ fontFamily: "'Philosopher', serif" }}>
          One More Restaurant
        </h1>
        <p className="text-[#fbfbfb] text-sm leading-relaxed max-w-lg mb-8" style={{ fontFamily: "'Geologica', sans-serif" }}>
          Immerse yourself in the rich flavors of authentic Khmer cuisine, where tradition meets a warm and inviting dining experience.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#menu" className="bg-[#8bb974] text-white text-xs px-6 py-3 rounded-full hover:bg-[#6b9158] transition-colors cursor-pointer" style={{ fontFamily: "'Geologica', sans-serif" }}>
            Explore our menu
          </a>
          <a href="#Reservation" className="border-2 border-[#cce9be] text-[#8bb974] text-xs px-6 py-3 rounded-full hover:bg-[#cce9be]/20 transition-colors cursor-pointer" style={{ fontFamily: "'Geologica', sans-serif" }}>
            Book Your Dining
          </a>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <a className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-70">
        <svg width="24" height="24" fill="none" viewBox="0 0 23.8932 23.8932" className="rotate-133]">
          <path d={svgPaths.p3906f400} stroke="#FAD795" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.888889" />
        </svg>
      </a>
    </header>
  );
}

function SignatureTitle() {
  return (
    <div className="bg-[#304625] w-full py-10 flex items-center justify-center">
      <h2 className="text-[#fafaf9] text-3xl sm:text-4xl lg:text-[32px] leading-tight underline text-center" style={{ fontFamily: "'Gloock', serif" }}>
        Our Signature Dishes
      </h2>
    </div>
  );
}

function SignatureDish() {
  return (
    <section className="relative w-full py-16 px-5 sm:px-14">
      {/* Background */}
      <div className="absolute inset-0">
        <img alt="" className="absolute w-full h-[101%] top-[-0.5%] left-0 object-cover" src={imgSignatureDish} />
        <div className="absolute inset-0 backdrop-blur-[3px] bg-[rgba(0,0,0,0.64)] " style={{ top: '-10px', bottom: '-10px', left: '-10px', right: '-10px' }} />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-12">
        <p className="text-white text-xl sm:text-2xl text-center max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          Discover our most beloved authentic Khmer cuisine
        </p>
        {/* Dish images grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <img alt="Signature dish 1" className="w-full h-full object-cover" src={imgImg1} />
          </div>
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <img alt="Signature dish 2" className="w-full h-full object-cover" src={imgImg2} />
          </div>
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <img alt="Signature dish 3" className="w-full h-full object-cover" src={imgImg} />
          </div>
        </div>
        <button className="bg-[#567944] text-white font-bold px-10 py-3 rounded-[25px] hover:bg-[#304625] transition-colors cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
          Browse More
        </button>
      </div>
    </section>
  );
}

function ReservationTitle() {
  return (
    <div className="bg-[#304625] w-full py-10 flex items-center justify-center">
      <h2 className="text-white text-3xl sm:text-4xl lg:text-[38px] leading-tight underline text-center pb-4" style={{ fontFamily: "'Gloock', serif" }}>
        Reservation
      </h2>
    </div>
  );
}

function ReservationCard({ isFirst }: { isFirst: boolean }) {
  const details = isFirst
    ? {
      branch: "Toul Kork",
      phone: "+855 15 821 888",
      address: "#37, Street 315, Toul Kork, Phnom Penh",
      mapUrl: "https://www.google.com/maps/search/One+More+Restaurant+Toul+Kork"
    }
    : {
      branch: "BKK1",
      phone: "+855 23 223 888",
      address: "162 Preah Norodom Blvd, BKK1, Phnom Penh",
      mapUrl: "https://maps.app.goo.gl/QNh2DUu7QbqMTSkv6"
    };

  return (
    <div className="relative border-4 border-white flex-1 min-w-70 max-w-112.5 w-full rounded-[47px] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]" style={{ aspectRatio: "493/605" }}>
      {/* Glossy background image */}
      <div className="absolute inset-0 opacity-70">
        <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" src={imgGlossImg} style={{ objectPosition: "bottom" }} />
      </div>
      {/* Logo overlay */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[60%] h-[25%]">
        <img alt="One More Logo" className="w-full h-full object-contain" src={imgOneMoreTk} />
      </div>
      {/* Text labels */}
      <div className="absolute text-center text-white top-[46%] left-1/2 -translate-x-1/2 w-[90%]">
        <p className="text-3xl sm:text-4xl leading-tight font-normal mb-2" style={{ fontFamily: "'Gloock', serif" }}>One More</p>
        <p className="text-lg sm:text-xl underline leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>{details.branch}</p>
      </div>
      {/* Reserve button */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] max-w-70">
        <button className="w-full bg-[#304625] text-white font-bold text-base sm:text-lg py-3 rounded-[30px] shadow-lg hover:bg-[#1e3a18] transition-colors cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
          RESERVE NOW
        </button>
      </div>
      {/* Contact info */}
      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[90%] text-center">
        <a href={`tel:${details.phone.replace(/\s+/g, '')}`} className="block text-white text-xs sm:text-sm underline leading-normal hover:text-[#8bb974] transition-colors">{details.phone}</a>
        <a href={details.mapUrl} target="_blank" rel="noopener noreferrer" className="block text-white text-[10px] sm:text-xs underline leading-normal mt-1 hover:text-[#8bb974] transition-colors px-2">{details.address}</a>
      </div>
    </div>
  );
}

function ReservationContent() {
  return (
    <section id="Reservation" className="w-full py-16 px-5 sm:px-14 flex flex-wrap justify-center items-center gap-10" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.16) 100%), linear-gradient(rgba(32,43,26,0.88) 26.923%, rgb(117,158,97) 62.981%)" }}>
      <ReservationCard isFirst={true} />
      <ReservationCard isFirst={false} />
    </section>
  );
}

function MenuSection() {
  const [activeTab, setActiveTab] = React.useState<keyof typeof menuData>("breakfast");

  const tabs: { id: keyof typeof menuData; label: string }[] = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "sets", label: "Meal Sets" },
  ];

  return (
    <section id="menu" className="relative w-full py-12">
      {/* Background */}
      <div className="absolute inset-0">
        <img alt="" className="absolute w-full h-[101%] top-[-0.5%] left-0 object-cover" src={imgMenu} />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.64)]" style={{ top: '-5px', bottom: '-10px', left: '-10px', right: '-10px' }} />
      </div>
      <div className="relative z-10">
        {/* Title */}
        <div className="flex items-center justify-center py-10">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-[32px] leading-tight underline text-center" style={{ fontFamily: "'Gloock', serif" }}>
            Our Menu
          </h2>
        </div>

        {/* Responsive Tab bar */}
        <div className="flex justify-center gap-6 sm:gap-16 py-4 border-t border-b border-white/20 mx-6 sm:mx-20 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-semibold text-sm sm:text-lg cursor-pointer transition-all duration-300 relative pb-2 ${isActive ? "text-[#8bb974]" : "text-white hover:text-[#8bb974]"
                  }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.75 bg-[#8bb974] rounded-full transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-20 pb-10 max-w-6xl mx-auto">
          {menuData[activeTab].map((item, i) => (
            <div key={i} className="flex gap-4 items-start bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:border-[#8bb974]/30 transition-colors">
              {/* Food image with overlay */}
              <div className="relative shrink-0 w-30 h-30 sm:w-37.5 sm:h-37.5 rounded-[13px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(195,181,181,0.25)]">
                <div className="absolute inset-0 opacity-65 overflow-hidden rounded-[25px] pointer-events-none">
                  <img alt="" className="absolute w-[190%] h-[191%] left-[-42%] top-[-47%]" src={imgFrame909} />
                </div>
                <img alt={item.name} className="absolute inset-0 w-full h-full object-cover" src={item.img} />
              </div>
              {/* Food info */}
              <div className="flex flex-col gap-1 pt-1 flex-1">
                <p className="text-[#f6fdf2] font-semibold text-base sm:text-lg leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>{item.name}</p>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
                <p className="text-[#8bb974] font-extrabold text-base mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu button */}
        <div className="flex justify-center pb-12">
          <button className="border-4 border-[#6b9158] text-white text-sm px-14 py-2.5 rounded-[25px] hover:bg-[#6b9158] transition-colors cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}

function VenueSection() {
  const venues = [
    { title: "Indoor View", img: imgFrame42847, desc: "Our elegant indoor dining room features warm lighting and traditional Khmer décor for an intimate atmosphere.", side: "right" },
    { title: "Outdoor View", img: imgFrame42848, desc: "Enjoy al-fresco dining surrounded by lush tropical greenery in our beautiful garden terrace.", side: "left" },
    { title: "Room Service", img: imgFrame42849, desc: "Premium in-room dining experience delivered with care and attention to detail.", side: "right" },
    { title: "Event Service", img: imgFrame42850, desc: "Host your special occasions in our dedicated event spaces with tailored menus and attentive staff.", side: "left" },
  ];

  return (
    <section className="relative w-full bg-[#426232] overflow-hidden">
      {/* Decorative blurred elements */}
      <div className="hidden lg:block absolute -left-15 top-0 opacity-50 rotate-[3.79deg]">
        <div className="blur-[1.5px] w-53 h-116.25">
          <img alt="" className="w-full h-full object-cover" src={imgRectangle36} />
        </div>
      </div>
      <div className="hidden lg:block absolute -right-15 top-[40%] opacity-50 rotate-[176.62deg] scale-y-[-1]">
        <div className="blur-[1.5px] w-52.5 h-113.75">
          <img alt="" className="w-full h-full object-cover" src={imgRectangle36} />
        </div>
      </div>

      {/* Title */}
      <div className="bg-[#6b9158] w-full py-10 flex items-center justify-center">
        <h2 className="text-[#fafaf9] text-3xl sm:text-4xl lg:text-[48px] leading-tight underline text-center" style={{ fontFamily: "'Gloock', serif" }}>
          Our Venues
        </h2>
      </div>

      {/* Venue rows */}
      <div className="flex flex-col gap-16 py-16 px-5 sm:px-12 max-w-6xl mx-auto">
        {venues.map((venue, i) => (
          <div key={i} className={`flex flex-col ${venue.side === "left" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
            <div className="w-full md:w-1/2 aspect-474/285 overflow-hidden rounded-xl shadow-2xl">
              <img alt={venue.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src={venue.img} />
            </div>
            <div className={`w-full md:w-1/2 text-white ${venue.side === "left" ? "md:text-right" : "md:text-left"}`}>
              <h3 className="text-3xl sm:text-[35px] leading-9.5 mb-4" style={{ fontFamily: "'Gloock', serif" }}>{venue.title}</h3>
              <p className="text-base sm:text-lg lg:text-[22px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{venue.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative w-full py-24 px-5 sm:px-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSignatureDish} />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16">
        {/* Commitment text */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <p className="text-white text-3xl sm:text-[40px] leading-12" style={{ fontFamily: "'Gloock', serif" }}>Our Commitment to a Greener Future</p>
          </div>
          <div className="flex-1 flex flex-col gap-7">
            <p className="text-white text-lg leading-6.5 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              At Samanea, we believe in luxury that nurtures the earth. Our sustainability initiatives are designed to create a positive impact on the local community and environment. Join us in our journey towards a harmonious coexistence with nature.
            </p>
            <div className="flex flex-wrap gap-5 items-center">
              <button className="border border-white text-white text-xs px-7 py-2.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer" style={{ fontFamily: "'Geologica', sans-serif" }}>
                Learn More
              </button>
              <button className="flex items-center gap-2 text-white text-xs cursor-pointer" style={{ fontFamily: "'Geologica', sans-serif" }}>
                Get Involved
                <svg width="6" height="11" fill="none" viewBox="0 0 5.94808 10.3259">
                  <path d={svgPaths.p21bc19f0} fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {[
            { value: "20,000+", label: "Trees Planted" },
            { value: "100%", label: "Local Staff Employed" },
            { value: "5", label: "Programs Supported" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 pt-6 md:pt-0 md:pl-10 first:pt-0 first:pl-0">
              <p className="text-white font-semibold text-5xl sm:text-[71px] leading-[1.2]" style={{ fontFamily: "'Geologica', sans-serif" }}>{stat.value}</p>
              <p className="text-white/80 font-bold text-sm sm:text-[18px] leading-[1.4] tracking-wider uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsTitle() {
  return (
    <div className="bg-[#304625] w-full py-10 flex items-center justify-center">
      <h2 className="text-[#fafaf9] text-3xl sm:text-4xl lg:text-[48px] leading-tight underline text-center" style={{ fontFamily: "'Gloock', serif" }}>
        Guest Testimonials
      </h2>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative w-full py-16 px-5 sm:px-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img alt="" className="absolute w-[130%] h-[124%] left-[6%] top-[19%] object-cover" src={imgTestimonial12} />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {testimonials.map((t, i) => (
            <div key={i} className="relative rounded-[8.889px] overflow-hidden" style={{ minHeight: 432 }}>
              {/* Background image */}
              <img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[8.889px]" src={imgTestImg} />
              {/* Color overlay */}
              <div className="absolute inset-0 rounded-[8.889px]" style={{ backgroundColor: t.bg, opacity: 0.88 }} />
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full" style={{ minHeight: 432 }}>
                {/* Open quote */}
                <div className="mb-2">
                  <QuoteIcon d={svgPaths.pb219d80} />
                </div>
                <p className="text-[#fef9ed] text-[14px] leading-relaxed text-justify flex-1 mb-4" style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 200 }}>
                  {t.text}
                </p>
                {/* Close quote */}
                <div className="flex justify-end mb-4">
                  <QuoteIcon d={svgPaths.p2df8ba40} />
                </div>
                {/* Date */}
                <p className="text-[#e3a56b] text-[12px] tracking-widest mb-4" style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 500 }}>{t.date}</p>
                {/* Stars */}
                <div className="mb-4">
                  <StarRating paths={t.ratingPaths} />
                </div>
                {/* Avatar + name */}
                <div className="flex items-center gap-3 mt-auto">
                  <img alt={t.name} src={t.avatar} className="w-14 h-14 rounded-full object-cover" />
                  <p className="text-[#e3a56b] text-[14px]" style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 200 }}>{t.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Decorative star */}
        <div className="opacity-70">
          <svg width="24" height="24" fill="none" viewBox="0 0 23.8932 23.8932" className="rotate-43deg">
            <path d={svgPaths.p3906f400} stroke="#FAD795" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.888889" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <div className="bg-[#304625] w-full py-12 px-5 sm:px-12">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-[#fafaf9] text-3xl sm:text-4xl lg:text-[48px] leading-tight underline text-center" style={{ fontFamily: "'Gloock', serif" }}>
          Our Companies
        </h2>
      </div>
      {/* Company logos row */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        {companies.map((c, i) => (
          <div key={i} className="relative w-30 h-20 sm:w-36.25 sm:h-22.5 overflow-hidden rounded" style={{ backgroundColor: c.bg }}>
            <img alt={c.label} className="absolute inset-0 w-full h-full object-contain p-2" src={c.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative w-full px-5 sm:px-14 py-16 overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      {/* Background */}
      <div className="absolute inset-0">
        <img alt="" className="absolute w-full h-[198%] top-[-57%] left-0 object-cover" src={imgHeader30} />
        <div className="absolute inset-0 bg-linear-to-b from-black to-[rgba(102,102,102,0)]" />
      </div>

      <div className="relative z-10 max-w-none mx-auto flex flex-col gap-16">
        {/* Top content */}
        <div className="flex flex-col sm:flex-row gap-10 justify-between">
          {/* QR codes */}
          <div className="flex flex-col gap-5 max-w-sm">
            <div className="w-24 h-24 overflow-hidden">
              <img alt="Telegram QR code" className="w-full h-full object-contain" src={imgQrCode} />
            </div>
            <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Scan to join our Telegram channel for bookings, menu updates, and the latest promotions.
            </p>
            <div className="w-24 h-24 overflow-hidden">
              <img alt="QR code 2" className="w-full h-full object-cover" src={imgQrCode1} />
            </div>
          </div>

          {/* Contact / Social */}
          <div className="flex flex-col gap-4">
            <p className="text-white text-lg" style={{ fontFamily: "'Philosopher', serif" }}>Contact Us</p>
            {[
              { icon: svgPaths.p1c80b500, label: "Facebook", vb: "0 0 17.7778 17.7778" },
              { icon: svgPaths.p1a6ed600, label: "Instagram", vb: "0 0 16 16" },
              { icon: svgPaths.p816ba00, label: "LinkedIn", vb: "0 0 16 16" },
              { icon: svgPaths.pad1dc00, label: "YouTube", vb: "0 0 17.7904 12.4551" },
            ].map((social, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg fill="none" viewBox={social.vb} className="w-full h-full">
                    <path clipRule="evenodd" d={social.icon} fill="white" fillRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-xs" style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 200 }}>{social.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white w-full" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-[#d9fcdf] text-xs" style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 200 }}>
          <p>© 2026 ONE MORE. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition-colors">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RestaurantPage() {
  return (
    <div className="w-full flex flex-col items-stretch">
      <Header />
      <SignatureTitle />
      <SignatureDish />
      <ReservationTitle />
      <ReservationContent />
      <MenuSection />
      <VenueSection />
      <StatsSection />
      <TestimonialsTitle />
      <TestimonialsSection />
      <FooterSection />
      <Footer />
    </div>
  );
}
