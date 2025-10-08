


"use client"
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center fixed top-0 left-0 z-50 ">
        <h1 className="text-2xl font-bold text-teal-700">CareConnect</h1>

        {/* Hamburger for mobile */}
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>

        {/* Menu */}
        <ul className="flex flex-col md:flex-row md:space-x-8 absolute md:static bg-white w-full left-0 md:w-auto top-16 md:top-0 transition-all duration-300 max-h-0 overflow-hidden md:max-h-full">
          <li className="relative group cursor-pointer px-4 py-2 md:p-0">
            <Link href="/about" className="relative group">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-700 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="relative group cursor-pointer px-4 py-2 md:p-0">
            <Link href="/contact" className="relative group">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-700 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="relative group cursor-pointer px-4 py-2 md:p-0">
            <Link href="/listing" className="relative group">
              Therapists
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-700 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          {/* <li className="relative group cursor-pointer px-4 py-2 md:p-0">
            <Link href="/signup" className="relative group">
              Signup
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-700 group-hover:w-full transition-all"></span>
            </Link>
          </li> */}
          {/* <li className="relative group cursor-pointer px-4 py-2 md:p-0">
            <Link href="/login" className="relative group">
              Login
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-700 group-hover:w-full transition-all"></span>
            </Link>
          </li> */}
          <li className="px-4 py-2 md:p-0">
            <Link href="/signup">
              <button className="bg-teal-700 text-white px-5 py-1 rounded-lg hover:bg-teal-700 transition w-full md:w-auto">
                Signup
              </button>
            </Link>
          </li>
          <li className="px-4 py-2 md:p-0">
            <Link href="/login">
              <button className="bg-teal-700 text-white px-5 py-1 rounded-lg hover:bg-teal-700 transition w-full md:w-auto">
                Login
              </button>
            </Link>
          </li>
        </ul>

        {/* Tailwind CSS Checkbox Hack */}
        <style jsx>{`
          #menu-toggle:checked + label + ul {
            max-height: 500px; /* menu expands on mobile */
          }
        `}</style>
      </nav>
    </div>
  );
};

export default Navbar;
