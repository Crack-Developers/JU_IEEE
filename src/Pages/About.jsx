import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer5';
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../assets/about_bg.jpg";  // Ensure this path is correct

const About = () => {
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
        className="bg-black text-white py-16 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }} // Ensure the correct background image path
      >
        <div className="container mx-auto px-6 text-center mt-12"> {/* Added margin-top for spacing */}
          <div
            className="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-5xl font-extrabold text-indigo-800 mb-8">
              About IEEE Club
            </h2>
            <p
              className="text-lg leading-relaxed text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The IEEE Student Branch at Jeppiaar Engineering College stands at the forefront of
              technical innovation and professional development. Our mission is to nurture a
              vibrant community of students who are passionate about engineering, technology, and
              research. As a part of the world’s largest technical professional organization,
              we offer unparalleled access to resources, knowledge, and opportunities that
              empower our members to drive advancements in technology.
            </p>
            <p
              className="text-lg leading-relaxed text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our club hosts a range of activities, from workshops on cutting-edge technologies 
              such as AI, robotics, and cybersecurity, to hands-on hackathons and coding challenges.
              We also provide networking opportunities through industry talks and collaborations 
              with professionals from leading tech firms. IEEE’s mission is to advance technology 
              for the benefit of humanity, and we are proud to embody that mission in all that we do.
            </p>
            <p
              className="text-lg leading-relaxed text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Beyond the technical domain, we emphasize the development of leadership and 
              collaboration skills. Our student members take active roles in organizing events, 
              managing teams, and developing strategies that align with the goals of IEEE globally.
              We believe that this combination of technical and soft skills prepares our members 
              to thrive in any future career path they choose, be it academia, industry, or 
              entrepreneurship.
            </p>
            <p
              className="text-lg leading-relaxed text-gray-900"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              As a member of the IEEE community, you are not only advancing your career but 
              contributing to a larger cause—shaping the future of technology to create a better, 
              more connected world. We invite you to join us on this journey of discovery, innovation, 
              and impact. Together, we can explore new frontiers in technology, and, as IEEE members, 
              we are committed to making meaningful contributions to society.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;
