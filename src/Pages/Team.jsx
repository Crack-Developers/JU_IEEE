import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer5';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';  // Import icons from react-icons
import teamMember1 from '../assets/a.jpg';  // Replace with actual team member image paths
import bg from "../assets/about_bg.jpg";  // Import the background image

const Team = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const teamMembers = [
    {
      name: 'Ms. Kayalvizhi S',
      position: 'IEEE Faculty Incharge',
      imgSrc: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Bharani K',
      position: 'Chairman, Executive Committee Member',
      imgSrc: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Raymond V',
      position: 'Vice Chairman, Executive Committee Member',
      imgSrc: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Raymond V',
      position: 'Vice Chairman, Executive Committee Member',
      imgSrc: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Raymond V',
      position: 'Vice Chairman, Executive Committee Member',
      imgSrc: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Raymond V',
      position: 'Vice Chairman, Executive Committee Member',
      imgSrc: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Raymond V',
      position: 'Vice Chairman, Executive Committee Member',
      imgSrc: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Raymond V',
      position: 'Vice Chairman, Executive Committee Member',
      imgSrc: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Raymond V',
      position: 'Vice Chairman, Executive Committee Member',
      imgSrc: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
  ];

  return (
    <>
      <Navbar />
      <section
        className="bg-black text-white py-16 min-h-screen"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Team Member Image */}
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                {/* Team Member Name and Position */}
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{member.position}</p>
                {/* Social Icons */}
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin className="text-white w-6 h-6 hover:text-blue-500 transition duration-300" />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter className="text-white w-6 h-6 hover:text-blue-400 transition duration-300" />
                  </a>
                  <a href={member.social.facebook} target="_blank" rel="noreferrer">
                    <FaFacebook className="text-white w-6 h-6 hover:text-blue-600 transition duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;
