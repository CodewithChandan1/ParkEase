import { MapPin, Phone, Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600">123 Parking Street</p>
            <p className="text-gray-600">New York, NY 10001</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">support@parkease.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
