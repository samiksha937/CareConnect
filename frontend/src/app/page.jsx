
"use client"
import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-700 min-h-screen flex items-center justify-center px-6 md:px-20">
 
        <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-white text-teal-700 rounded-xl">CareConnect</h1>
            <h2 className="text-2xl font-semibold mb-6 text-center bg-white text-teal-700 rounded-xl">
              Connect with compassionate care
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-center bg-white text-teal-700 rounded-xl">
              At CareConnect, we believe that seeking support is a sign of strength. Our platform offers a curated selection of experienced mental health professionals dedicated to guiding you through life's complexities. Whether you're seeking to manage stress, improve relationships, or embark on a path of personal growth, we provide a secure and professional environment for you to connect with the right expert. Take the first step toward a more balanced and fulfilling life.
            </p>
            {/* <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              See More
            </button> */}
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/cindrella.png"
              alt="image"
              className="h-150 w-full md:w-[600px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12 ">
            Our Services
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
              <div className="space-y-6 lg:space-y-10">
                {/* Service Block */}
                <div className="flex gap-x-5 sm:gap-x-8">
                  <svg
                    className="shrink-0 mt-2 size-8 text-teal-600"
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
                    <rect width={18} height={10} x={3} y={11} rx={2} />
                    <circle cx={12} cy={5} r={2} />
                    <path d="M12 7v4" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-teal-700 hover:scale-105 hover:text-red-700 hover:underline">
                      Diverse Professional Expertise
                    </h3>
                    <p className="mt-1 text-gray-600 hover:scale-105 hover:text-red-700 ">
                      The platform connects users with "therapists, guides, counselors, and psychologists from various fields," assuring them that they can find a professional with the right specialization for their unique situation, whether it's anxiety, relationship issues, career stress, or personal growth.
                    </p>
                  </div>
                </div>
                {/* Service Block */}
                <div className="flex gap-x-5 sm:gap-x-8">
                  <svg
                    className="shrink-0 mt-2 size-8 text-teal-700"
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
                    <path d="m7.5 4.27 9 5.15" />
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-teal-700 hover:scale-105 hover:text-red-700 hover:underline">
                     Holistic Mental Health Support
                    </h3>
                    <p className="mt-1 text-gray-600 hover:scale-105 hover:text-red-700">
                      Go beyond just therapists. Mention the range of professionals available—"therapist, guide, counselor, psychologist from various fields"—to highlight that users can find support for a wide spectrum of needs, from clinical issues to personal growth.
                    </p>
                  </div>
                </div>
                {/* Service Block */}
                <div className="flex gap-x-5 sm:gap-x-8">
                  <svg
                    className="shrink-0 mt-2 size-8 text-teal-600"
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
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-teal-700 hover:scale-105 hover:text-red-700 hover:underline">
                      Filter Therapists by their field of expertise
                    </h3>
                    <p className="mt-1 text-gray-600 hover:scale-105 hover:text-red-700">
                      Our platform helps you find the right fit by allowing you to filter therapists by their field of expertise, ensuring you connect with a professional who understands your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-10">
                {/* Service Block */}
                <div className="flex gap-x-5 sm:gap-x-8">
                  <svg
                    className="shrink-0 mt-2 size-8 text-teal-600"
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
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-teal-700 hover:scale-105  hover:underline hover:text-red-700">
                     24/7 Availability
                    </h3>
                    <p className="mt-1 text-gray-600 hover:scale-105 hover:text-red-700">
                     Users can access the website at any time, from anywhere, to browse therapist profiles and book appointments, removing barriers to seeking mental health support.
                    </p>
                  </div>
                </div>
                {/* Service Block */}
                <div className="flex gap-x-5 sm:gap-x-8">
                  <svg
                    className="shrink-0 mt-2 size-8 text-teal-600"
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
                    <circle cx={9} cy={7} r={4} />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-teal-700 hover:scale-105 hover:underline hover:text-red-700">
                     Secure and confidential environment
                    </h3>
                    <p className="mt-1 text-gray-600 hover:scale-105 hover:text-red-700">
                      We are committed to protecting your privacy. All user data, therapist profiles, and appointment information are stored securely in a MongoDB database, ensuring your personal journey remains completely confidential.
                    </p>
                  </div>
                </div>
                {/* Service Block */}
                <div className="flex gap-x-5 sm:gap-x-8 ">
                  <svg
                    className="shrink-0 mt-2 size-8 text-teal-600"
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
                    <path d="M7 10v12" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-teal-700 hover:underline hover:scale-105 hover:text-red-700">
                    User friendly & intuitive interface
                    </h3>
                    <p className="mt-1 text-gray-600 hover:scale-105 hover:text-red-700">
                     Acknowledge that the process of seeking help can be daunting, and reassure users that your platform is designed to be simple and easy to navigate. The user-friendly design helps reduce stress and makes the process of finding and booking an appointment straightforward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-teal-700">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto">
            {/* Grid */}
            <div className="grid gap-12">
              <div>
                <h2 className="text-3xl text-white font-bold lg:text-4xl">
                  Our vision
                </h2>
                <p className="mt-3 text-white">
                We envision a world where mental well-being is not a luxury but a fundamental part of a healthy life. We are dedicated to creating a professional, compassionate, and easily accessible space that empowers individuals to take charge of their mental health journey. We believe that everyone deserves the opportunity to connect with the right guidance, find clarity, and build a more fulfilling life.
                </p>
              </div>

              <div className="space-y-6 lg:space-y-10">
                {/* Vision Block */}
                <div className="flex gap-x-5 sm:gap-x-8">
                  <svg
                    className="shrink-0 mt-2 size-6 text-white"
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
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-white">
                     To Remove Barriers:
                    </h3>
                    <p className="mt-1 text-white">
                      We strive to make professional mental health support accessible to everyone, regardless of their location or circumstance. By providing an easy-to-use digital platform, we remove the traditional barriers that often prevent people from seeking the help they need.
                    </p>
                  </div>
                </div>

                {/* Vision Block */}
                <div className="flex gap-x-5 sm:gap-x-8">
                  <svg
                    className="shrink-0 mt-2 size-6 text-white"
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-white">
                   To Empower Individuals:
                    </h3>
                    <p className="mt-1 text-white">
                      We believe that the journey to well-being is an active process. Our vision is to empower you with the tools and resources to find and connect with the perfect mental health professional who can guide and support you every step of the way.
                    </p>
                  </div>
                </div>

                {/* Vision Block */}
                <div className="flex gap-x-5 sm:gap-x-8">
                  <svg
                    className="shrink-0 mt-2 size-6 text-white"
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
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-white">
                  To Champion Confidentiality:
                    </h3>
                    <p className="mt-1 text-white">
                    We believe that trust is built on privacy. Our vision is to provide a secure and non-judgmental space where you can seek guidance with the absolute certainty that your information and your story are protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>
        </div>
      </section>

      {/* Stats Section (at bottom) */}
      <section className="bg-white">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <p className=" text-center font-bold text-teal-700 text-3xl  mb-15 underline"> Statistics </p>
          <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:pe-6 xl:pe-12">
                <p className="text-6xl font-bold leading-10 text-teal-600">
                  15% 
                  <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-teal-700 text-xs leading-4 rounded-full py-0.5 px-2">
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                    (a study also suggest that in 2024 almost 40% of teenagers in country suffer anxiety & stress)
                  </span>
                </p>
                <p className="mt-2 sm:mt-3 text-gray-500">
                 % of people affected with mental health related issues in INDIA as of now(2025) also these % means almost 60-70 millions.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200">
              <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
                <div>
                  <p className="text-3xl font-semibold text-teal-600">
                    20%
                  </p>
                  <p className="mt-1 text-gray-500">only this much people seek help.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-teal-600">90%</p>
                  <p className="mt-1 text-gray-500">Approximately these % of individuals who die by suicide have a psychiatric illness, with mood disorders being the most common</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-teal-600">70-92%</p>
                  <p className="mt-1 text-gray-500">treatemnt gap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Masonry Cards Section */}
