import React from 'react';
import img from "../../assets/a.jpg"

// Sample team member data
const teamMembers = [
  {
    name: "Ms. Kayalvizhi S",
    role: "Student Branch Coordinator",
    imageUrl: img, // Replace with the actual image path
  },
  {
    name: "Bharani K",
    role: "Chairman",
    imageUrl: img, // Replace with the actual image path
  },
  {
    name: "Raymond V",
    role: "Vice Chairman",
    imageUrl: img, // Replace with the actual image path
  },
  {
    name: "Livin M",
    role: "Secretary",
    imageUrl: img, // Replace with the actual image path
  },
  {
    name: "Tanya Priyasen V",
    role: "Treasurer",
    imageUrl: img, // Replace with the actual image path
  },
];

const HomeMembers = () => {
  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors duration-200">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeMembers;
