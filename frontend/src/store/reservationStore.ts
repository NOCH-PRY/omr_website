import { create } from "zustand";

export interface ReservationState {
  branchId: string;
  date: string;
  timeSlot: string;
  guests: number;
  diningArea: string;
  specialRequests: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  
  isSubmitting: boolean;
  submitError: string | null;
  submitSuccess: boolean;

  setBookingDetails: (details: Partial<Omit<ReservationState, "isSubmitting" | "submitError" | "submitSuccess" | "setBookingDetails" | "submitReservation" | "resetBooking">>) => void;
  resetBooking: () => void;
  submitReservation: (apiUrl: string) => Promise<boolean>;
}

export const useReservationStore = create<ReservationState>((set, get) => ({
  branchId: "1", // Defaults to first branch (Toul Kork)
  date: "",
  timeSlot: "19:00",
  guests: 2,
  diningArea: "General Hall",
  specialRequests: "",
  customerName: "",
  customerPhone: "",
  customerEmail: "",
  
  isSubmitting: false,
  submitError: null,
  submitSuccess: false,

  setBookingDetails: (details) => set((state) => ({ ...state, ...details })),

  resetBooking: () => set({
    branchId: "1",
    date: "",
    timeSlot: "19:00",
    guests: 2,
    diningArea: "General Hall",
    specialRequests: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    isSubmitting: false,
    submitError: null,
    submitSuccess: false,
  }),

  submitReservation: async (apiUrl) => {
    set({ isSubmitting: true, submitError: null, submitSuccess: false });
    const {
      branchId,
      date,
      timeSlot,
      guests,
      diningArea,
      specialRequests,
      customerName,
      customerPhone,
      customerEmail,
    } = get();

    try {
      const response = await fetch(`${apiUrl}/api/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: parseInt(branchId),
          reservation_date: date,
          reservation_time: timeSlot,
          guest_count: guests,
          area: diningArea,
          special_requests: specialRequests,
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_email: customerEmail,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: "Failed to submit reservation" }));
        throw new Error(errorData.detail || "Failed to submit reservation");
      }

      set({ isSubmitting: false, submitSuccess: true });
      return true;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      set({ isSubmitting: false, submitError: message || "An unexpected error occurred" });
      return false;
    }
  },
}));
