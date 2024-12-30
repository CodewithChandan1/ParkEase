import { useAuthStore } from "../lib/store";
import { ParkingSpotCard } from "../components/ParkingSpotCard";

export function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 gap-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Current Bookings
          </h2>
          {user.bookings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <p className="font-semibold">{booking.spotId}</p>
                  <p className="text-gray-600">From: {booking.startTime}</p>
                  <p className="text-gray-600">To: {booking.endTime}</p>
                  <p className="mt-2 font-medium">
                    Total: ${booking.totalPrice}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No current bookings</p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Saved Locations
          </h2>
          {user.savedLocations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.savedLocations.map((spot) => (
                <ParkingSpotCard key={spot.id} spot={spot} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No saved locations</p>
          )}
        </section>
      </div>
    </div>
  );
}
