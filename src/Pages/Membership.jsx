import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer5';
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from '../assets/membership_bg.webp'; // Use the appropriate background image

const Membership = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div
          className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-900">IEEE Membership Drive</h2>
          <p className="text-gray-600 mb-8">Join IEEE to enjoy numerous benefits and be part of a global community.</p>
          
          <div className="flex justify-center space-x-4">
            <a
              href="#benefits"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Benefits
            </a>
            <a
              href="#join"
              className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Join IEEE
            </a>
            <a
              href="#renew"
              className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Renew IEEE Membership
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Membership;