<section className="max-w-9xl px-4 py-10 bg-teal-700 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <p className="text-3xl text-white font-bold underline text-center mb-15 ">Articles</p>
  <div className="grid sm:grid-cols-12 gap-6">
    {/* Card 1 */}
    <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
      <a
        href="https://www.google.com/search?sca_esv=9262f80ffd90b9fa&rlz=1C1GCEA_enIN1178IN1178&sxsrf=AE3TifPkjfWqaK_zfocDAi77MJ4ipTx3Zg:1758469130139&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEpAyvq_nCZZSdNL3a_zWXE0QAVMEwvG9046AsMhyduocbLqKdq4Y_SIdPGk2f7T1hLJHxec2O6Llm_TkGSSCFNBxNLVr9z67KRgVkk9TDdH4aftUICblqx8FCMp8idydjNsi2KQ&q=mental+health+articles&sa=X&ved=2ahUKEwjA0Ob-l-qPAxU9bfUHHZefCWIQtKgLegQIFhAB&biw=1536&bih=730&dpr=1.25#vhid=VJiPgXzD0ZZ3TM&vssid=mosaic"
        target="_blank"
        className="group relative block rounded-xl overflow-hidden focus:outline-none"
      >
        <div className="rounded-xl overflow-hidden">
          <img
            src="/article1.png"
            alt="Workplace personalities"
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full object-cover rounded-xl"
          />
        </div>
        {/* <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="text-sm md:text-xl font-semibold text-teal-700 bg-white rounded-lg p-4">
            Workplace personalities
          </div>
        </div> */}
      </a>
    </div>

    {/* Card 2 */}
    <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
      <a
        href="https://www.google.com/search?sca_esv=9262f80ffd90b9fa&rlz=1C1GCEA_enIN1178IN1178&sxsrf=AE3TifPkjfWqaK_zfocDAi77MJ4ipTx3Zg:1758469130139&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEpAyvq_nCZZSdNL3a_zWXE0QAVMEwvG9046AsMhyduocbLqKdq4Y_SIdPGk2f7T1hLJHxec2O6Llm_TkGSSCFNBxNLVr9z67KRgVkk9TDdH4aftUICblqx8FCMp8idydjNsi2KQ&q=mental+health+articles&sa=X&ved=2ahUKEwjA0Ob-l-qPAxU9bfUHHZefCWIQtKgLegQIFhAB&biw=1536&bih=730&dpr=1.25#vhid=xL_XRnNO40OC9M&vssid=mosaic"
        target="_blank"
        className="group relative block rounded-xl overflow-hidden focus:outline-none"
      >
        <div className="rounded-xl overflow-hidden">
          <img
            src="/article2.png"
            alt="Women in engineering"
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full object-cover  rounded-xl"
          />
        </div>
        {/* <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="text-sm md:text-xl font-semibold text-teal-700 bg-white rounded-lg p-4">
            Women in engineering
          </div>
        </div> */}
      </a>
    </div>

    {/* Card 3 */}
    <div className="col-span-12 md:col-span-4">
      <a
        href="https://www.google.com/search?sca_esv=9262f80ffd90b9fa&rlz=1C1GCEA_enIN1178IN1178&sxsrf=AE3TifPkjfWqaK_zfocDAi77MJ4ipTx3Zg:1758469130139&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEpAyvq_nCZZSdNL3a_zWXE0QAVMEwvG9046AsMhyduocbLqKdq4Y_SIdPGk2f7T1hLJHxec2O6Llm_TkGSSCFNBxNLVr9z67KRgVkk9TDdH4aftUICblqx8FCMp8idydjNsi2KQ&q=mental+health+articles&sa=X&ved=2ahUKEwjA0Ob-l-qPAxU9bfUHHZefCWIQtKgLegQIFhAB&biw=1536&bih=730&dpr=1.25#vhid=MKlABZcf-OUeVM&vssid=mosaic"
        target="_blank"
        className="group relative block rounded-xl overflow-hidden focus:outline-none"
      >
        <div className="rounded-xl overflow-hidden">
          <img
            src="/article3.png"
            alt="Pride 2021"
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full object-cover rounded-xl"
          />
        </div>
        {/* <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="text-sm md:text-xl font-semibold text-teal-700 bg-white rounded-lg p-4">
            Pride 2021
          </div>
        </div> */}
      </a>
    </div>

    {/* Card 4 */}
    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      <a
        href="https://www.google.com/search?sca_esv=b4f5d26490e949a3&rlz=1C1GCEA_enIN1178IN1178&sxsrf=AE3TifMxSnxOqGKj1ajeAL31m-j8FP_56w:1758469281338&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEWeBTRRMkGx8PE2F9zI9kP0W9slwfD0e_E2SCYpxxEsC_BrWJwexl-O9EWcJokLfolidtcXxvW99MwkbO-wb4MAKMfrgJXRv1udcTEvX7muF0uB0QmZ1f0PFcGGpV6k0vi_XqFw&q=mental+health+statistics+in+india&sa=X&ved=2ahUKEwjgi_PGmOqPAxX9c_UHHSgsDKMQtKgLegQIFxAB&biw=1536&bih=730&dpr=1.25#vhid=oO6ZAxN1tzmcoM&vssid=mosaic"
        target="_blank"
        className="group relative block rounded-xl overflow-hidden focus:outline-none"
      >
        <div className="rounded-xl overflow-hidden">
          <img
            src="/statsso.png"
            alt="Data at Preline"
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full object-cover rounded-xl"
          />
        </div>
        {/* <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="text-sm md:text-xl font-semibold text-teal-700 bg-white rounded-lg p-4">
            Data at Preline
          </div>
        </div> */}
      </a>
    </div>

    {/* Card 5 */}
    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      <a
        href="https://www.google.com/search?sca_esv=b4f5d26490e949a3&rlz=1C1GCEA_enIN1178IN1178&sxsrf=AE3TifMxSnxOqGKj1ajeAL31m-j8FP_56w:1758469281338&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrEWeBTRRMkGx8PE2F9zI9kP0W9slwfD0e_E2SCYpxxEsC_BrWJwexl-O9EWcJokLfolidtcXxvW99MwkbO-wb4MAKMfrgJXRv1udcTEvX7muF0uB0QmZ1f0PFcGGpV6k0vi_XqFw&q=mental+health+statistics+in+india&sa=X&ved=2ahUKEwjgi_PGmOqPAxX9c_UHHSgsDKMQtKgLegQIFxAB&biw=1536&bih=730&dpr=1.25#vhid=z39VH4j8kfSCaM&vssid=mosaic"
        target="_blank"
        className="group relative block rounded-xl overflow-hidden focus:outline-none"
      >
        <div className="rounded-xl overflow-hidden">
          <img
            src="/article5.png"
            alt="Empowered management"
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full object-cover rounded-xl"
          />
        </div>
        {/* <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="text-sm md:text-xl font-semibold text-teal-700 bg-white rounded-lg p-4">
            Empowered management
          </div>
        </div> */}
      </a>
    </div>
  </div>
