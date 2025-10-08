

"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import dynamic from "next/dynamic";

// imports
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

const TherapistProfile = () => {
  const { id } = useParams(); // therapist _id from URL
  const [therapist, setTherapist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchTherapist = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/therapist/${id}`);
        console.log(res.data); // check the data structure
        setTherapist(res.data); // therapist object from DB
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Therapist not found");
        setLoading(false);
      }
    };
    fetchTherapist();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
        <img
          src={therapist.image || "https://via.placeholder.com/150"}
          alt={therapist.name}
          className="rounded-full w-32 h-32 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">{therapist.name}</h1>
        <p className="text-teal-700 font-semibold">{therapist.specialization}</p>


        <div className="mt-4 space-y-1 text-gray-700">
  <p><strong>Fees:</strong> {therapist.fees}</p>
  <p><strong>Availability:</strong> {therapist.availability}</p>
  {therapist.location && therapist.location.latitude && therapist.location.longitude && (
    <p><strong>Location:</strong> {therapist.location.latitude}, {therapist.location.longitude}</p>
  )}
</div>


        {/* ✅ Map renders only when lat & lng exist */}
        {therapist.location &&
          therapist.location.latitude &&
          therapist.location.longitude && (
            <div className="w-full mt-6">
              <MapContainer
                center={[
                  therapist.location.latitude,
                  therapist.location.longitude,
                ]}
                zoom={13}
                style={{ height: "300px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <Marker
                  position={[
                    therapist.location.latitude,
                    therapist.location.longitude,
                  ]}
                >
                  <Popup>
                    {therapist.name} – {therapist.specialization}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}

        <Link
          href={`/appointment/${therapist._id}`}
          className="mt-6 bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default TherapistProfile;
