import { ParkingSpotCard } from "./ParkingSpotCard";
import type { ParkingSpot } from "../types";

const FEATURED_SPOTS: ParkingSpot[] = [
  {
    id: "1",
    name: "Downtown Parking Complex",
    location: {
      lat: 40.7128,
      lng: -74.006,
      address: "123 Main St, Downtown",
    },
    pricePerHour: 15,
    available: true,
    totalSpots: 200,
    availableSpots: 45,
  },
  {
    id: "2",
    name: "Central Station Parking",
    location: {
      lat: 40.75,
      lng: -73.9967,
      address: "456 Park Ave, Central",
    },
    pricePerHour: 12,
    available: true,
    totalSpots: 150,
    availableSpots: 20,
  },
  {
    id: "3",
    name: "Harbor View Parking",
    location: {
      lat: 40.7023,
      lng: -74.0123,
      address: "789 Water St, Harbor",
    },
    pricePerHour: 18,
    available: false,
    totalSpots: 100,
    availableSpots: 0,
  },
];

export function FeaturedSpots() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Parking Spots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SPOTS.map((spot) => (
            <ParkingSpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </div>
    </section>
  );
}
