import { BarChart, Users, MapPin, Settings } from "lucide-react";

const stats = [
  { label: "Total Bookings", value: "1,234", icon: BarChart },
  { label: "Active Users", value: "891", icon: Users },
  { label: "Parking Spots", value: "56", icon: MapPin },
  { label: "Revenue", value: "$12,345", icon: Settings },
];

export function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 gap-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{label}</p>
                  <p className="text-lg font-semibold text-gray-900">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Recent Bookings
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[1, 2, 3].map((booking) => (
              <div key={booking} className="px-6 py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Booking #{booking}</p>
                    <p className="text-sm text-gray-500">User: John Doe</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
