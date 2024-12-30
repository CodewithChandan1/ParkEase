import { Car, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../lib/store";

export function Header() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              ParkEase
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/map"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Find Parking
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Dashboard
                </Link>
                <Link
                  to="/bookings"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  My Bookings
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
