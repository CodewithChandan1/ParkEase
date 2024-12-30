import { MapPin, Clock, Car } from "lucide-react";
import type { ParkingSpot } from "../types";

interface ParkingSpotCardProps {
  spot: ParkingSpot;
  onClick?: () => void;
}

export function ParkingSpotCard({ spot, onClick }: ParkingSpotCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">{spot.name}</h3>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {spot.available ? "Available" : "Full"}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{spot.location.address}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">${spot.pricePerHour}/hour</span>
        </div>

        <div className="flex items-center text-gray-600">
          <Car className="h-4 w-4 mr-2" />
          <span className="text-sm">
            {spot.availableSpots} / {spot.totalSpots} spots available
          </span>
        </div>
      </div>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
        Book Now
      </button>
    </div>
  );
}
