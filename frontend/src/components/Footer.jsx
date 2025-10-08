
"use client"
import React from 'react'
import Link from "next/link";


const Footer = () => {
  return (
    <div>{/* ========== FOOTER ========== */}
<footer className="mt-10 w-full max-w-[95rem] py-10 px-4 sm:px-6 lg:px-8 bg-teal-700 mx-auto">
  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
    <div className="col-span-full hidden lg:col-span-1 lg:block">
      <a
        className="flex-none font-semibold text-xl text-white focus:outline-hidden focus:opacity-80 dark:text-white"
        href="#"
        aria-label="Brand"
      >
        CareConnect
      </a>
      <p className="mt-3 text-xs sm:text-sm text-white dark:text-neutral-400">
        © 2025 copyrights reserved.
      </p>
    </div>
    {/*AUTHENTICATION  */}
    <div>
      <h4 className="text-xs  text-white uppercase underline font-bold dark:text-neutral-100">Authentication</h4>
      <div className="mt-3 grid space-y-3 text-sm ">




<div className='text-white underline space-y-3'>
{["Login", "Signup", "Admin Login"].map((item) => (
  <p key={item}>
    <Link
      href={
        item === "Login"
          ? "/login"
          : item === "Signup"
          ? "/signup"
          : "/adminlogin" // URL for Admin Login
      }
      className="relative group"
    >
      {item}
      <span className="  absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-700 group-hover:w-full transition-all"></span>
    </Link>
  </p>
))}
</div>




      </div>
    </div>
    {/* US */}
    <div>
      <h4 className="text-xs  text-white underline uppercase font-bold dark:text-neutral-100">About Us</h4>
      <div className="mt-3 grid space-y-3 text-sm">
        {/* {["About us"].map((item, idx) => (
          <p key={idx}>
            <a
              className="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              {item.includes("—") ? item.split("—")[0] : item}
              {item.includes("—") && (
                <span className="inline text-blue-600 dark:text-blue-500">— {item.split("—")[1].trim()}</span>
              )}
            </a>
          </p>
        ))} */}




<div className="text-white underline space-y-3">
  {["About Us"].map((item) => (
    <p key={item}>
      <Link
        href="/about"  // directly link to About page
        className="relative group"
      >
        {item}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-700 group-hover:w-full transition-all"></span>
      </Link>
    </p>
  ))}
</div>



      </div>
    </div>
    {/* CTA*/}
    <div>
      <h4 className="text-xs  text-white underline font-bold uppercase dark:text-neutral-100">CTA</h4>
      <div className="mt-3 grid space-y-3 text-sm">
        {/* {["Contact Us"].map((item) => (
          <p key={item}>
            <a
              className="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              {item}
            </a>
          </p>
        ))} */}


<div className="text-white underline space-y-3">
  {["Contact Us"].map((item) => (
    <p key={item}>
      <Link
        href="/contact"  // directly link to About page
        className="relative group"
      >
        {item}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-700 group-hover:w-full transition-all"></span>
      </Link>
    </p>
  ))}
</div>


      </div>
    </div>
    {/* Therapist & More */}
    <div>
      <h4 className="text-xs  text-white underline font-bold uppercase dark:text-neutral-100">Therapists</h4>
      <div className="mt-3 grid space-y-3 text-sm">
        {/* {["Therapist Profile"].map((item) => (
          <p key={item}>
            <a
              className="inline-flex gap-x-2 text-white hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              {item.includes("—") ? item.split("—")[0] : item}
              {item.includes("—") && (
                <span className="inline text-blue-600 dark:text-blue-500">— {item.split("—")[1].trim()}</span>
              )}
            </a>
          </p>
        ))} */}



<div className="text-white underline space-y-3">
  {["Therapists"].map((item) => (
    <p key={item}>
      <Link
        href="/listing"  // directly link to About page
        className="relative group"
      >
        {item}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-700 group-hover:w-full transition-all"></span>
      </Link>
    </p>
  ))}
</div>


      </div>
     
    </div>
  </div>
  {/* dropdown language */}
  <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
    <div className="sm:flex sm:justify-between sm:items-center">
      <div className="flex flex-wrap items-center gap-3">
        <div className="hs-dropdown [--placement:top-left] relative inline-flex">
          <button
            id="hs-footer-language-dropdown"
            type="button"
            className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            English (US)
            {/* <svg
              className="hs-dropdown-open:rotate-180 shrink-0 size-4 text-gray-500 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg> */}
          </button>
         {/* dropdown menu */}
          <div
            className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-footer-language-dropdown"
          >
            <a
              className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
              href="#"
            >
              English (US)
            </a>
            <a
              className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
              href="#"
            >
              French
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer> 
</div>
  )
}

export default Footer


