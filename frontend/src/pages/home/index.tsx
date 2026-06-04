import { useState } from "react";
import { Link } from "react-router-dom";
import imgHeader30 from "../../assets/omr_bk_night.jpg";

// Rich Khmer Cuisine & Dining Images from Unsplash
const images = {
  roastedChicken: "https://images.unsplash.com/photo-1598515214211-89d3e73ae83b?auto=format&fit=crop&w=600&q=80",
  fishAmok: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
  beefLokLak: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
  menuBg: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
  sustainabilityBg: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80",
  
  // Venues
  indoor: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  outdoor: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  roomService: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  eventService: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",

  // Testimonials
  avatar1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  avatar2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  avatar3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
};

const signatureDishes = [
  { name: "Fish Amok", desc: "Cambodia's national dish — steamed fish in a rich, savory coconut curry paste wrapped in a banana leaf.", img: images.fishAmok },
  { name: "Roasted Khmer Chicken", desc: "Crispy skin roasted chicken marinated in local herbs and honey, served with sweet fish sauce.", img: images.roastedChicken },
  { name: "Beef Lok Lak", desc: "Sizzling wok-tossed tender beef cubes in a dark savory glaze, served with fresh limes and black pepper sauce.", img: images.beefLokLak },
];

const menuPreviewData = {
  breakfast: [
    { name: "Pork Blood Porridge", desc: "A traditional morning favorite, slow-cooked with fresh local herbs and tender pork.", price: "$2.00" },
    { name: "Bai Sach Chrouk", desc: "Sweet charcoal-grilled pork served with warm broken rice and pickled cucumber.", price: "$2.50" },
    { name: "Kuy Teav (Noodle Soup)", desc: "Fragrant rice noodle soup cooked with clear pork broth and aromatic toppings.", price: "$3.00" },
  ],
  lunch: [
    { name: "Traditional Fish Amok", desc: "Steamed fish fillet cooked in a rich, spicy lemongrass curry paste.", price: "$8.00" },
    { name: "Beef Lok Lak Rice Set", desc: "Sautéed beef cubes served with garlic fried rice and a fresh egg.", price: "$9.00" },
    { name: "Khmer Chicken Curry", desc: "Sweet red curry made with sweet potatoes, coconut milk, and chicken.", price: "$7.50" },
  ],
  dinner: [
    { name: "Kampot Pepper Crab", desc: "Blue crab stir-fried in a rich sweet sauce with fragrant fresh green Kampot pepper.", price: "$15.00" },
    { name: "Grilled River Prawns", desc: "Fresh local river prawns grilled over charcoal, brushed with garlic herb butter.", price: "$14.00" },
    { name: "Somlor Machu Kroeung", desc: "Lemongrass sour soup cooked with beef ribs, morning glory, and lime juice.", price: "$8.00" },
  ],
  sets: [
    { name: "Royal Khmer Tasting Set", desc: "Fish Amok, Beef Lok Lak, Mango Salad, soup, rice, and traditional dessert.", price: "$25.00" },
    { name: "Family BBQ Platter", desc: "Grilled pork ribs, beef skewers, local sausage, and vegetables for 4-6 people.", price: "$45.00" },
    { name: "Chef's Garden Special Set", desc: "Sustainable organic menu featuring selected locally-grown seasonal ingredients.", price: "$30.00" },
  ],
};

const tabOptions = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "sets", label: "Meal Sets" },
] as const;

type TabId = (typeof tabOptions)[number]["id"];

