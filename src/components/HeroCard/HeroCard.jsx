import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaLaptopCode } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa";

const ServiceData = [
  {
    title: "Web Development Workshop",
    content: "Learn HTML, CSS, JavaScript",
    description:
      "Join us to build modern and responsive websites using the latest web technologies.",
    icon: <FaLaptopCode className="text-7xl" />, // Icon for coding or web development
    aosDelay: "300",
  },
  {
    title: "Network Security Seminar",
    content: "Basics to Advanced",
    description:
      "A comprehensive session on network security fundamentals, protocols, and practical applications.",
    icon: <FaNetworkWired className="text-7xl" />, // Icon for network or security
    aosDelay: "500",
  },
  {
    title: "AI & Machine Learning",
    content: "Innovations in AI",
    description:
      "Explore the world of AI and machine learning with hands-on projects and expert guidance.",
    icon: <FaRobot className="text-7xl" />, // Icon for AI or robotics
    aosDelay: "700",
  },
  {
    title: "Robotics Club Meet",
    content: "Build & Code Robots",
    description:
      "Collaborate with peers to design, build, and program robots for various challenges.",
    icon: <FaMicrochip className="text-7xl" />, // Icon for microchip or robotics
    aosDelay: "300",
  },
  {
    title: "Ethical Hacking Workshop",
    content: "Learn to Protect",
    description:
      "An interactive workshop on ethical hacking techniques and cybersecurity practices.",
    icon: <FaShieldAlt className="text-7xl" />, // Icon for security or ethical hacking
    aosDelay: "500",
  },
  {
    title: "IoT & Smart Devices",
    content: "The Future of Connectivity",
    description:
      "Understand the integration of IoT in daily life and develop projects using smart devices.",
    icon: <FaSatelliteDish className="text-7xl" />, // Icon for IoT or connectivity
    aosDelay: "700",
  },
];

const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      key={index} // Adding a unique key to each mapped element
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt="Wave Graphic"
                className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
