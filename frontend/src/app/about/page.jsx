"use client";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
   

      {/* Hero Section */}
{/* Hero Section */}
<section 
  className="w-full flex flex-col md:flex-row items-center justify-between text-left px-6 md:px-20 pt-32 pb-20 relative"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1588776814546-87cf44e4f3d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-teal-700 bg-opacity-50"></div>

  {/* Left - Text Content */}
  <div className="relative z-10 bg-white bg-opacity-95 p-10  shadow-lg flex-1">
    <p className="text-sm font-semibold text-teal-700 tracking-wide mb-3">
      LET ME CATCH YOU UP...
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
      We Built CareConnect To Help People Find Trusted Therapists &
      Seamlessly Book Appointments.
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      Welcome to CareConnect, a space designed to bridge the gap between you and the mental health support you deserve. We understand that beginning a journey toward better mental well-being is a personal and sometimes challenging step. That's why we created a platform that is not only professional and reliable but also deeply empathetic to your needs.
      <br /><br />
      Our mission is simple: to make quality therapy accessible to everyone, everywhere. We believe that finding the right therapist should not be a struggle. We’ve built CareConnect to be available 24/7, providing you with a safe and secure way to connect with experienced therapists on your own terms. Whether you're dealing with daily stress, navigating a difficult life change, or seeking long-term support, we are here to help you find your path forward.
      <br /><b  className="bg-teal-700 text-white">Thank you for choosing CareConnect. <br /> We are honored to be a part of your journey toward a healthier and happier you.</b>
    </p>
  </div>

  {/* Right - Full Image */}
  <div className="relative z-10 flex-1 h-full">
    <img
      src="/about.png"
      alt="About"
      className="w-full h-195 object-cover shadow-2xl"
    />
  </div>
</section>



      {/* Why CareConnect Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-12">
          Why Choose CareConnect?
        </h3>
        <div className="grid md:grid-cols-3 gap-10 ">
          <div className="bg-teal-700 p-8 rounded-2xl  shadow-lg hover:shadow-xl transition hover:scale-110">
            <h4 className="text-xl font-semibold text-white  mb-3 ">
             Accessibilty
            </h4>
            <p className="text-white ">
               We've made it our priority to offer a wide network of verified therapists, making it easier for you to find the right professional from the comfort of your own home. Our platform is designed for your convenience, allowing you to browse profiles, check availability, and book sessions seamlessly, day or night.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-110">
            <h4 className="text-xl font-semibold text-teal-700 mb-3">
              Ease of Use
            </h4>
            <p className="text-gray-700">
              We know your time is valuable. Our intuitive filtering system allows you to effortlessly search for therapists based on 
              their specialization. This ensures you can quickly find a professional who fits your specific needs and preferences
            </p>
          </div>
          <div className="bg-teal-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-110">
            <h4 className="text-xl font-semibold text-white mb-3">
              Personalized Care
            </h4>
            <p className="text-white   ">
            We understand that therapy is not a one-size-fits-all solution. Every therapist profile on CareConnect provides detailed information about their background and  areas of expertise. This transparency empowers you to make an informed decision and choose a therapist you feel comfortable and connected with.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
