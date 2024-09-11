import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer5';
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../assets/about_bg.jpg";  // Add a space-themed background image
import eventPoster1 from '../assets/about_bg.jpg';  // Import event posters

const Events = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const events = [
    {
      id: 1,
      date: "01 Aug 2024",
      title: "Creative Canvas Webinar",
      description: "A webinar to explore creative techniques and artistic canvases.",
      type: "Webinar",
      mode: "Online",
      time: "07:00 PM",
      buttonText: "View More",
      poster: eventPoster1,  // Add event poster
      aosDelay: 200,
    },
    {
      id: 2,
      date: "01 Aug 2024",
      title: "Creative Canvas Webinar",
      description: "A webinar to explore creative techniques and artistic canvases.",
      type: "Webinar",
      mode: "Online",
      time: "07:00 PM",
      buttonText: "View More",
      poster: eventPoster1,  // Add event poster
      aosDelay: 400,
    },
    {
      id: 3,
      date: "01 Aug 2024",
      title: "Creative Canvas Webinar",
      description: "A webinar to explore creative techniques and artistic canvases.",
      type: "Webinar",
      mode: "Online",
      time: "07:00 PM",
      buttonText: "View More",
      poster: eventPoster1,  // Add event poster
      aosDelay: 600,
    },
    {
      id: 4,
      date: "01 Aug 2024",
      title: "Creative Canvas Webinar",
      description: "A webinar to explore creative techniques and artistic canvases.",
      type: "Webinar",
      mode: "Online",
      time: "07:00 PM",
      buttonText: "View More",
      poster: eventPoster1,  // Add event poster
      aosDelay: 800,
    },
    {
      id: 5,
      date: "01 Aug 2024",
      title: "Creative Canvas Webinar",
      description: "A webinar to explore creative techniques and artistic canvases.",
      type: "Webinar",
      mode: "Online",
      time: "07:00 PM",
      buttonText: "View More",
      poster: eventPoster1,  // Add event poster
      aosDelay: 1000,
    },
    {
      id: 6,
      date: "01 Aug 2024",
      title: "Creative Canvas Webinar",
      description: "A webinar to explore creative techniques and artistic canvases.",
      type: "Webinar",
      mode: "Online",
      time: "07:00 PM",
      buttonText: "View More",
      poster: eventPoster1,  // Add event poster
      aosDelay: 1200,
    },
  ];

  return (
    <>
      <Navbar />
      <section
        className="bg-black text-white py-16 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Events</h2>
          <p className="text-lg text-gray-400 mb-12 text-center">
            Pioneering Innovation, Fostering Collaboration, and Shaping the Future
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                data-aos="fade-up"
                data-aos-delay={event.aosDelay}
              >
                {/* Event Poster */}
                <img src={event.poster} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                
                {/* Event Information */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-indigo-600 text-white p-2 rounded-lg">
                    <p className="text-sm font-bold">{event.date}</p>
                  </div>
                  <div className="text-sm text-gray-300">{event.type}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                <p className="text-gray-400 mb-6">{event.description}</p>
                <p className="text-sm text-gray-400 mb-2">Mode: {event.mode}</p>
                {event.time && (
                  <p className="text-sm text-gray-400 mb-6">Time: {event.time}</p>
                )}
                <a
                  href="#"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  {event.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