const testimonials = [
  {
    text: "The Fish Amok here is absolute perfection! Steamed in a banana leaf with rich coconut cream and lemongrass paste. The garden terrace setting in Toul Kork makes you forget you are in the city.",
    date: "2 Mar. 2026",
    name: "Anthony Bruff",
    avatar: images.avatar1,
    bg: "bg-brand-dark",
  },
  {
    text: "We ordered the Khmer BBQ Platter and Beef Lok Lak. The beef was incredibly tender and flavorful, and the pepper sauce was fantastic. The staff are so attentive and welcoming.",
    date: "25 Mar. 2026",
    name: "Regina Gella",
    avatar: images.avatar2,
    bg: "bg-brand-primary",
  },
  {
    text: "A beautiful restaurant serving authentic Khmer cuisine. The Pork Blood Porridge is our favorite morning breakfast, and their commitment to employing local staff and supporting the community is inspiring.",
    date: "5 Apr. 2026",
    name: "Jamiyu Aliyu",
    avatar: images.avatar3,
    bg: "bg-brand-light",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>("breakfast");

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img alt="One More Restaurant Exterior" className="w-full h-full object-cover" src={imgHeader30} />
          <div className="absolute inset-0 bg-linear-to-r from-brand-dark/90 via-brand-dark/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl text-left text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif leading-tight mb-4 drop-shadow-md">
              One More <br/>
              <span className="text-brand-gold">Restaurant</span>
            </h1>
            <p className="text-lg text-white/90 font-light mb-8 leading-relaxed max-w-lg">
              Immerse yourself in the rich flavors of authentic Khmer cuisine, where age-old culinary tradition meets a warm, modern sanctuary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="px-8 py-3.5 rounded-full bg-brand-accent hover:bg-brand-light text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Explore our menu
              </Link>
              <Link to="/reservation" className="px-8 py-3.5 rounded-full border-2 border-brand-sage text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5">
                Book Your Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE DISHES */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-gold mb-3">Our Signature Dishes</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12 font-light">
            Discover our most beloved authentic Khmer cuisine, prepared by master chefs using local organic ingredients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, i) => (
              <div key={i} className="group bg-brand-primary/40 border border-brand-light/20 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden">
                  <img alt={dish.name} src={dish.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-serif font-semibold text-brand-gold mb-2">{dish.name}</h3>
                  <p className="text-white/80 text-sm font-light leading-relaxed">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand-accent hover:bg-brand-light text-white font-semibold text-sm shadow-md transition-all">
              Browse Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 3. RESERVATION TEASER */}
      <section className="py-20 bg-[#F4F1EA] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark mb-3">Book Your Experience</h2>
          <p className="text-stone-600 max-w-xl mx-auto mb-12 font-light">
            Whether for family dining, business meetings, or wedding receptions, we offer the perfect setting across our branches.
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Toul Kork Branch Card */}
            <div className="bg-white rounded-3xl p-8 border border-brand-sage/20 shadow-xl max-w-sm w-full text-center flex flex-col justify-between aspect-3/4 hover:shadow-2xl transition-all duration-300">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-sage/20 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4">Branch</span>
                <h3 className="text-2xl font-serif text-brand-dark font-bold mb-2">Toul Kork</h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-6">
                  Experience dining in our beautiful traditional wooden architecture, featuring private VIP rooms and lush garden terrace scenery.
                </p>
              </div>
              <div className="mt-auto">
                <Link to="/reservation" className="w-full inline-block py-3 rounded-full bg-brand-primary hover:bg-brand-dark text-white font-bold text-sm shadow-md transition-colors mb-4">
                  RESERVE NOW
                </Link>
                <div className="text-xs text-stone-500">
                  <p className="underline mb-1">+855 15 821 888</p>
                  <p>#37, Street 315, Toul Kork, Phnom Penh</p>
                </div>
              </div>
            </div>

            {/* BKK1 Branch Card */}
            <div className="bg-white rounded-3xl p-8 border border-brand-sage/20 shadow-xl max-w-sm w-full text-center flex flex-col justify-between aspect-3/4 hover:shadow-2xl transition-all duration-300">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-sage/20 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4">Branch</span>
                <h3 className="text-2xl font-serif text-brand-dark font-bold mb-2">Boeung Keng Kang 1</h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-6">
                  A modern boutique dining space located in the heart of Phnom Penh city, offering refined Khmer cuisine ideal for business and leisure.
                </p>
              </div>
              <div className="mt-auto">
                <Link to="/reservation" className="w-full inline-block py-3 rounded-full bg-brand-primary hover:bg-brand-dark text-white font-bold text-sm shadow-md transition-colors mb-4">
                  RESERVE NOW
                </Link>
                <div className="text-xs text-stone-500">
                  <p className="underline mb-1">+855 23 223 888</p>
                  <p>162 Preah Norodom Blvd, BKK1, Phnom Penh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TABS MENU PREVIEW */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url(${images.menuBg})` }}>
        <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-gold mb-3">Our Menu Highlights</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 font-light">
            Take a glance at our popular dishes available throughout the day.
          </p>

          {/* Tabs header */}
          <div className="flex flex-wrap justify-center gap-4 border-b border-white/20 pb-4 mb-8">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 text-sm font-semibold transition-all duration-300 relative ${
                  activeTab === tab.id ? "text-brand-gold" : "text-white/70 hover:text-white"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
                )}
              </button>
            ))}
          </div>

          {/* Menu items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {menuPreviewData[activeTab].map((item, idx) => (
              <div key={idx} className="flex justify-between items-start bg-black/40 border border-white/10 p-5 rounded-xl text-left hover:border-brand-accent/40 transition-colors">
                <div>
                  <h4 className="text-lg font-semibold text-brand-gold">{item.name}</h4>
                  <p className="text-xs text-white/70 mt-1 font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-lg font-bold text-brand-accent ml-4">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VENUES GALLERY */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-gold text-center mb-3">Our Dining Spaces</h2>
          <p className="text-white/85 text-center max-w-xl mx-auto mb-16 font-light">
            Explore our diverse dining venues curated to elevate your gastronomic experience.
          </p>

          <div className="flex flex-col gap-16">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Indoor Venue" src={images.indoor} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-serif text-brand-gold mb-3">Elegant Indoor Hall</h3>
                <p className="text-white/80 font-light leading-relaxed">
                  Our air-conditioned main dining hall combines modern luxury comforts with traditional Khmer craftsmanship, offering an atmosphere of elegant tranquility perfect for family reunions and dinner dates.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2 aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Outdoor Venue" src={images.outdoor} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-serif text-brand-gold mb-3">Tropical Garden Terrace</h3>
                <p className="text-white/80 font-light leading-relaxed">
                  Dine al-fresco under a canopy of tropical greenery, surrounded by running water ponds and soft ambient lighting. It provides a peaceful escape from the bustling city sounds.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img alt="VIP Rooms" src={images.roomService} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-serif text-brand-gold mb-3">Exclusive VIP & VVIP Rooms</h3>
                <p className="text-white/80 font-light leading-relaxed">
                  Offering complete privacy for corporate meetings, executive dinners, or private family celebrations. Fully equipped with audio-visual setups and bespoke host services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUSTAINABILITY & STATS */}
      <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: `url(${images.sustainabilityBg})` }}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-gold mb-4">Our Commitment to a Greener Future</h2>
              <p className="text-white/90 text-lg leading-relaxed font-light">
                At One More, we believe in sustainable luxury. Our community initiatives support organic local farmers, minimize zero-plastic dining, and provide equal opportunities to our local workforce.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-white/80 text-sm font-light">
              <p>
                Every dining booking supports local farming cooperatives in Siem Reap and Kampot, promoting biological farming and sustainable water management.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link to="/contact" className="px-6 py-2.5 rounded-full border border-white text-white text-xs font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="flex flex-col">
              <span className="text-brand-gold text-5xl lg:text-7xl font-serif font-bold">20,000+</span>
              <span className="text-white/70 text-xs uppercase tracking-widest mt-2">Local Farmers Supported</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-gold text-5xl lg:text-7xl font-serif font-bold">100%</span>
              <span className="text-white/70 text-xs uppercase tracking-widest mt-2">Cambodian Staff Employed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-gold text-5xl lg:text-7xl font-serif font-bold">5+</span>
              <span className="text-white/70 text-xs uppercase tracking-widest mt-2">Organic Farm Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GUEST TESTIMONIALS */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark mb-3">Guest Testimonials</h2>
          <p className="text-stone-600 max-w-xl mx-auto mb-12 font-light">
            Hear from our beloved local and international guests about their dining experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-brand-sage/20 shadow-lg text-left flex flex-col justify-between">
                <div>
                  <div className="text-brand-gold text-3xl mb-4">“</div>
                  <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">{t.text}</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                  <img alt={t.name} src={t.avatar} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-semibold text-brand-dark text-sm">{t.name}</h5>
                    <span className="text-xs text-stone-400">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
