import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  CheckCircle2, 
  AlertTriangle, 
  Menu, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { useReservationStore } from "../../store/reservationStore";
import { appConfig } from "../../config/appConfig";
import imgHeader30 from "../../assets/omr_bk_night.jpg";
import imgLogoCircle from "../../assets/omr_logo.png";
import { toast } from "sonner";
import "./index.css";

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
  guests: z.number().min(1, "Must have at least 1 guest").max(10, "Reservations are capped at 10 guests online"),
  diningArea: z.string().min(1, "Please select a dining area"),
  customerName: z.string().min(2, "Name must be at least 2 characters long"),
  customerPhone: z.string().min(8, "Phone number must be at least 8 digits").regex(/^\+?[0-9\s-]{8,15}$/, "Please enter a valid phone number"),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

// Custom Calendar Component with integrated time selection
function CalendarWidget({ value, onChange }: { value: string; onChange: (dateTime: string) => void }) {
  const today = new Date();
  const initialDate = value ? new Date(value) : today;
  const [selectedDate, setSelectedDate] = React.useState<Date>(initialDate);
  const [hour, setHour] = React.useState<string>("12");
  const [minute, setMinute] = React.useState<string>("00");
  const [period, setPeriod] = React.useState<"AM" | "PM">("PM");
  const [currentMonth, setCurrentMonth] = React.useState<number>(initialDate.getMonth());
  const [currentYear, setCurrentYear] = React.useState<number>(initialDate.getFullYear());

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const years = Array.from({ length: 5 }, (_, i) => today.getFullYear() + i);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDaySelect = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
  };

  const updateDateTime = () => {
    const yyyy = selectedDate.getFullYear();
    const mm = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const dd = String(selectedDate.getDate()).padStart(2, "0");
    onChange(`${yyyy}-${mm}-${dd}`);
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "" || (parseInt(val) >= 1 && parseInt(val) <= 12)) {
      setHour(val || "1");
      updateDateTime();
    }
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "" || (parseInt(val) >= 0 && parseInt(val) <= 59)) {
      setMinute(val.padStart(2, "0") || "00");
      updateDateTime();
    }
  };

  const handlePeriodChange = (newPeriod: "AM" | "PM") => {
    setPeriod(newPeriod);
    updateDateTime();
  };

  const days = [];
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const isDateSelected = selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg border border-stone-200/50 w-full max-w-sm mx-auto text-stone-800">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <button type="button" onClick={handlePrevMonth} className="p-1 hover:bg-stone-100 rounded-full transition-colors text-stone-600">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5 items-center">
          <select 
            value={currentMonth}
            onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
            className="text-xs sm:text-sm font-semibold text-stone-700 bg-transparent border-none outline-none cursor-pointer focus:ring-0 focus:outline-none py-0.5"
          >
            {months.map((m, idx) => (
              <option key={m} value={idx}>{m}</option>
            ))}
          </select>
          <select 
            value={currentYear}
            onChange={(e) => setCurrentYear(parseInt(e.target.value))}
            className="text-xs sm:text-sm font-semibold text-stone-700 bg-transparent border-none outline-none cursor-pointer focus:ring-0 focus:outline-none py-0.5"
          >
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleNextMonth} className="p-1 hover:bg-stone-100 rounded-full transition-colors text-stone-600">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-stone-400 mb-2 uppercase tracking-wider">
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-y-1 gap-x-1.5 text-center text-xs mb-5">
        {days.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} />;
          }

          const isSelected = selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear;

          return (
            <button
              key={day}
              type="button"
              onClick={() => handleDaySelect(day)}
              className={`w-7.5 h-7.5 mx-auto rounded-full flex items-center justify-center transition-all ${
                isSelected 
                  ? "bg-stone-900 text-white font-bold scale-105" 
                  : "hover:bg-stone-100 text-stone-700 font-light"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Time Input */}
      {isDateSelected && (
        <div className="border-t border-stone-200 pt-4">
          <p className="text-xs font-semibold text-stone-700 mb-3 text-center">Select dining time</p>
          <div className="flex items-center justify-center gap-2">
            {/* Hour Input */}
            <div className="flex flex-col items-center">
              <input
                type="number"
                min="1"
                max="12"
                value={hour}
                onChange={handleHourChange}
                className="w-12 px-2 py-2 text-center text-sm font-semibold text-stone-800 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
              <span className="text-[10px] text-stone-500 mt-1">Hour</span>
            </div>

            {/* Separator */}
            <span className="text-lg font-bold text-stone-700">:</span>

            {/* Minute Input */}
            <div className="flex flex-col items-center">
              <input
                type="number"
                min="0"
                max="59"
                value={minute}
                onChange={handleMinuteChange}
                className="w-12 px-2 py-2 text-center text-sm font-semibold text-stone-800 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
              <span className="text-[10px] text-stone-500 mt-1">Minute</span>
            </div>

            {/* AM/PM Toggle */}
            <div className="flex gap-1 ml-2">
              <button
                type="button"
                onClick={() => handlePeriodChange("AM")}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                  period === "AM"
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                AM
              </button>
              <button
                type="button"
                onClick={() => handlePeriodChange("PM")}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                  period === "PM"
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                PM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReservationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { 
    isSubmitting, 
    submitError, 
    submitSuccess, 
    setBookingDetails, 
    submitReservation, 
    resetBooking 
  } = useReservationStore();

  const initialBranch = location.state?.branch === "BKK1" ? "BKK1" : "Toul Kork";
  const [selectedBranch, setSelectedBranch] = React.useState<"Toul Kork" | "BKK1">(initialBranch);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    watch
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      branchId: initialBranch === "Toul Kork" ? "1" : "2",
      guests: 2,
      timeSlot: "19:00",
      diningArea: "Indoor",
      customerName: "",
      customerPhone: "",
      date: new Date().toISOString().split("T")[0],
    }
  });

  const watchGuests = watch("guests") ?? 2;

  const handleBranchToggle = () => {
    const nextBranch = selectedBranch === "Toul Kork" ? "BKK1" : "Toul Kork";
    setSelectedBranch(nextBranch);
    setValue("branchId", nextBranch === "Toul Kork" ? "1" : "2");
    toast.success(`Switched branch to: ${nextBranch === "Toul Kork" ? "Toul Kork" : "Boeung Keng Kang 1"}`);
  };

  const onSubmit = async (data: ReservationFormData) => {
    let backendArea = data.diningArea;
    if (data.diningArea === "Indoor") backendArea = "General Hall";
    if (data.diningArea === "Outdoor") backendArea = "Garden Terrace";

    const cleanName = data.customerName.trim().replace(/\s+/g, "").toLowerCase() || "guest";
    const generatedEmail = `${cleanName}@guest.onemore.com`;

    setBookingDetails({
      branchId: data.branchId,
      date: data.date,
      timeSlot: data.timeSlot,
      guests: data.guests,
      diningArea: backendArea,
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      customerEmail: generatedEmail,
      specialRequests: "Online booking via custom glassmorphic web form.",
    });

    const success = await submitReservation(appConfig.apiUrl);
    if (success) {
      toast.success("Reservation request logged successfully!");
      reset({
        branchId: selectedBranch === "Toul Kork" ? "1" : "2",
        guests: 2,
        timeSlot: "19:00",
        diningArea: "Indoor",
        customerName: "",
        customerPhone: "",
        date: new Date().toISOString().split("T")[0],
      });
    }
  };

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-start pb-16 bg-cover bg-center overflow-x-hidden" 
      style={{ backgroundImage: `url(${imgHeader30})`, backgroundAttachment: "fixed" }}
    >
      {/* Dark translucent blur background overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[6px] z-0" />

      {/* HEADER SECTION */}
      <header className="relative z-10 w-full max-w-7xl px-5 sm:px-10 h-20 flex items-center justify-between border-b border-white/10 mb-8 sm:mb-12">
        <button 
          onClick={() => navigate("/")} 
          className="p-1 text-white hover:text-brand-gold transition-colors focus:outline-none"
          aria-label="Home"
        >
          <Menu size={28} />
        </button>

        <div className="w-12 h-12 cursor-pointer transition-transform hover:scale-105" onClick={() => navigate("/")}>
          <img src={imgLogoCircle} alt="One More Logo" className="w-full h-full object-contain" />
        </div>

        <button 
          onClick={handleBranchToggle}
          className="px-5 py-2.5 rounded-full bg-[#4f6f3b] text-white hover:bg-[#3f5c2c] text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Other Branch
        </button>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 w-full max-w-2xl px-4 flex flex-col items-center">
        
        {/* Glassmorphic Panel Card */}
        <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[36px] shadow-2xl p-6 sm:p-10 text-center flex flex-col items-center gap-6">
          
          {/* Reservation Header Title */}
          <div className="flex flex-col items-center">
            <h1 
              className="text-white text-3xl sm:text-4.5xl font-serif tracking-wide relative pb-2 select-none border-b-2 border-white/30"
              style={{ fontFamily: "'Philosopher', serif", color: "#ffffff" }}
            >   
              Reservation
            </h1>
          </div>

          {/* Description Texts */}
          <div className="space-y-4 max-w-lg text-center select-none text-white/95">
            <p className="text-xs leading-relaxed font-light text-stone-200">
              *Reservations must be made at least 24 hours in advance. Once your submission has been received, our team will contact you for confirmation.*
            </p>
            <p className="text-xs leading-relaxed font-light text-stone-300">
              Thank you for choosing and supporting us. We look forward to serving you and wish you an enjoyable dining experience.
            </p>
          </div>

          {/* SUCCESS STATE */}
          {submitSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
              <CheckCircle2 className="text-[#8bb974] w-20 h-20 mb-5 animate-pulse" />
              <h3 className="text-2xl font-serif text-white font-bold mb-2">Booking Received!</h3>
              <p className="text-stone-300 font-light max-w-sm mb-6 leading-relaxed text-sm">
                Your reservation request for {selectedBranch} Branch has been logged. Our host will review your details and contact you via phone/Telegram shortly to confirm.
              </p>
              <button 
                onClick={resetBooking} 
                className="px-8 py-3 rounded-full bg-[#426232] hover:bg-[#304625] text-white text-sm font-semibold transition-colors shadow-lg cursor-pointer"
              >
                Book Another Table
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6 flex flex-col items-stretch text-left">
              
              {submitError && (
                <div className="flex items-center gap-3 bg-red-950/60 border border-red-500/30 text-red-200 p-4 rounded-2xl text-xs">
                  <AlertTriangle className="shrink-0 text-red-400" size={16} />
                  <p>{submitError}</p>
                </div>
              )}

              {/* Form Date Picker Calendar with integrated time selection */}
              <div className="flex flex-col gap-1.5">
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <CalendarWidget value={field.value} onChange={field.onChange} />
                  )}
                />
                {errors.date && <p className="text-red-300 text-xs mt-1 text-center font-light">{errors.date.message}</p>}
              </div>

              {/* Customer Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/95 tracking-wide">Full name:</label>
                  <input 
                    type="text" 
                    placeholder="e.g: Soun Nith"
                    {...register("customerName")}
                    className="w-full bg-white text-stone-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#8bb974] focus:border-transparent transition-all border border-stone-200 font-light shadow-sm" 
                  />
                  {errors.customerName && <p className="text-red-300 text-[10px] mt-0.5">{errors.customerName.message}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/95 tracking-wide">Phone number (Telegram)</label>
                  <input 
                    type="tel" 
                    placeholder="01x xxx xxx"
                    {...register("customerPhone")}
                    className="w-full bg-white text-stone-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#8bb974] focus:border-transparent transition-all border border-stone-200 font-light shadow-sm" 
                  />
                  {errors.customerPhone && <p className="text-red-300 text-[10px] mt-0.5">{errors.customerPhone.message}</p>}
                </div>
              </div>

              {/* Guests and Table selections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-end">
                {/* Number of Guest Slider */}
                <div className="flex flex-col gap-1.5 font-light">
                  <label className="text-xs font-semibold text-white/95 tracking-wide">Number of guest</label>
                  <div className="relative pt-6 flex flex-col gap-1">
                    {/* Floating Bubble over the range thumb */}
                    <div 
                      className="absolute bottom-full mb-1 bg-[#426232] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md pointer-events-none select-none transition-all duration-75"
                      style={{ 
                        left: `calc(${((watchGuests - 1) / 9) * 100}% - ${(((watchGuests - 1) / 9) * 18) - 9}px)`,
                        transform: "translateX(-50%)"
                      }}
                    >
                      {watchGuests}
                      {/* Triangle pointer at the bottom of the bubble */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#426232]" />
                    </div>

                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      {...register("guests", { valueAsNumber: true })}
                      className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#426232] select-none slider-thumb"
                    />
                    <div className="flex justify-between text-[10px] text-white/80 select-none font-light">
                      <span>1</span>
                      <span>10</span>
                    </div>
                  </div>
                  {errors.guests && <p className="text-red-300 text-[10px] mt-0.5">{errors.guests.message}</p>}
                </div>

                {/* Table Preference Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/95 tracking-wide">Table</label>
                  <div className="relative">
                    <select
                      {...register("diningArea")}
                      className="w-full bg-white text-stone-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#8bb974] focus:border-transparent transition-all border border-stone-200 font-light shadow-sm cursor-pointer appearance-none"
                    >
                      <option value="Indoor">Indoor</option>
                      <option value="Outdoor">Outdoor</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                      ▼
                    </div>
                  </div>
                  {errors.diningArea && <p className="text-red-300 text-[10px] mt-0.5">{errors.diningArea.message}</p>}
                </div>
              </div>

              {/* Info about the pre-selected branch */}
              <div className="text-center sm:text-left text-[11px] text-stone-300 select-none bg-white/5 py-2 px-4 rounded-xl border border-white/5 self-center sm:self-auto w-fit">
                Branch: <span className="text-white font-semibold">{selectedBranch === "Toul Kork" ? "One More Toul Kork" : "One More Boeung Keng Kang 1"}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto self-center mt-4 px-12 py-3 rounded-full bg-[#426232] hover:bg-[#334c26] text-white font-semibold text-sm shadow-lg tracking-wide transition-all active:scale-95 disabled:bg-stone-500 disabled:cursor-not-allowed select-none cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}

          {/* Skip the wait Link */}
          <a 
            href="/menu" 
            onClick={(e) => { e.preventDefault(); navigate("/menu"); }} 
            className="text-xs text-white underline select-none font-light hover:text-brand-gold transition-colors tracking-wide cursor-pointer"
          >
            Skip the wait. Pre-order now!
          </a>

        </div>
      </main>
    </div>
  );
}
