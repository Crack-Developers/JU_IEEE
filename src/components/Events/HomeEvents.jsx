import React from 'react';
import img from "../../assets/abcd.jpg"

// Sample event data
const events = [
  {
    date: "01 Aug 2024",
    title: "Creative Canvas Webinar",
    description: "A webinar to explore creative techniques and artistic canvases.",
    buttonText: "Read more",
    imageUrl: img, // Update this path with the correct image path
  },
  {
    date: "15 Mar 2024",
    title: "Lenscape",
    description: "Join us for a comprehensive photography workshop focused on landscapes.",
    buttonText: "Read more",
    imageUrl: img, // Update this path with the correct image path
  },
  {
    date: "06 Oct 2023",
    title: "Ideathon",
    description: "A brainstorming event to generate innovative ideas and solutions.",
    buttonText: "Read more",
    imageUrl: img, // Update this path with the correct image path
  },
];

const HomeEvents = () => {
  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Our Events</h2>
        <p className="text-center text-white mb-8">Pioneering Innovation, Fostering Collaboration, and Shaping the Future</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 bg-blue-600 text-white py-1 px-2 text-sm font-semibold">
                  {event.date}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200">
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-5'><button className='text-white p-3 bg-green-600 rounded-md capitalize tracking-wider'>view more</button></div>
    </section>
  );
};

export default HomeEvents;
