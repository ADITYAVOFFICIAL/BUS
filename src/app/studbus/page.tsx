'use client';

import React, { useEffect, useState } from 'react';

// Sample data type for Student
interface TravelHistory {
  date: string;
  route: string;
  busNumber: string;
}

interface Student {
  id: number;
  name: string;
  hasBoarded: boolean;
  travelHistory: TravelHistory[];
}

// Sample student data (this could be fetched from an API)
const sampleStudents: Student[] = [
  {
    id: 1,
    name: 'John Doe',
    hasBoarded: true,
    travelHistory: [
      { date: '2024-10-01', route: 'Campus to Hostel', busNumber: 'Bus 1' },
      { date: '2024-10-02', route: 'Hostel to Campus', busNumber: 'Bus 3' },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    hasBoarded: true,
    travelHistory: [
      { date: '2024-10-02', route: 'Campus to Library', busNumber: 'Bus 2' },
      { date: '2024-10-03', route: 'Library to Campus', busNumber: 'Bus 2' },
    ],
  },
  {
    id: 3,
    name: 'Alice Johnson',
    hasBoarded: false,
    travelHistory: [],
  },
];

const StudBus: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    // Simulating data fetch (you can replace this with an actual API call)
    const fetchStudents = async () => {
      setStudents(sampleStudents);
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Student Bus Boarding Details</h1>

      {/* Table for larger screens */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Student Name</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Has Boarded</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Travel History</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b text-gray-600">{student.name}</td>
                <td className="py-3 px-5 border-b text-gray-600">
                  {student.hasBoarded ? 'Yes' : 'No'}
                </td>
                <td className="py-3 px-5 border-b text-gray-600">
                  {student.hasBoarded ? (
                    <ul className="list-disc pl-5">
                      {student.travelHistory.map((travel, index) => (
                        <li key={index}>
                          {travel.date} - {travel.route} (Bus {travel.busNumber})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    'No travel history available'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card format for smaller screens */}
      <div className="md:hidden space-y-4">
        {students.map((student) => (
          <div key={student.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700">
              <span className="font-semibold">Student Name:</span> {student.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Has Boarded:</span> {student.hasBoarded ? 'Yes' : 'No'}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Travel History:</span>
              {student.hasBoarded ? (
                <ul className="list-disc pl-5">
                  {student.travelHistory.map((travel, index) => (
                    <li key={index}>
                      {travel.date} - {travel.route} (Bus {travel.busNumber})
                    </li>
                  ))}
                </ul>
              ) : (
                ' No travel history available'
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudBus;
