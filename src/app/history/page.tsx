"use client";
import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const travelHistoryData = [
  { busNumber: '123', route: 'Route A', date: '2023-10-01', time: '08:00 AM' },
  { busNumber: '456', route: 'Route B', date: '2023-10-02', time: '09:00 AM' },
  // Add more data as needed
];

const TravelHistory: React.FC = () => {
  const [history] = useState(travelHistoryData);

  // Function to export table data to CSV
  const exportToCSV = () => {
    const csvRows = [
      ['Bus Number', 'Route', 'Date', 'Time'],
      ...history.map(item => [item.busNumber, item.route, item.date, item.time])
    ];

    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'travel_history.csv');
  };

  // Function to export table data to PDF with a watermark footer
  const exportToPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['Bus Number', 'Route', 'Date', 'Time']],
      body: history.map(item => [item.busNumber, item.route, item.date, item.time]),
    });

    // Add watermark footer
    const pageHeight = doc.internal.pageSize.height;
    const footerText = 'Developed by Aditya Verma';
    const textWidth = doc.getTextWidth(footerText);
    const x = doc.internal.pageSize.getWidth() - textWidth - 10; // 10 units padding from right
    const y = pageHeight - 10; // 10 units padding from bottom

    doc.setFontSize(8); // Set font size to 8
    doc.setTextColor(192, 192, 192); // Set color to light grey (RGB)
    doc.text(footerText, x, y, { align: 'right' });

    doc.save('travel_history.pdf');
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Travel History</h1>
      
      {/* Table view for larger screens */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Bus Number</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Route</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Date</th>
              <th className="py-3 px-5 text-left text-gray-700 border-b">Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b text-gray-600">{item.busNumber}</td>
                <td className="py-3 px-5 border-b text-gray-600">{item.route}</td>
                <td className="py-3 px-5 border-b text-gray-600">{item.date}</td>
                <td className="py-3 px-5 border-b text-gray-600">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for smaller screens */}
      <div className="md:hidden space-y-4">
        {history.map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700">
              <span className="font-semibold">Bus Number:</span> {item.busNumber}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Route:</span> {item.route}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span> {item.date}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Time:</span> {item.time}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <button onClick={exportToCSV} className="mr-10 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          Export to CSV
        </button>
        <button onClick={exportToPDF} className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
          Export to PDF
        </button>
      </div>
    </div>
  );
};

export default TravelHistory;
