import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertTriangle, Calendar, Users, MapPin, Clock, Coffee } from "lucide-react";
import { useReservationStore } from "../../store/reservationStore";
import { appConfig } from "../../config/appConfig";

// Zod Schema for Booking Form Validation
const reservationSchema = z.object({
  branchId: z.string().min(1, "Please select a branch"),
  date: z.string().min(1, "Date is required").refine((val) => {
    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Reservation date cannot be in the past"),
  timeSlot: z.string().min(1, "Please select a dining time"),
  guests: z.number().min(1, "Must have at least 1 guest").max(30, "For groups over 30, please contact us directly"),
  diningArea: z.string().min(1, "Please select a dining area"),
  specialRequests: z.string().optional(),
  customerName: z.string().min(2, "Name must be at least 2 characters long"),
  customerPhone: z.string().min(8, "Phone number must be at least 8 digits").regex(/^\+?[0-9\s-]{8,15}$/, "Please enter a valid phone number"),
  customerEmail: z.string().email("Please enter a valid email address"),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export default function ReservationPage() {
  const { 
    isSubmitting, 
    submitError, 
    submitSuccess, 
    setBookingDetails, 
    submitReservation, 
    resetBooking 
  } = useReservationStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      branchId: "1",
      guests: 2,
      timeSlot: "19:00",
      diningArea: "General Hall",
      specialRequests: "",
      customerName: "",
      customerPhone: "",
      customerEmail: "",
    }
  });

  const onSubmit = async (data: ReservationFormData) => {
    // Sync React Hook Form data with Zustand Store
    setBookingDetails(data);
    
    // Call submit action
    const success = await submitReservation(appConfig.apiUrl);
    if (success) {
      reset(); // Reset form inputs on success
    }
  };

  const selectedArea = useWatch({ control, name: "diningArea" }) ?? "General Hall";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Book A Table</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-brand-dark mt-2 mb-4">Reservation Sanctuary</h1>
        <p className="text-stone-600 font-light leading-relaxed">
          Reserve your table online and experience the ultimate hospitality and authentic Khmer flavors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Info & Tips */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Branch card highlights */}
          <div className="bg-brand-dark text-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-lg font-serif text-brand-gold font-semibold mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
              <MapPin size={18} /> Our Branches
            </h3>
            <div className="flex flex-col gap-4 text-xs font-light leading-relaxed">
              <div>
                <p className="font-semibold text-sm text-white">One More Toul Kork</p>
                <p className="text-white/70">#37, Street 315, Toul Kork, Phnom Penh</p>
                <p className="text-brand-gold mt-1">+855 15 821 888</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-sm text-white">One More BKK1</p>
                <p className="text-white/70">162 Preah Norodom Blvd, BKK1, Phnom Penh</p>
                <p className="text-brand-gold mt-1">+855 23 223 888</p>
              </div>
            </div>
          </div>

          {/* Dining area specifications */}
          <div className="bg-white rounded-3xl p-6 border border-brand-sage/20 shadow-lg text-left">
            <h3 className="text-lg font-serif text-brand-dark font-semibold mb-4 flex items-center gap-2 border-b border-stone-100 pb-3">
              <Coffee size={18} /> Dining Venues
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-stone-600 font-light">
              <li className={`p-2.5 rounded-xl transition-all duration-300 ${selectedArea === "General Hall" ? "bg-brand-sage/10 border-l-4 border-brand-accent text-brand-dark font-medium" : ""}`}>
                <p className="font-semibold">General Hall</p>
                <p className="text-stone-400 mt-0.5">Classic Khmer elegance. Family & causal dining.</p>
              </li>
              <li className={`p-2.5 rounded-xl transition-all duration-300 ${selectedArea === "Garden Terrace" ? "bg-brand-sage/10 border-l-4 border-brand-accent text-brand-dark font-medium" : ""}`}>
                <p className="font-semibold">Garden Terrace</p>
                <p className="text-stone-400 mt-0.5">Tropical outdoor dining under the stars.</p>
              </li>
              <li className={`p-2.5 rounded-xl transition-all duration-300 ${selectedArea === "VIP Room" ? "bg-brand-sage/10 border-l-4 border-brand-accent text-brand-dark font-medium" : ""}`}>
                <p className="font-semibold">Private VIP Room</p>
                <p className="text-stone-400 mt-0.5">Intimate rooms (up to 12 guests) with high privacy.</p>
              </li>
              <li className={`p-2.5 rounded-xl transition-all duration-300 ${selectedArea === "VVIP Room" ? "bg-brand-sage/10 border-l-4 border-brand-accent text-brand-dark font-medium" : ""}`}>
                <p className="font-semibold">Grand VVIP Room</p>
                <p className="text-stone-400 mt-0.5">Exclusive banquet rooms (up to 30 guests) with custom set menu.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Reservation Form */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-3xl border border-brand-sage/20 shadow-xl p-6 sm:p-10 text-left">
            
            {/* SUCCESS STATE */}
            {submitSuccess && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="text-brand-accent w-16 h-16 mb-4 animate-bounce" />
                <h3 className="text-2xl font-serif text-brand-dark font-bold mb-2">Reservation Request Received!</h3>
                <p className="text-stone-500 font-light max-w-md mb-6 leading-relaxed text-sm">
                  Thank you! Your table booking has been successfully logged. Our hospitality host will review details and send a confirmation SMS or email shortly.
                </p>
                <button 
                  onClick={resetBooking} 
                  className="px-6 py-2.5 rounded-full bg-brand-primary hover:bg-brand-dark text-white text-sm font-semibold transition-colors"
                >
                  Make Another Booking
                </button>
              </div>
            )}

            {/* FORM STATE */}
            {!submitSuccess && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {submitError && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm">
                    <AlertTriangle className="shrink-0" size={18} />
                    <p>{submitError}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Branch Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">Select Branch</label>
                    <select 
                      {...register("branchId")}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    >
                      <option value="1">Toul Kork Branch</option>
                      <option value="2">BKK1 Branch</option>
                    </select>
                    {errors.branchId && <p className="text-red-500 text-xs mt-1">{errors.branchId.message}</p>}
                  </div>

                  {/* Guests count */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider flex items-center gap-1"><Users size={12}/> Guests</label>
                    <input 
                      type="number" 
                      min="1" 
                      max="30"
                      {...register("guests", { valueAsNumber: true })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all" 
                    />
                    {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider flex items-center gap-1"><Calendar size={12}/> Dining Date</label>
                    <input 
                      type="date" 
                      {...register("date")}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all" 
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                  </div>

                  {/* Time slot Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider flex items-center gap-1"><Clock size={12}/> Time Slot</label>
                    <select 
                      {...register("timeSlot")}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    >
                      <option value="11:30">11:30 AM (Lunch)</option>
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:00">01:00 PM (Lunch)</option>
                      <option value="17:30">05:30 PM (Dinner)</option>
                      <option value="18:00">06:00 PM (Dinner)</option>
                      <option value="18:30">06:30 PM (Dinner)</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="19:30">07:30 PM (Dinner)</option>
                      <option value="20:00">08:00 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Dinner)</option>
                    </select>
                    {errors.timeSlot && <p className="text-red-500 text-xs mt-1">{errors.timeSlot.message}</p>}
                  </div>
                </div>

                {/* Seating Area selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">Dining Area Preference</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { val: "General Hall", desc: "Hall" },
                      { val: "Garden Terrace", desc: "Garden" },
                      { val: "VIP Room", desc: "VIP Room" },
                      { val: "VVIP Room", desc: "VVIP Room" },
                    ].map((area) => (
                      <label 
                        key={area.val} 
                        className={`border rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer text-center select-none transition-all ${
                          selectedArea === area.val 
                            ? "border-brand-accent bg-brand-sage/10 text-brand-dark font-medium shadow-sm" 
                            : "border-stone-200 hover:bg-stone-50 text-stone-600 text-xs font-light"
                        }`}
                      >
                        <input 
                          type="radio" 
                          value={area.val} 
                          {...register("diningArea")} 
                          className="sr-only" 
                        />
                        <span className="text-sm font-semibold">{area.desc}</span>
                      </label>
                    ))}
                  </div>
                  {errors.diningArea && <p className="text-red-500 text-xs mt-1">{errors.diningArea.message}</p>}
                </div>

                {/* Section Divider: Customer Details */}
                <div className="border-t border-stone-100 pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-4">Customer Details</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-stone-500">Contact Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        {...register("customerName")}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all" 
                      />
                      {errors.customerName && <p className="text-red-500 text-xs mt-1">{errors.customerName.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-stone-500">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="015 821 888"
                        {...register("customerPhone")}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all" 
                      />
                      {errors.customerPhone && <p className="text-red-500 text-xs mt-1">{errors.customerPhone.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-stone-500">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        {...register("customerEmail")}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all" 
                      />
                      {errors.customerEmail && <p className="text-red-500 text-xs mt-1">{errors.customerEmail.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">Special Requests / Occasions</label>
                  <textarea 
                    rows={3} 
                    placeholder="E.g., high chair for baby, celebrating birthday anniversary, kampot pepper dietary allergy..."
                    {...register("specialRequests")}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all" 
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-brand-accent hover:bg-brand-light text-white font-bold text-base shadow-lg transition-all duration-300 disabled:bg-stone-300 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  {isSubmitting ? "Logging Reservation..." : "Confirm Reservation Request"}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
