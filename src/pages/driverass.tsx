import React, { useState } from 'react';

interface Driver {
  name: string;
  busNumber: string;
  capacity: number;
  schedule: string;
  route: string;
}

const driverAssignmentData: Driver[] = [
  { name: 'John Doe', busNumber: '101', capacity: 30, schedule: '09:00 AM - 05:00 PM', route: 'Main Campus - Library' },
  { name: 'Jane Smith', busNumber: '102', capacity: 50, schedule: '08:00 AM - 08:00 PM', route: 'Hostel - Main Campus' },
  { name: 'Alice Johnson', busNumber: '103', capacity: 25, schedule: '10:00 AM - 06:00 PM', route: 'Faculty - Admin Block' },
  // Add more driver assignment data as needed
];

const DriverAssignment: React.FC = () => {
  const [assignments] = useState(driverAssignmentData);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Driver Assignment</h1>
      
      {/* Table for larger screens */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Driver Name</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Bus Number</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Capacity</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Schedule</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Route</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b text-gray-600">{assignment.name}</td>
                <td className="py-3 px-5 border-b text-gray-600">{assignment.busNumber}</td>
                <td className="py-3 px-5 border-b text-gray-600">{assignment.capacity}</td>
                <td className="py-3 px-5 border-b text-gray-600">{assignment.schedule}</td>
                <td className="py-3 px-5 border-b text-gray-600">{assignment.route}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card format for smaller screens */}
      <div className="md:hidden space-y-4">
        {assignments.map((assignment, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700">
              <span className="font-semibold">Driver Name:</span> {assignment.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Bus Number:</span> {assignment.busNumber}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Capacity:</span> {assignment.capacity}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Schedule:</span> {assignment.schedule}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Route:</span> {assignment.route}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverAssignment;
