import React, { useState } from 'react';
import { ParkingMap } from '../components/map/ParkingMap';
import { BookingForm } from '../components/booking/BookingForm';
import type { ParkingSpot } from '../types';

const SAMPLE_SPOTS: ParkingSpot[] = [
  {
    id: '1',
    name: 'Downtown Parking',
    location: { lat: 40.7128, lng: -74.006, address: '123 Main St' },
    pricePerHour: 15,
    available: true,
    totalSpots: 100,
    availableSpots: 45
  },
  // Add more sample spots
];

export function MapPage() {
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);

  const handleBooking = (data: { startTime: string; endTime: string }) => {
    console.log('Booking:', { spot: selectedSpot, ...data });
    // Handle booking logic
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ParkingMap spots={SAMPLE_SPOTS} onSpotSelect={setSelectedSpot} />
        </div>
        <div>
          {selectedSpot ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">{selectedSpot.name}</h2>
              <BookingForm spot={selectedSpot} onSubmit={handleBooking} />
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-500">Select a parking spot on the map to book</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}