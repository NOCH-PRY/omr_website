import React, { useState } from "react";
import { MapPin, Phone, Clock, Mail, CheckCircle2 } from "lucide-react";
import { appConfig } from "../../config/appConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
      const response = await fetch(`${appConfig.apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact request. Please try again.");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
      
      {/* 1. ABOUT US INTRO */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Our Legacy</span>
          <h1 className="text-3xl sm:text-5xl font-serif text-brand-dark mt-2 mb-4">About One More</h1>
          <p className="text-stone-600 font-light leading-relaxed">
            Preserving Khmer culinary art while pioneering sustainable hospitality in the heart of Cambodia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-brand-dark font-bold">More Than A Restaurant</h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Founded with the mission to celebrate and elevate authentic Cambodian cuisine, One More Restaurant serves as a cultural bridge. We believe that food is a living history, and every amok, soup, or grill we serve represents generational knowledge and refined artistry.
            </p>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Beyond gastronomy, we operate as a sustainable business. From employing 100% Cambodian staff to supporting local pesticide-free agriculture and implementing eco-friendly plastic reductions, our operations are designed to uplift the local community and nurture the earth.
            </p>
          </div>
          <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-xl">
            <img 
              alt="One More Garden wooden architecture" 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. BRANCH LOCATIONS */}
      <section className="mb-20 py-16 bg-brand-dark text-white rounded-[40px] px-6 sm:px-12 shadow-xl">
        <h2 className="text-3xl font-serif text-brand-gold text-center mb-12">Our Sanctuary Locations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Toul Kork branch */}
          <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8 text-left">
            <div>
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider">Traditional Garden Sanctuary</span>
              <h3 className="text-2xl font-serif text-white font-bold mt-1 mb-4">Toul Kork Branch</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                Nestled inside a lush tropical garden, our Toul Kork branch features classic wooden architectural pavilions, cozy outdoor patios, and state-of-the-art VIP private dining halls perfect for banquets and celebrations.
              </p>
            </div>
            
            <div className="space-y-3.5 text-xs text-white/80 font-light mt-auto">
              <div className="flex items-center gap-2.5">
                <MapPin className="text-brand-gold shrink-0" size={16} />
                <span>#37, Street 315, Toul Kork, Phnom Penh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="text-brand-gold shrink-0" size={16} />
                <a href="tel:+85515821888" className="underline hover:text-brand-gold">+855 15 821 888</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="text-brand-gold shrink-0" size={16} />
                <span>Open Daily: 6:00 AM - 10:00 PM</span>
              </div>
              <div className="pt-4">
                <a 
                  href="https://www.google.com/maps/search/One+More+Restaurant+Toul+Kork" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 bg-brand-gold hover:bg-brand-accent text-brand-dark hover:text-white font-bold rounded-full transition-colors"
                >
                  Get Directions on Maps
                </a>
              </div>
            </div>
          </div>

          {/* BKK1 branch */}
          <div className="flex flex-col justify-between text-left">
            <div>
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider">Modern City Sanctuary</span>
              <h3 className="text-2xl font-serif text-white font-bold mt-1 mb-4">Boeung Keng Kang 1 Branch</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                Located in Phnom Penh's premier shopping and dining district, our Norodom Blvd boutique sanctuary offers refined dining spaces and elegant private rooms designed specifically for corporate lunches, business discussions, and premium dates.
              </p>
            </div>
            
            <div className="space-y-3.5 text-xs text-white/80 font-light mt-auto">
              <div className="flex items-center gap-2.5">
                <MapPin className="text-brand-gold shrink-0" size={16} />
                <span>162 Preah Norodom Blvd, BKK1, Phnom Penh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="text-brand-gold shrink-0" size={16} />
                <a href="tel:+85523223888" className="underline hover:text-brand-gold">+855 23 223 888</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="text-brand-gold shrink-0" size={16} />
                <span>Open Daily: 6:00 AM - 10:00 PM</span>
              </div>
              <div className="pt-4">
                <a 
                  href="https://maps.app.goo.gl/QNh2DUu7QbqMTSkv6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 bg-brand-gold hover:bg-brand-accent text-brand-dark hover:text-white font-bold rounded-full transition-colors"
                >
                  Get Directions on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM INQUIRY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-5 text-left space-y-6">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Connect With Us</span>
          <h2 className="text-3xl font-serif text-brand-dark font-semibold">General Inquiries</h2>
          <p className="text-stone-500 text-sm font-light leading-relaxed">
            Have questions about franchise options, VIP space booking, table reservations, or diet inquiries? Shoot us a message and we'll reply as soon as possible.
          </p>
          <div className="space-y-4 text-xs text-stone-600 font-light pt-4 border-t border-stone-100">
            <div className="flex items-center gap-3">
              <Mail className="text-brand-accent shrink-0" size={16} />
              <span>info@onemorerestaurant.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-brand-accent shrink-0" size={16} />
              <span>+855 15 821 888 (HQ)</span>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-7 bg-white border border-brand-sage/20 shadow-xl rounded-3xl p-6 sm:p-10 text-left">
          {submitSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-10">
              <CheckCircle2 className="text-brand-accent w-16 h-16 mb-4 animate-bounce" />
              <h3 className="text-2xl font-serif text-brand-dark font-bold mb-2">Message Sent Successfully!</h3>
              <p className="text-stone-500 font-light text-sm max-w-sm mb-6">
                Thank you! We have received your inquiry. A brand manager will review your submission and email you back shortly.
              </p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-2.5 rounded-full bg-brand-primary hover:bg-brand-dark text-white text-xs font-semibold"
              >
                Send Another Message
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
                  <label className="text-[10px] font-bold uppercase text-stone-500">Your Name</label>
                  <input 
                    type="text" 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Jane Doe"
                    className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all" 
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase text-stone-500">Email Address</label>
                  <input 
                    type="email" 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com"
                    className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase text-stone-500">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Franchising Options">Franchising & Business Options</option>
                  <option value="Catering & Events">Catering & Banquet Packages</option>
                  <option value="Feedback / Complaints">Feedback & Guest Relations</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase text-stone-500">Your Message</label>
                <textarea 
                  rows={4} 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className="bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all" 
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-brand-accent hover:bg-brand-light text-white text-xs font-bold shadow-md transition-colors disabled:bg-stone-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending message..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
