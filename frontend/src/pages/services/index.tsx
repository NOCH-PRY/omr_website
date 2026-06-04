import { Link } from "react-router-dom";
import { Armchair, ShoppingBag, Truck, Utensils, DoorOpen, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Dine-In Sanctuary",
    icon: <Armchair className="text-brand-accent" size={32} />,
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    desc: "Immerse yourself in authentic Khmer hospitality. Choose between our beautifully lit wooden indoor hall or our tranquil outdoor garden terrace.",
    features: ["Traditional live musical performances", "Lush garden patio scenery", "A la carte & set-menu ordering", "Attentive tableside host service"],
    cta: "Book Table",
    link: "/reservation",
  },
  {
    title: "VIP & VVIP Dining Rooms",
    icon: <DoorOpen className="text-brand-accent" size={32} />,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    desc: "For private corporate meetings, family reunions, or executive dinners. Complete with customized menus and dedicated personal hosts.",
    features: ["High privacy acoustic design", "Audio-visual conference facilities", "Seating capacities from 10 to 30 guests", "Tailored banquet tasting menus"],
    cta: "Inquire VIP Room",
    link: "/reservation",
  },
  {
    title: "Artisanal Catering",
    icon: <Utensils className="text-brand-accent" size={32} />,
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80",
    desc: "Bring One More Restaurant's refined flavors to your private residence, corporate workshop, weddings, or birthday parties.",
    features: ["Buffet & coffee break packages", "Live cooking stations with master chefs", "Elegant table styling & tableware hire", "Full-service banquet waitstaff"],
    cta: "Request Quote",
    link: "/events",
  },
  {
    title: "Gourmet Take Away",
    icon: <ShoppingBag className="text-brand-accent" size={32} />,
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    desc: "Short on time? Order your favorite Khmer amok, salad, or soup online and pick up at any branch, packaged fresh and warm.",
    features: ["Eco-friendly compostable packaging", "Quick 20-minute preparation time", "Dedicated curbside pickup zones", "Full menu availability"],
    cta: "Explore Menu",
    link: "/menu",
  },
  {
    title: "Seamless Home Delivery",
    icon: <Truck className="text-brand-accent" size={32} />,
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    desc: "Fresh, piping hot dishes delivered directly to your doorstep. We partner with the city's fastest couriers to guarantee temperature safety.",
    features: ["Insulated thermo-control delivery box", "Live delivery tracking updates", "Free delivery within a 3km radius", "Simple cashless payment options"],
    cta: "Order Delivery",
    link: "/menu",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Our Offerings</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-brand-dark mt-2 mb-4">Hospitality Services</h1>
        <p className="text-stone-600 font-light leading-relaxed">
          From intimate couple dinners to grand corporate catering, we offer tailored services matching all your dining and event desires.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col gap-16">
        {services.map((s, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={idx} 
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-stretch`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 min-h-[300px] rounded-3xl overflow-hidden shadow-xl relative">
                <img 
                  alt={s.title} 
                  src={s.img} 
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-left py-4">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 bg-brand-sage/20 rounded-2xl">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
                    {s.title}
                  </h3>
                </div>
                
                <p className="text-stone-600 font-light leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Features Check List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-stone-600 font-light">
                  {s.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <CheckCircle className="text-brand-accent shrink-0" size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Link Button */}
                <div>
                  <Link 
                    to={s.link} 
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-primary hover:bg-brand-dark text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    {s.cta}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
