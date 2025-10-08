
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

const Listing = () => {
  const [therapists, setTherapists] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  // Fetch therapists from backend
  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const res = await axios.get("http://localhost:5000/therapist"); // Your backend endpoint
        setTherapists(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch therapists");
      }
    };
    fetchTherapists();
  }, []);

  // Get unique specializations
  const specializations = ["All", ...new Set(therapists.map((t) => t.specialization))];

  // Filter therapists
  const filteredTherapists =
    selectedSpecialization === "All"
      ? therapists
      : therapists.filter((t) => t.specialization === selectedSpecialization);

  return (
    
    <div>
  


      {/* Listing */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-6 lg:mb-10 mt-20">
          <h2 className="text-2xl font-bold  md:text-4xl md:leading-tight dark:text-white">
            Our Therapists
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Choose the best therapist for you
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-8">
          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
            className="border px-4 py-2 rounded-md shadow"
          >
            {specializations.map((spec, index) => (
              <option key={index} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* Therapist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-9">
          {filteredTherapists.map((therapist) => (
            <div
              key={therapist._id}
              className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-x-4 mb-5">
                <img
                  className="rounded-full size-20 w-20"
                  src={therapist.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLBB4s1NPkV-6JrDRZosHLKbqatgJuHXq5w&s"}
                  alt={therapist.name}
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    {therapist.name}
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    {therapist.specialization}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                {therapist.description || "No description available"}
              </p>
              <Link href={`/therapistProfile/${therapist._id}`}>

                <button className="border-2 mt-5 p-3 bg-teal-700 text-white font-bold">
                  See profile
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;




