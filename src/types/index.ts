export interface ParkingSpot {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  pricePerHour: number;
  available: boolean;
  totalSpots: number;
  availableSpots: number;
}

export interface Booking {
  id: string;
  spotId: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  bookings: Booking[];
  savedLocations: ParkingSpot[];
}