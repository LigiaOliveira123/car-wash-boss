import { create } from 'zustand';
import type { Service, VehicleType } from '@/data/services';

export interface BookingState {
  step: number;
  service: Service | null;
  vehicleType: VehicleType | null;
  date: Date | null;
  time: string | null;
  plate: string;
  model: string;
  color: string;
  clientName: string;
  clientPhone: string;
  setStep: (step: number) => void;
  setService: (service: Service) => void;
  setVehicleType: (vehicleType: VehicleType) => void;
  setDate: (date: Date) => void;
  setTime: (time: string) => void;
  setVehicleDetails: (plate: string, model: string, color: string) => void;
  setClientDetails: (name: string, phone: string) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  step: 0,
  service: null,
  vehicleType: null,
  date: null,
  time: null,
  plate: '',
  model: '',
  color: '',
  clientName: '',
  clientPhone: '',
  setStep: (step) => set({ step }),
  setService: (service) => set({ service, step: 1 }),
  setVehicleType: (vehicleType) => set({ vehicleType, step: 2 }),
  setDate: (date) => set({ date }),
  setTime: (time) => set({ time, step: 3 }),
  setVehicleDetails: (plate, model, color) => set({ plate, model, color, step: 4 }),
  setClientDetails: (clientName, clientPhone) => set({ clientName, clientPhone, step: 5 }),
  reset: () => set({
    step: 0,
    service: null,
    vehicleType: null,
    date: null,
    time: null,
    plate: '',
    model: '',
    color: '',
    clientName: '',
    clientPhone: '',
  }),
}));
