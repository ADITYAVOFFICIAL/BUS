import React from 'react';

interface Notice {
  title: string;
  date: string;
  postedBy: string;
  content: string;
}

const noticesData: Notice[] = [
  {
    title: 'Bus Schedule Update',
    date: '2024-10-15',
    postedBy: 'Transport Department',
    content: 'The bus schedule has been updated. Please check the new timings.',
  },
  {
    title: 'Maintenance Alert',
    date: '2024-10-12',
    postedBy: 'Facilities Management',
    content: 'Routine maintenance will be performed on October 20. Expect delays in bus services.',
  },
  {
    title: 'New Bus Routes',
    date: '2024-10-10',
    postedBy: 'Administration',
    content: 'New bus routes have been introduced for better connectivity.',
  },
  // Add more notices as needed
];

const Notice: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Latest Notices</h1>
      <div className="space-y-4">
        {noticesData.map((notice, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">{notice.title}</h2>
            <p className="text-gray-500 text-sm">Posted on: {notice.date} by {notice.postedBy}</p>
            <p className="mt-2 text-gray-700">{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
