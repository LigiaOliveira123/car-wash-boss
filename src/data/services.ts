export type VehicleSize = 'hatch' | 'sedan' | 'suv';

export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  durationMinutes: number;
  icon: string;
}

export interface VehicleType {
  id: VehicleSize;
  label: string;
  description: string;
  priceMultiplier: number;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'simples',
    name: 'Lavagem Simples',
    description: 'Lavagem externa completa com shampoo automotivo e secagem.',
    basePrice: 40,
    durationMinutes: 30,
    icon: '💧',
  },
  {
    id: 'completa',
    name: 'Lavagem Completa',
    description: 'Lavagem externa e interna, aspiração, painel e vidros.',
    basePrice: 70,
    durationMinutes: 60,
    icon: '✨',
  },
  {
    id: 'cera',
    name: 'Lavagem com Cera',
    description: 'Lavagem completa com aplicação de cera protetora de longa duração.',
    basePrice: 100,
    durationMinutes: 90,
    icon: '🛡️',
  },
  {
    id: 'higienizacao',
    name: 'Higienização',
    description: 'Higienização profunda do interior, bancos, carpetes e ar-condicionado.',
    basePrice: 150,
    durationMinutes: 120,
    icon: '🧹',
  },
];

export const vehicleTypes: VehicleType[] = [
  {
    id: 'hatch',
    label: 'Pequeno (Hatch)',
    description: 'Gol, Onix, HB20, Argo',
    priceMultiplier: 1.0,
    icon: '🚗',
  },
  {
    id: 'sedan',
    label: 'Médio (Sedan)',
    description: 'Civic, Corolla, Cruze, Virtus',
    priceMultiplier: 1.3,
    icon: '🚙',
  },
  {
    id: 'suv',
    label: 'Grande (SUV/Caminhonete)',
    description: 'Compass, Tracker, Hilux, Ranger',
    priceMultiplier: 1.6,
    icon: '🚐',
  },
];

export function calculatePrice(service: Service, vehicleType: VehicleType): number {
  return Math.round(service.basePrice * vehicleType.priceMultiplier);
}

export const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30',
];