</section>
{/* Card Blog Section */}
<section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
  <div className="grid lg:grid-cols-2 gap-6 ">
    {/* Card 1 */}
    <a
      href="https://www.turnbridge.com/news-events/latest-articles/prince-harry-meghan-markle-mental-health/"
      target="_blank"
      className="group relative block rounded-xl overflow-hidden focus:outline-none"
    >
      <div className="relative w-full h-96 rounded-xl overflow-hidden before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-gray-900/70">
       
        <img
         
          className="absolute inset-0 w-full h-full object-cover"
          src="/hp3.png"
          alt="Blog Image"
        />
      </div>

      {/* Avatar Top */}
      <div className="absolute top-0 inset-x-0 z-20 p-4 sm:p-6 flex items-center">
        <img
        
          className="size-11 border-2 border-white rounded-full"
          src="/harry2.png"
          alt="Avatar"
        />
        <div className="ml-3">
          <h4 className="font-semibold text-white">Prince Harry</h4>
          <p className="text-xs text-white/80">April , 2017</p>
        </div>
      </div>

      {/* Text Bottom */}
      <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6">
        <h3 className="text-lm sm:text-xl font-semibold text-white group-hover:text-white/80">
          Prince Harry has made statements advocating for better mental well-being, including suggesting the term "mental health" should be changed to "mental fitness" to emphasize proactive care and a "can-do" attitude, rather than just focusing on illness. 
        </h3>
        <p className="mt-2 text-white/80">
          Source : Docuseries- The Me You Can't See (2021)
        </p>
      </div>
    </a>

    {/* Card 2 */}
    <a
      href="https://sunlightrecovery.com/michelle-obama-mental-health/"
      target="_blank"

      className="group relative block rounded-xl overflow-hidden focus:outline-none"
    >
      <div className="relative w-full h-96 rounded-xl overflow-hidden before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-gray-900/70">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/mobama3.png"
          alt="Blog Image"
        />
      </div>

      {/* Avatar Top */}
      <div className="absolute top-0 inset-x-0 z-20 p-4 sm:p-6 flex items-center">
        
        <img
      
          className="size-11 border-2 border-white rounded-full"
          src="/michelle2.png"
          alt="Avatar"
        
        />
        
        <div className="ml-3">
          <h4 className="font-semibold text-white">Michelle B. Obama</h4>
          <p className="text-xs text-white/80"> 2015</p>
        </div>
      </div>

      {/* Text Bottom */}
      <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6">
        <h3 className="text-lg sm:text- xl font-semibold text-white group-hover:text-white/80">
          We need to teach our kids that mental illness are just like physical illness and need attention.
        </h3>
        <p className="mt-2 text-white/80">
         Source : Change Direction Campaign(2015).
        </p>
      </div>
    </a>
  </div>
</section>



    </>
  );
};

export default Home;






