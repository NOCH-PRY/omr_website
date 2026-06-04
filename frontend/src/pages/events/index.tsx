import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { appConfig } from "../../config/appConfig";

interface EventPackage {
  title: string;
  subtitle: string;
  img: string;
  features: string[];
  capacity: string;
  bestFor: string;
}

const eventPackages: EventPackage[] = [
  {
    title: "Wedding & Engagement Ceremony",
    subtitle: "A royal Khmer banquet setting for your special milestone.",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80",
    features: [
      "Traditional backdrop and flower arch setup",
      "Gourmet 8-course Khmer wedding set menu",
      "Stage, professional sound system, and lighting",
      "Complimentary champagne toast & guest book table",
    ],
    capacity: "50 - 300 Guests",
    bestFor: "Wedding reception, Engagement, Anniversaries",
  },
  {
    title: "Corporate Meeting & Workshop",
    subtitle: "Seamless business amenities in a tranquil environment.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    features: [
      "High-speed Wi-Fi, projector screen & whiteboard",
      "Premium coffee break packages with Khmer pastries",
      "Executive business lunch set menu",
      "Flexible table layouts (U-shape, Classroom, Theatre)",
    ],
    capacity: "10 - 80 Guests",
    bestFor: "Workshops, Board meetings, Press conferences",
  },
  {
    title: "Birthday & Family Celebration",
    subtitle: "Vibrant and intimate gatherings for your loved ones.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    features: [
      "Customizable theme decorations and balloon setup",
      "Khmer sharing buffet or bespoke family set menu",
      "Complimentary chef-curated birthday cake",
      "Dedicated photo zone setup",
    ],
    capacity: "15 - 120 Guests",
    bestFor: "Birthday party, Baby shower, Family gatherings",
  },
  {
    title: "Bespoke Outdoor Catering",
    subtitle: "Refined dining service delivered to your chosen venue.",
    img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80",
    features: [
      "Full mobile kitchen setup with live cooking chefs",
      "Professional silver-service waiters & bar staff",
      "Tailored buffet, set-menu, or cocktail canapes",
      "Event cleanup & rental coordination (tables, linens)",
    ],
    capacity: "50 - 1000+ Guests",
    bestFor: "Home buffets, Product launches, Outdoor weddings",
  },
];

export default function EventsPage() {
  const [selectedPkg, setSelectedPkg] = useState<EventPackage | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    guests: 50,
    message: "",
  });

  const handleOpenForm = (pkg: EventPackage) => {
    setSelectedPkg(pkg);
    setFormData((prev) => ({
      ...prev,
      eventType: pkg.title,
    }));
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${appConfig.apiUrl}/api/event-bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_type: formData.eventType,
          guest_count: parseInt(formData.guests.toString()),
          event_date: formData.date,
          package_details: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quotation request. Please try again.");
      }

      setSubmitSuccess(true);
      // Reset form fields
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        date: "",
        guests: 50,
        message: "",
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      setSubmitError(message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Celebrate & Meet</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-brand-dark mt-2 mb-4">Event Packages</h1>
        <p className="text-stone-600 font-light leading-relaxed">
          From enchanting weddings to streamlined corporate seminars, host your memorable events with our curated banquets and luxury amenities.
        </p>
      </div>

      {/* Event packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {eventPackages.map((pkg, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-3xl overflow-hidden border border-brand-sage/25 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              {/* Card Image */}
              <div className="relative aspect-video overflow-hidden bg-stone-100">
                <img 
                  alt={pkg.title} 
                  src={pkg.img} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-3 left-4 bg-brand-dark/85 backdrop-blur-sm px-3.5 py-1 rounded-full text-white text-[10px] font-semibold uppercase tracking-wider">
                  Capacity: {pkg.capacity}
                </div>
              </div>

              {/* Card Info */}
              <div className="p-6 sm:p-8 text-left">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-dark mb-2">
                  {pkg.title}
                </h3>
                <p className="text-stone-500 text-xs font-light leading-relaxed mb-6">
                  {pkg.subtitle}
                </p>

                {/* Features Checkbox list */}
                <ul className="space-y-3.5 text-xs text-stone-600 font-light">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Request button */}
            <div className="p-6 sm:p-8 pt-0 text-left border-t border-stone-50 mt-6 flex justify-between items-center gap-4">
              <span className="text-[10px] text-stone-400 font-medium tracking-wide">
                Best For: {pkg.bestFor}
              </span>
              <button 
                onClick={() => handleOpenForm(pkg)}
                className="px-6 py-2.5 rounded-full bg-brand-primary hover:bg-brand-dark text-white text-xs font-bold shadow-md transition-colors shrink-0"
              >
                Request Quotation
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* REQUEST QUOTE MODAL DIALOG */}
      {selectedPkg && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setSelectedPkg(null)} 
          />
          
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full z-10 border border-brand-sage/20 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-brand-dark text-white p-6 text-left relative">
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-wider">Event RFP Inquiry</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1">Get An Event Quotation</h3>
              <button 
                onClick={() => setSelectedPkg(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8 text-left">
              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-6">
                  <CheckCircle2 className="text-brand-accent w-14 h-14 mb-3" />
                  <h4 className="text-xl font-bold font-serif text-brand-dark">Quote Request Logged!</h4>
                  <p className="text-stone-500 font-light text-xs mt-2 max-w-sm mb-6">
                    We have successfully received your RFP quotation details for "{selectedPkg.title}". Our event coordinator will email or call you within 24 hours with package catalogs and pricing sheets.
                  </p>
                  <button 
                    onClick={() => setSelectedPkg(null)}
                    className="px-6 py-2 rounded-full bg-brand-primary hover:bg-brand-dark text-white text-xs font-semibold"
                  >
                    Close Dialog
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError && (
                    <div className="text-red-700 bg-red-50 p-3 rounded-xl text-xs font-medium border border-red-100">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold uppercase text-stone-500">Contact Name</label>
                      <input 
                        type="text" 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="E.g., John Doe"
                        className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all" 
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold uppercase text-stone-500">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="E.g., 015821888"
                        className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase text-stone-500">Email Address</label>
                    <input 
                      type="email" 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs w-full focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="text-[10px] font-bold uppercase text-stone-500">Event Date</label>
                      <input 
                        type="date" 
                        required
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs w-full focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all" 
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold uppercase text-stone-500">Est. Guests</label>
                      <input 
                        type="number" 
                        required
                        min="5"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs w-full focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase text-stone-500">Specific Package Needs / Special Details</label>
                    <textarea 
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Specify if inside/outside restaurant, buffet vs set menu, theme decoration ideas, dietary requirements..."
                      className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs w-full focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all" 
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-brand-accent hover:bg-brand-light text-white text-xs font-bold shadow-md transition-colors disabled:bg-stone-300 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting Quote Request..." : "Request Proposal Quotation"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
