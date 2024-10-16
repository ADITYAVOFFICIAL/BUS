import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the center coordinates for SRM IST KTR
const srmLocation = {
  lat: 12.9352, // Latitude of SRM IST KTR
  lng: 80.1291, // Longitude of SRM IST KTR
};

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const BusLocation: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Bus Location</h1>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={srmLocation}
          zoom={15}
        >
          <Marker position={srmLocation} label="SRM IST KTR" />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default BusLocation;
