import React, { useState } from 'react';
import '../app/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Profile: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string>('/profile.png');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-6 space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="w-full lg:w-8/12">
        <div className="relative border border-gray-300 rounded-lg mb-2 bg-white shadow">
          <div className="bg-blue-700 text-white rounded-t-lg p-4 flex items-center">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" /> Student Profile
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="font-semibold w-1/3 py-2 text-black">Student Name</td>
                  <td>
                    <div className="font-semibold text-blue-700">ADITYA VERMA</div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2 text-black">Student ID</td>
                  <td>
                    <div className="font-semibold text-blue-700">555555</div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2 text-black">Register No.</td>
                  <td>
                    <div className="font-semibold text-blue-700">RA2211027010019</div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2 text-black">Email ID</td>
                  <td>
                    <div className="font-semibold text-blue-700">av4923@srmist.edu.in</div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2 text-black">Institution</td>
                  <td>
                    <div className="font-semibold text-gray-500">Faculty of Engineering and Technology, Kattankulathur</div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2 text-black">Program</td>
                  <td>
                    <div className="font-semibold text-gray-500">
                      B.Tech.-Computer Science and Engineering with specialization in Big Data Analytics [UG - FT - ACADEMIC]
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2 text-black">Faculty Advisor</td>
                  <td>
                    <div className="font-semibold text-gray-500">Dr. Panimalar K [102945]</div>
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 text-black">Academic Advisor</td>
                  <td>
                    <div className="font-semibold text-gray-500">Dr. Hemavathi D [100390]</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/12">
        <div className="flex justify-center lg:justify-start">
          <div className="relative border border-gray-300 rounded-lg mb-4 bg-white shadow w-full max-w-md">
            <div className="p-4 text-center">
              <div className="flex justify-center items-center">
              <Image 
            src={profilePic} 
            alt="Profile Picture" 
            width={150} 
            height={150} 
            className="rounded-full"
          />
              </div>
              <div className="font-semibold text-gray-500 mb-4">
                Current Status: <span className="text-lime-600">Active</span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="file-upload"
                className="hidden" // Hide the default file input
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-800 transition"
              >
                Choose File
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
