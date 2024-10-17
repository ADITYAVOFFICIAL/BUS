"use client";
import React, { useState } from 'react';

interface Bus {
  busNumber: string;
  busType: 'Faculty' | 'Student';
  capacity: number;
  schedule: string;
}

const busAvailabilityData: Bus[] = [
  { busNumber: '101', busType: 'Faculty', capacity: 30, schedule: '09:00 AM - 05:00 PM' },
  { busNumber: '102', busType: 'Student', capacity: 50, schedule: '08:00 AM - 08:00 PM' },
  { busNumber: '103', busType: 'Faculty', capacity: 25, schedule: '10:00 AM - 06:00 PM' },
  { busNumber: '104', busType: 'Student', capacity: 45, schedule: '09:00 AM - 09:00 PM' },
  // Add more bus data as needed
];

const BusAvailability: React.FC = () => {
  const [buses] = useState(busAvailabilityData);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Bus Availability</h1>
      
      {/* Table for larger screens */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Bus Number</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Type</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Capacity</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Schedule</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b text-gray-600">{bus.busNumber}</td>
                <td className="py-3 px-5 border-b text-gray-600">{bus.busType}</td>
                <td className="py-3 px-5 border-b text-gray-600">{bus.capacity}</td>
                <td className="py-3 px-5 border-b text-gray-600">{bus.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card format for smaller screens */}
      <div className="md:hidden space-y-4">
        {buses.map((bus, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700">
              <span className="font-semibold">Bus Number:</span> {bus.busNumber}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Type:</span> {bus.busType}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Capacity:</span> {bus.capacity}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Schedule:</span> {bus.schedule}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusAvailability;
